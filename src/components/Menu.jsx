import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        to="posts"
        end
      >
        Posts
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="comments"
      >
        Comments
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="users"
      >
        Users
      </NavLink>
    </Nav>
  );
};

export default Menu;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 20rem;
  height: 100vh;
  margin-right:4rem;
  background-color: darkslategray;
`;
