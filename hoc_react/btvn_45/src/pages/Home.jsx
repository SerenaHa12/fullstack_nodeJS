import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Text } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { toast } from "react-toastify";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(7);
  console.log(count);

  const checkNumber = useMemo(() => Math.floor(Math.random() * 99) + 1, []);
  // console.log(checkNumber);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      toast.error("Bạn phải nhập 1 số");
      return;
    }

    const parsedInputValue = parseInt(inputValue, 10);

    if (parsedInputValue === checkNumber) {
      toast.success("Chúc mừng, bạn đã đoán đúng!");
    } else {
      toast.error("Số bạn nhập không đúng. Hãy thử lại!");
      setCount(count - 1);

      if (count === 1) {
        toast.error("Bạn đã hết số lần kiểm tra. Bạn có thể bắt đầu lại!");
      }
    }

    if (count === 2) {
      toast.warning("Bạn chỉ còn 1 lần test");
    } else if (count < 1) {
      setCount(7);
    }
  };

  // console.log(inputValue);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Text fontSize="3xl" color="teal.500" as="b">
            Chào mừng bạn đến với trò chơi đoán số!
          </Text>
          <Text fontSize="3xl" color="teal.600" as="b">
            Còn {count}/7 lần
          </Text>
          <Text fontSize="3xl" color="teal.700" as="b">
            Bạn cần tìm kiếm một số từ 1 đến 99
          </Text>
          <div className="input-number my-4">
            <Text fontSize="md" color="teal.500">
              Hãy thử nhập 1 số
            </Text>
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
                  console.log("99", value);
                  setInputValue(value);
                } else {
                  setInputValue(inputValue);
                }
              }}
              value={inputValue}
            >
              <NumberInputField />
              <NumberInputStepper />
            </NumberInput>
            <div className="mt-3 d-flex justify-content-center">
              <Button colorScheme="teal" size="sm" onClick={handleSubmit}>
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
