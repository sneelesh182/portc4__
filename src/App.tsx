import { Flex } from "@chakra-ui/react";
import "./App.css";
import { SideBar } from "./Components/SideBar";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <Flex gap='4' justifyContent={'center'}>
        <SideBar />


        <AllRoutes />
      </Flex>
    </>
  );
}

export default App;
