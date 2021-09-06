import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, Textarea } from '@chakra-ui/react'
import { Field, Form, Formik} from 'formik'
import React from 'react'
import CustomBox from '../../shared/CustomBox'

const Event = () => {
    const audience = ["KIDS","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];
    const [initvalues , setInitvalues] = React.useState({
        title: "",
        type: "",
        AudienceType: "",
        rot: "",
        rct: "",
        est: "",
        ect: "",
        regtype: "",
        teamsize: 0,
        description: ""
    });
    return (
       <CustomBox>
           <Flex flexDirection={"column"} alignItems="center" paddingTop={['60px','80px']} minHeight={"100vh"}>
               <Heading>Events</Heading>
              <Box width={'100%'}>
                  <Heading as="h3" size="lg" float={'left'}  m={2} p={3}>Add Event</Heading>
              </Box>
              <Formik 
               initialValues={{
                "title": "",
                "type": "",
                "Audience Type": "",
                "rot": "",
                "rct": "",
                "est": "",
                "ect": "",
                "regtype": "",
                "teamsize": 0,
               " description": ""
               }}
               onSubmit={(values, actions) => {
                 setTimeout(() => {
                   console.log(JSON.stringify(values, null, 2))
                   alert(JSON.stringify(values, null, 2))
                   actions.setSubmitting(false)
                 }, 1000)
                 actions.resetForm()
               }}>
              {(props)=>(

            <Form>

            <Flex flexDirection={['column','column','row']} px={5}>
             
             <Field  name="title">
             {({ field }:{field: any}) => (
                <FormControl m={2}>
                <FormLabel >Title</FormLabel>
                <Input {...field} id="title" borderColor={'#244f3b'} placeholder="Title" color={"#244f3b"} />
                </FormControl>
            )}
             </Field>
             <Field  name="type">
             {({ field }:{field: any}) => (
              <FormControl m={2}>
              <FormLabel>Event Type</FormLabel>
              <Select {...field} id="type" borderColor={'#244f3b'} placeholder="EventType" color={"#244f3b"}>
                  <option value="workshop">Workshop</option>
                  <option value="competition">Competition</option>
              </Select>
              </FormControl>
               )}
               </Field>

            <Field  name="Audience Type">
             {({ field }:{field: any}) => (
              <FormControl m={2}>
              <FormLabel >Audience Type</FormLabel>
              <Select  {...field} id="Audience Type" borderColor={'#244f3b'} placeholder="Audience Type" color={"#244f3b"}>
                 
                  {
                      audience.map((aud) =>(
                        <option key={aud} value={aud}>{aud}</option>
                      )
                      )
                  }
              </Select>
              </FormControl>
            )}
            </Field>
            <Field  name="rot">
            {({ field }:{field: any}) => (
              <FormControl m={2}>
              <FormLabel>Registration Open Time</FormLabel>
              <Input {...field} id="rot" borderColor={'#244f3b'} type="datetime-local" color={"#244f3b"}/>
              </FormControl>
             )}
             </Field>

            <Field  name="rct">
             {({ field }:{field: any}) => (
              <FormControl m={2}>
              <FormLabel>Registration Close Time</FormLabel>
              <Input {...field} id="rct" borderColor={'#244f3b'} type="datetime-local" color={"#244f3b"}/>
              </FormControl>       
               )}
               </Field>     
        </Flex>
        <Flex flexDirection={['column','column','row']} px={3} >
        <Field  name="est">
             {({ field }:{field: any}) => (
              <FormControl m={2}>
              <FormLabel>Event start Time</FormLabel>
              <Input {...field} id="est" borderColor={'#244f3b'} type="datetime-local" color={"#244f3b"}/>
              </FormControl>
               )}
               </Field>  

            <Field  name="ect">
            {({ field }:{field: any}) => (
                <FormControl m={2}>
                <FormLabel>Event Close Time</FormLabel>
                <Input {...field} id="ect" borderColor={'#244f3b'} type="datetime-local" color={"#244f3b"}/>
              </FormControl>
               )}
               </Field>  

              <Field  name="regtype">
              {({ field }:{field: any}) => (
              
              <FormControl m={2}>
              <FormLabel >Registration Type</FormLabel>
              <Select {...field} id="regtype" borderColor={'#244f3b'} placeholder="Registration Type" color={"#244f3b"}>
                  <option value="workshop">None</option>
                  <option value="Individual">Individual</option>
                  <option value="Team">Team</option>
              </Select>
              </FormControl>
             )}
             </Field>  
            <Field  name="teamsize">
            {({ field }:{field: any}) => (
              <FormControl m={2}>
              <FormLabel>Team Size</FormLabel>
              <Input {...field} id="teamsize" type="number" borderColor={'#244f3b'} placeholder={'Team size'} color={"#244f3b"}/>
              </FormControl>
               )}
               </Field>  
            </Flex>
            <Flex flexDirection={['column','column','row']} px={3} >
            <Field  name="description">
            {({ field }:{field: any}) => (
              <FormControl m={2}>
              <FormLabel>Description</FormLabel>
              <Textarea {...field} id="description" borderColor={'#244f3b'}  color={"#244f3b"}/>
              </FormControl>
             )}
             </Field>
            </Flex>
            <Flex flexDirection={'row'} width={'100%'} m={2} justifyContent={'center'}>
                <Button
                variant={'solid'}
                borderColor = '#244f3b'
                type="submit"
                >Add Event</Button>
                </Flex>
            </Form>  )}
               
              </Formik>
              
           </Flex>
       </CustomBox>
    )
}

export default Event
