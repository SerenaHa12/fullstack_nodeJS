import React from "react";
import {
  Box,
  Flex,
  Center,
  Square,
  Stack,
  Heading,
  Text,
  VStack,
  Image,
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  SimpleGrid,
  Container,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg.png";
import { LinkIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const Content = () => {
  const navigate = useNavigate();
  const handleClickJoinUsNow = () => {
    navigate("/login");
  };
  return (
    <Box marginTop="50px">
      <Flex>
        <Box flex="1" p="4" marginTop="50px">
          <Text fontSize="2xl" as="b">
            Chào mừng bạn đến với Kanban, nơi quản lý công việc một cách hiệu
            quả!
          </Text>
          <Text fontSize="1xl">
            Kanban Board là một phương pháp quản lý công việc dựa trên trạng
            thái của từng nhiệm vụ, giúp bạn theo dõi và kiểm soát quy trình làm
            việc một cách dễ dàng.
          </Text>
          <Text fontSize="1xl">
            Để bắt đầu sử dụng Kanban Board, hãy đăng nhập và tạo các nhiệm vụ
            trong từng cột tương ứng với trạng thái của công việc.
          </Text>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={handleClickJoinUsNow}
            >
              Join us Now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Read more
            </Button>
          </ButtonGroup>
        </Box>
        <Box flex="1" p="4">
          <Image
            src="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Box>
      </Flex>

      <Divider />

      <Card align="center">
        <CardHeader>
          <Heading size="md">
            {" "}
            Kanban comes with a variety of project templates to help teams get
            set up quickly
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">View here</Button>
        </CardFooter>
      </Card>
      <Divider />

      <Card align="center">
        <Image
          src={bg}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
      </Card>

      <Divider />

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading size="md"> Easily track work at a glance:</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Work items are represented visually on your kanban board, so teams
              can quickly check the most up-to-date status of projects.
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">
              {" "}
              Limit work in progress to improve efficiency:
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Reduce bottlenecks by setting the maximum amount of work that can
              exist in each status with work in progress limits.
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">
              {" "}
              Use data to drive continuous improvement:
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Help ensure your teams are consistently delivering maximum value
              back to your business, with agile reports like the cumulative flow
              diagram.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Content;
