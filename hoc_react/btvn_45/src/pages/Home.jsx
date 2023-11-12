import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import {
  FormLabel,
  Text,
  SimpleGrid,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
  Progress,
  Heading,
  Stack,
  StackDivider,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ChakraProvider,
  extendTheme,
  VStack,
  HStack,
  Flex,
  Tag,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import MAX_TIME from "../../config";
import { RANGE_NUMBER } from "../../config";
// import { capsFirst } from "../utils";
// import ChakraCarousel from "../components/ChakraCarousel";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(MAX_TIME);
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);
  const isError = inputValue === "";

  const checkNumber = useMemo(
    () => Math.floor(Math.random() * (RANGE_NUMBER - 1)) + 1,
    []
  );
  // console.log(checkNumber);

  useEffect(() => {
    const dataFromStr = localStorage.getItem("sessions");
    // console.log(dataFromStr);
    if (dataFromStr) {
      const sessions = JSON.parse(dataFromStr);
      // console.log(sessions);
      setSessions(sessions);
      // setCount(MAX_TIME - currentSession.length);
      // console.log((MAX_TIME = currentSession.length));
    }
  }, [inputValue]);

  useEffect(() => {
    // Thêm sự kiện keydown khi component được tạo
    document.addEventListener("keydown", handleKeyPress);

    // Xóa sự kiện keydown khi component bị hủy
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [scrollIndex]);

  // handle submit
  const handleSubmit = () => {
    if (!inputValue) {
      toast.error("Bạn phải nhập 1 số");
      return;
    }

    const parsedInputValue = parseInt(inputValue, 10);
    let currentSessionUpdated = [
      ...currentSession,
      { count: currentSession.length + 1, value: parsedInputValue },
    ];
    let sessionsUpdated = [currentSessionUpdated, ...sessions.slice(1)];
    let countUpdated = count - 1;

    if (parsedInputValue === checkNumber) {
      toast.success("Chúc mừng, bạn đã đoán đúng!");
      // update sessions after wining
      // sessionsUpdated = [[], ...sessionsUpdated];
      currentSessionUpdated = [];
      // countUpdated = MAX_TIME;
    } else {
      if (countUpdated >= 1) {
        if (checkNumber < parsedInputValue) {
          toast.warning("Số bạn nhập lớn quá. Hãy nhập số nhỏ hơn chút nữa!");
        } else if (checkNumber > parsedInputValue) {
          toast.warning("Số bạn nhập nhỏ quá. Hãy nhập số lớn hơn chút nữa!");
        }
      } else {
        toast.error("Bạn đã hết số lần kiểm tra. Bạn đã thua!");
        // countUpdated = MAX_TIME;
        // sessionsUpdated = [[], ...sessionsUpdated];
        currentSessionUpdated = [];
      }
    }

    // update current session
    setCurrentSession(currentSessionUpdated);
    setCount(countUpdated);

    // update sessions
    setSessions(sessionsUpdated);
    localStorage.setItem("sessions", JSON.stringify(sessionsUpdated));
    setInputValue("");
  };

  const debouncedHandleSubmit = debounce(() => handleSubmit(), 100);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      debouncedHandleSubmit();
    } else if (e.key === "ArrowRight") {
      // Cuộn bảng sang phải
      setScrollIndex((prevIndex) =>
        prevIndex < sessions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowLeft") {
      // Cuộn bảng sang trái
      setScrollIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  // btn play
  const handlePlay = () => {
    const sessionsUpdated = [[], ...sessions];
    setCount(MAX_TIME);

    setSessions(sessionsUpdated);
    localStorage.setItem("sessions", JSON.stringify(sessionsUpdated));
    setTimeout(() => toast.info("Bắt đầu lại trò chơi!"), 1000);
  };

  let valueProgressBar;
  if (count === 0) {
    valueProgressBar = 0;
  } else if (count === 1) {
    valueProgressBar = 14.3;
  } else if (count === 2) {
    valueProgressBar = 28.571;
  } else if (count === 3) {
    valueProgressBar = 42.857;
  } else if (count === 4) {
    valueProgressBar = 57.2;
  } else if (count === 5) {
    valueProgressBar = 71.5;
  } else if (count === 6) {
    valueProgressBar = 85.8;
  } else if (count === 7) {
    valueProgressBar = 100;
  }
  return (
    <>
      <Container className="mt-3">
        <Row>
          <div className="top">
            <Progress value={valueProgressBar} size="sm" colorScheme="teal" />
          </div>

          {/* CONTENT */}
          <div
            className="input-content"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Text fontSize="3xl" color="teal.500" as="b">
              Chào mừng bạn đến với trò chơi đoán số!
            </Text>
            <Text fontSize="3xl" color="teal.600" as="b">
              Còn {count}/{MAX_TIME} lần
            </Text>
            <Text fontSize="3xl" color="teal.700" as="b">
              Bạn cần tìm kiếm một số từ 1 đến {RANGE_NUMBER - 1}
            </Text>
          </div>

          {count > 0 ? (
            <div></div>
          ) : (
            <div
              className="table-warp"
              style={{ display: "flex", overflow: "auto hidden" }}
            >
              <Carousel interval={null} data-bs-theme="dark">
                {sessions.map((session, index) => (
                  <Carousel.Item key={index}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                      <GridItem w="100%" h="320">
                        {/* TABLE */}
                        <div className="input-table mt-3">
                          <TableContainer>
                            <Table
                              variant="striped"
                              colorScheme="teal"
                              size="sm"
                              key={index}
                            >
                              <TableCaption></TableCaption>
                              <Thead>
                                <Tr>
                                  <Th>Số lần nhập</Th>
                                  <Th isNumeric>Số nhập vào</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {session.map((item, index) => (
                                  <Tr key={index}>
                                    <Td>{item.count}</Td>
                                    <Td isNumeric>{item.value}</Td>
                                  </Tr>
                                ))}
                              </Tbody>
                              <Tfoot></Tfoot>
                            </Table>
                          </TableContainer>
                        </div>
                      </GridItem>
                      <GridItem w="100%" h="320">
                        <Card>
                          <CardHeader as="b">Info Session:</CardHeader>
                          <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                              <Box className="box-content">
                                <Heading size="xs" textTransform="uppercase">
                                  Lần chơi thứ:
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {sessions.length - index} / {sessions.length}
                                </Text>
                              </Box>
                              <Box className="box-content">
                                <Heading size="xs" textTransform="uppercase">
                                  Số lần nhập tối đa:
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {MAX_TIME}
                                </Text>
                              </Box>
                              <Box className="box-content">
                                <Heading size="xs" textTransform="uppercase">
                                  Tỷ lệ đúng
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {count / session.length}.00 %
                                </Text>
                              </Box>
                            </Stack>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </Grid>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}

          {/* FORM */}
          <div className="input-number my-4">
            {count === 0 ? (
              <FormControl>
                <FormHelperText>Bấm chơi lại nào</FormHelperText>
              </FormControl>
            ) : (
              <FormControl isInvalid={isError} onKeyPress={handleKeyPress}>
                <FormLabel fontSize="md" color="teal.500">
                  Hãy thử nhập 1 số
                </FormLabel>
                <NumberInput
                  placeholder="Thử một số"
                  min={1}
                  max={99}
                  onChange={(valueString) => {
                    const value = parseInt(valueString);
                    // console.log(value);
                    if (isNaN(value)) {
                      // console.log("NaN");
                      setInputValue("");
                    } else if (value > 0 && value <= 99) {
                      setInputValue(value);
                      // debouncedHandleSubmit(value);
                    } else {
                      setInputValue(inputValue);
                    }
                  }}
                  // onKeyPress={handleKeyPress}
                  value={inputValue}
                >
                  <NumberInputField />
                  <NumberInputStepper />
                </NumberInput>
                <FormHelperText>Không mở Console để xem đáp án.</FormHelperText>
              </FormControl>
            )}

            <div className="mt-3 d-flex justify-content-center">
              {count > 0 ? (
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={(e) => debouncedHandleSubmit(e)}
                >
                  Kiểm tra
                </Button>
              ) : (
                <Button colorScheme="teal" size="sm" onClick={handlePlay}>
                  Chơi lại
                </Button>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;
