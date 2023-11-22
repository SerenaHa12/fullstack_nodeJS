import React from "react";
import { Divider, Box } from "@chakra-ui/react";

// import components
import Footer from "../../components/Home/Footer";
import Content from "../../components/Home/Content";

const Home = () => {
  return (
    <>
      <Box>
        <Content />
        <Divider />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
