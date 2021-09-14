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
  Button,
} from "@chakra-ui/react";
import {
  useGetFaQsQuery,
  CreateFaqMutation,
  useCreateFaqMutation,
  UserRole,
  useAnswerFaqMutation,
  refetchGetFaQsQuery,
} from "../../../types/generated/generated";
import Loader from "../../shared/Loader";
import { Usercontext } from "../signinUp/Context";

function Names() {
  const { data, loading, error } = useGetFaQsQuery();

  const [answerFaqMutation, { data: answerFAQdata, loading: answerFAQloading, error: answerFAQerror }] = useAnswerFaqMutation({
    refetchQueries: [refetchGetFaQsQuery()]
  });

  const { role } = React.useContext(Usercontext);
  const [click, setClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");


  const toggle = (index: any) => {
    if (click === index) {
      return setClick(false);
    }
    setClick(index);
  };

  if (loading || answerFAQloading) return <Loader />
  if (error || answerFAQerror) {
    window.alert("Some error occured");
    return null
  }

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
          {data?.getFAQs.faqs?.filter((item) => {
            if (!item.answer && role !== UserRole.Admin) {
              return
            }
            if (searchTerm == "") {
              return item;
            } else if (item.question.toLocaleLowerCase().includes(searchTerm)) {
              return item;
            } else if (
              !item.question.toLocaleLowerCase().includes(searchTerm)
            ) {
            }
          }).map((item, index) => {
            const handelSubmit = () => {
              if(!faqAnswer) {
                window.alert("Add answer to the faq");
                return
              }
              answerFaqMutation({
                variables: {
                  answerFaqAnswer: faqAnswer,
                  answerFaqFaqid: item.id,
                }
              })
                .then(() => {
                  window.alert("Query Submitted");
                  setFaqAnswer("");
                })
                .catch((err) => {
                  console.log(err);
                });
            };
            return (
              <>
                <Flex
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
                </Flex>

                <Collapse in={click === index} animateOpacity>
                  {role === UserRole.Admin ?
                    <Box>
                      <Input
                        value={faqAnswer}
                        required={true}
                        onChange={(e) => {
                          setFaqAnswer(e.target.value);
                        }}
                        placeholder="Post your question here"
                      ></Input>
                      <Button onClick={handelSubmit} m="1" type="submit">
                        Submit
                      </Button>
                    </Box>
                    : <Box
                      w="100%"
                      p={"5"}
                      color="black"
                      mb="5"
                      backgroundColor={"#dbdbff"}
                      rounded="md"
                      shadow="md"
                    >
                      {item.answer}
                    </Box>}
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
