import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { GridItem } from "@chakra-ui/react";

function Layout() {
  return (
    <div>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Outlet />
    </div>
  );
}

export default Layout;
