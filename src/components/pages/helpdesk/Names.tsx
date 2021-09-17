import React, { useState } from "react";
import { IconContext } from "react-icons";

import {
  Box,
  Heading,
  Input,
  Collapse,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  useGetFaQsQuery,
  UserRole,
  useAnswerFaqMutation,
  refetchGetFaQsQuery,
  useDeleteFaQsMutation,
} from "../../../types/generated/generated";
import Loader from "../../shared/Loader";
import { Usercontext } from "../signinUp/Context";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Names() {
  const { data, loading, error } = useGetFaQsQuery();

  const [answerFaqMutation, { loading: answerFAQloading, error: answerFAQerror }] = useAnswerFaqMutation({
    refetchQueries: [refetchGetFaQsQuery()]
  });

  const [ deleteFaQsMutation, { error: deleteFAQError } ] = useDeleteFaQsMutation({
    refetchQueries: [refetchGetFaQsQuery()]
  })

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
  if (error || answerFAQerror || deleteFAQError ) {
    window.alert("Some error occured");
    return null
  }
console.log(data?.getFAQs.faqs);
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
            // if (!item.answer && role !== UserRole.Admin) {
            //   return
            // }
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
                if(item.answer) window.alert("FAQ answer is not edited");
                else window.alert("Add answer to FAQ")
                return
              }
              answerFaqMutation({
                variables: {
                  answerFaqAnswer: faqAnswer,
                  answerFaqFaqid: item.id,
                }
              })
                .then(() => {
                  window.alert("Answer Saved");
                  setFaqAnswer("");
                })
                .catch((err) => {
                  console.log(err);
                });
            };
            const handleDelete = () => {
              deleteFaQsMutation({
                variables: {
                  deleteFAQsFAQID: item.id    
                }
              }).then(() => {
                window.alert("FAQ Deleted")
              })
            }
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
                      <Flex
                        borderRadius={"5px"}
                        w="100%"
                        className="question_inner"
                        backgroundColor={"#6a6a85b6"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Heading size="md">{item.question}</Heading>
                        <ChevronDownIcon boxSize={6}/>
                      </Flex>
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
                        value={item.answer && !faqAnswer ? item.answer : faqAnswer}
                        required={true}
                        onChange={(e) => {
                          setFaqAnswer(e.target.value);
                        }}
                        placeholder="Add your answer here"
                      ></Input>
                      <Button onClick={handelSubmit} m="1" type="submit">
                        {item.answer ? "Edit" : "Submit"}
                      </Button>
                      <Button onClick={handleDelete}>Delete FAQ</Button>
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