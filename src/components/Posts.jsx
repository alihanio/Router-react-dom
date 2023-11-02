import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const API = ` https://jsonplaceholder.typicode.com/posts?_limit=10 `;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const getPosts = async () => {
        const response = await fetch(API);
        const data = await response.json();
        setPosts(data);
      };
      getPosts();
    } catch (error) {
      setError(error.massage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (error) {
    return <div>Error:{error}</div>;
  }

  return (
    <Conteiner>
      {isLoading ? (
        <IsLoading>loading...</IsLoading>
      ) : (
        <>
          <Heading>Posts</Heading>
          <Table>
            <tbody>
              <TrHeading>
                <TdHeading>#</TdHeading>
                <TdHeading>title</TdHeading>
                <TdHeading>body</TdHeading>
                <TdHeading>get more</TdHeading>
              </TrHeading>
              {posts.map(({ id, title, body }) => (
                <Tr key={id}>
                  <Td>{id}</Td>
                  <Td>{title}</Td>
                  <Td>{body}</Td>
                  <Td>
                    <Link className="data" to={id.toString()}>
                      Information
                    </Link>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Conteiner>
  );
};

export default Posts;

const Table = styled.table`
  border: 1px solid black;
  width: 60rem;
  border-collapse: collapse;
`;
const TrHeading = styled.tr`
  background-color: green;
`;
const Tr = styled.tr`
  cursor: pointer;
`;
const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 5rem;
`;
const Td = styled.td`
  border: 1px solid black;
  border-top: none;
  border-left: none;
  padding: 10px;
`;
const TdHeading = styled.td`
  padding: 10px;
`;
const IsLoading = styled.div`
  font-size: 6rem;
  background-color: #fcba04;
  padding: 1rem;
  border-radius: 1rem;
  width: 80%;
`;
