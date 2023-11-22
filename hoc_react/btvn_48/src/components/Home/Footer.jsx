import React from 'react'
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
import { LinkIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box as="footer" p="8" bg="gray.800" color="white">
    <Container maxW="container.xl">
      <Flex align="center" justify="space-between">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Author
          </Text>
          <Text mt="2">Ha Chi</Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Contact Us
          </Text>
          <Text mt="2">info@example.com</Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Follow Us
          </Text>
          <Flex mt="2">
            <Link href="#" mr="4">
              <LinkIcon />
            </Link>
            <Link href="#">
              <ExternalLinkIcon />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  </Box>
  )
}

export default Footer