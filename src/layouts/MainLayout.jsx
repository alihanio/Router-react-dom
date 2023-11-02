import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <Conteiner>
      <Menu />
      <Outlet />
    </Conteiner>
  );
};

export default MainLayout;

const Conteiner = styled.div`
  display: flex;
`;
