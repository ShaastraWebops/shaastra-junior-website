import React, { useState } from "react";
import JSONdata from "./data.json";
import { IconContext } from "react-icons";

import {
  Box,
  Text,
  Center,
  ChakraProvider,
  Container,
  Heading,
  HStack,
  Wrap,
  SlideFade,
  useDisclosure,
  Input,
  Collapse,
  Flex,
} from "@chakra-ui/react";
import {
  useGetFaQsQuery,
  CreateFaqMutation,
  useCreateFaqMutation,
} from "../../../types/generated/generated";

function Names() {
  const { data, loading, error } = useGetFaQsQuery();

  console.log(data);

  const [click, setClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggle = (index: any) => {
    if (click === index) {
      return setClick(false);
    }
    setClick(index);
  };

  return (
    <IconContext.Provider value={{ color: "#ffff", size: "25px" }}>
      <Input
        //   mb="4"
        width="100%"
        placeholder="Search in existing answers"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></Input>

      <div className="Names_container">
        <Flex
          mb="75px"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          className="Names"
        >
          {JSONdata.filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (item.question.toLocaleLowerCase().includes(searchTerm)) {
              return item;
            } else if (
              !item.question.toLocaleLowerCase().includes(searchTerm)
            ) {
            }
          }).map((item, index) => {
            return (
              <>
                <div
                  m="5"
                  w="100%"
                  spacing="3"
                  className="question"
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <Box w="100%">
                    <Flex w="100%">
                      <Box
                        borderRadius={"5px"}
                        w="100%"
                        className="question_inner"
                        backgroundColor={"#6a6a85b6"}
                      >
                        <Heading size="md">{item.question}</Heading>
                      </Box>
                    </Flex>
                    {/* <Flex>
                    <Box width ="850px" p={'5'} backgroundColor={'#dbdbff'} >
                    <Text fontWeight={"semibold"}>{item.question}</Text>
                    </Box>
                </Flex> */}
                  </Box>
                </div>

                <Collapse in={click === index} animateOpacity>
                  <Box
                    w="100%"
                    p={"5"}
                    color="black"
                    mb="5"
                    backgroundColor={"#dbdbff"}
                    rounded="md"
                    shadow="md"
                  >
                    {item.answer}
                  </Box>
                </Collapse>
              </>
            );
          })}
        </Flex>
      </div>
    </IconContext.Provider>
  );
}

export default Names;

//data?.getFAQs.faqs
