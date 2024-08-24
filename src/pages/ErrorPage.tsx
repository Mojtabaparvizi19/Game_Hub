import { Text, Box, Heading } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <Box>
      <NavBar />
      <Box padding={"100px"}>
        <Heading fontSize={"50px"} as={"h1"}>
          ops
        </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page Does Not Exist"
            : "Something went wronn"}
        </Text>
      </Box>
    </Box>
  );
}

export default ErrorPage;
