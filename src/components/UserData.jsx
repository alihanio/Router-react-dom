import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
const API = `https://jsonplaceholder.typicode.com/users`;

const UserData = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [id]);

  return (
    <Conteiner>
      <Box>
        <h3>id: {user.id}</h3>
        <h3>name: {user.name}</h3>
        <h3>email: {user.email}</h3>
        <h3>phone: {user.phone}</h3>
        <h3>username: {user.username}</h3>
        <h3>website: {user.website}</h3>
      </Box>

      <Link to=".." relative="path" className="back">
        Back to all users
      </Link>
    </Conteiner>
  );
};

export default UserData;

const Conteiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  padding: 1rem;
  border: 1px solid black;
`;
