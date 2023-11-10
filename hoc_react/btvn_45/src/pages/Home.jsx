import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Text } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
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
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { toast } from "react-toastify";
import { debounce } from "lodash";
import MAX_TIME from "../../config";
import { RANGE_NUMBER } from "../../config";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(MAX_TIME);
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState([]);

  const isError = inputValue === "";

  const checkNumber = useMemo(
    () => Math.floor(Math.random() * (RANGE_NUMBER - 1)) + 1,
    []
  );

  // console.log(sessions[1][0].count);
  // console.log(sessions[1].length);

  // load data from local storage
  useEffect(() => {
    const dataFromStr = localStorage.getItem("sessions");
    // console.log(dataFromStr);
    if (dataFromStr) {
      const sessions = JSON.parse(dataFromStr);
      setSessions(sessions);
      const currentSession = sessions[0];
      setCurrentSession(currentSession);
      setCount(MAX_TIME - currentSession.length);
      // console.log((MAX_TIME = currentSession.length));
    }
  }, [inputValue]);

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
      sessionsUpdated = [[], ...sessionsUpdated];
      currentSessionUpdated = [];
      countUpdated = MAX_TIME;
    } else {
      if (countUpdated >= 1) {
        if (checkNumber < parsedInputValue) {
          toast.warning("Số bạn nhập lớn quá. Hãy nhập số nhỏ hơn chút nữa!");
        } else if (checkNumber > parsedInputValue) {
          toast.warning("Số bạn nhập nhỏ quá. Hãy nhập số lớn hơn chút nữa!");
        }
      } else {
        toast.error("Bạn đã hết số lần kiểm tra. Bạn đã thua!");
        countUpdated = MAX_TIME;
        sessionsUpdated = [[], ...sessionsUpdated];
        currentSessionUpdated = [];
        setTimeout(() => toast.info("Bắt đầu lại trò chơi!"), 2000);
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

  const debouncedHandleSubmit = debounce(() => handleSubmit(), 500);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      debouncedHandleSubmit();
    }
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
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

          <div
            className="table-warp"
            style={{ display: "flex", overflow: "auto hidden" }}
          >
            {sessions.map((session, index) => (
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
                        <TableCaption>Bảng lưu lại các lần chơi</TableCaption>
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
                        <Tfoot>
                          <Tr>
                            <Th>Tỷ lệ đúng</Th>
                            <Th isNumeric>multiply by</Th>
                          </Tr>
                        </Tfoot>
                      </Table>
                    </TableContainer>
                  </div>
                </GridItem>
                <GridItem w="100%" h="300" bg="blue.500"></GridItem>
              </Grid>
            ))}
          </div>

          {/* FORM */}
          <div className="input-number my-4">
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

            <div className="mt-3 d-flex justify-content-center">
              <Button
                colorScheme="teal"
                size="sm"
                onClick={(e) => debouncedHandleSubmit(e)}
              >
                Kiểm tra
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;
