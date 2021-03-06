import React, { useState } from "react";
import CustomBox from "../../shared/CustomBox";
import { Flex, Heading } from "@chakra-ui/layout";
import { Input, Button, FormControl, Container, Box } from "@chakra-ui/react";
import Names from "./Names";
import { refetchGetFaQsQuery, useCreateFaqMutation } from "../../../types/generated/generated";
import "../../../App.css";

function HelpDesk() {
  const [question, setQuestion] = useState("");

  const [createFaqMutation, { data, loading, error }] = useCreateFaqMutation({
    variables: {
      createFaqQuestion: question,
    },
    refetchQueries: [refetchGetFaQsQuery()]
  });

  const handelSubmit = () => {
    if(!question) {
      window.alert("Add question in the box given below");
      return
    }
    createFaqMutation()
      .then(() => {
        window.alert("Query Submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <ApolloProvider client={client}>
    <>
      <CustomBox>
        <Flex
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          paddingTop={"100px"}
          className="Helpdesk_container"
        >
          <Heading>Helpdesk</Heading>
          <Flex
            width="100%"
            mb="75px"
            w="max"
            className="Helpdes_innerContainer"
          >
            <Names />
          </Flex>
        </Flex>
      </CustomBox>

      <FormControl
        bg="#222244d2"
        bottom="0"
        position="fixed"
        className="Help_desk_form"
      >
        <Flex
          className="Help_desk_form_inner"
          flexDirection={"row"}
          justifyContent="center"
          alignItems="center"
        >
          <Input
            value={question}
            required={true}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            placeholder="Post your question here"
          ></Input>
          <Button onClick={handelSubmit} m="1" type="submit">
            Submit
          </Button>
        </Flex>
      </FormControl>
    </>

    // </ApolloProvider>
  );
}

export default HelpDesk;
