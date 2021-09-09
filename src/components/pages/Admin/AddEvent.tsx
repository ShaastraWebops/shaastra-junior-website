import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, Textarea } from '@chakra-ui/react'
import { Field, Form, Formik} from 'formik'
import React, { Fragment } from 'react'
import { CreateEventInput, EventType, RegistraionType, Standard, useCreateEventFaqMutation, useCreateEventMutation, useCreateUserMutation, useGetEventQuery, useGetEventsQuery } from '../../../types/generated/generated'
import CustomBox from '../../shared/CustomBox'
import { onError } from 'apollo-link-error';
import moment from "moment";
import { AddIcon, CheckIcon, MinusIcon } from '@chakra-ui/icons'
import '../../../styles/addevent.css'
import { GETEVENTS } from '../../../Queries.graphql'



const AddEvent = () =>{

    const audience = [
      Standard.Sixth , Standard.Seventh, Standard.Eigth , Standard.Ninth, 
      Standard.Tenth, Standard.Eleventh,Standard.Twelfth
    ];
    const [filter , setFilter] = React.useState("")
    const [addEvent , {data}] = useCreateEventMutation();
    const [image, setImage ] = React.useState< any | null >();
    const [ url, setUrl ] = React.useState<any | null>("");
    const [uploaded , setUploaded ] = React.useState(false);
    const [id,setId] = React.useState<string>("");

    const [inputs , setInputs] = React.useState({});

    const [faqs , setfaqs] = React.useState([{question : '',answer : ''}]);
    const [addfaq] = useCreateEventFaqMutation();

    const handleFqsInput = ({index,event} :{index: number ,event: React.ChangeEvent<HTMLInputElement>}) =>{
      const values =[...faqs];
      
      if(event.target.name === 'question'){
        values[index]['question'] = event.target.value
      }else{
        values[index]['answer'] = event.target.value
      }
      setfaqs(values)
    }
    const handleInput = (event :{index: number ,event: React.ChangeEvent<HTMLInputElement>}) =>{
      const values = inputs;
      
     
      setInputs(values)
    }

    const uploadImage = () => {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "y3rgquaa")
      data.append("cloud_name","dlpivzuff")
      fetch(" https://api.cloudinary.com/v1_1/dlpivzuff/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      setUrl(data.url)
      setUploaded(true)
      })
      .catch(err => console.log(err))
      }

    return(
         <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={['60px','80px']} minHeight={"100vh"}>
        
            <Heading as="h3" size="lg" m={1}>Add Event</Heading>
              
              <Formik 
               initialValues={{
                "title": "",
                "type": EventType.Competitions,
                "Audience Type": [Standard.Twelfth],
                "rot": "",
                "rct": "",
                "est": "",
                "ect": "",
                "regtype": RegistraionType.None,
                "teamsize": 0,
                "description": ""
               }}
               onSubmit={async(values, actions) => {
                 await addEvent({
                   variables:{
                    createEventData:{
                          title : values.title,
                          description : values.description,
                          eventType : values.type,
                          audience : values['Audience Type'],
                          registrationOpenTime : moment(values.rot).format("DD/MM/YYYY h:mm a"),
                          registrationCloseTime : moment(values.rct).format("DD/MM/YYYY h:mm a"),
                          eventTimeFrom: moment(values.est).format("DD/MM/YYYY h:mm a"),
                          eventTimeTo : moment(values.ect ).format("DD/MM/YYYY h:mm a"),
                          registrationType: values.regtype,
                          teamSize : values.teamsize,
                          pic : url
                   }},
                    refetchQueries : [{query:GETEVENTS,variables:{ getEventsFilter: values.type}}]
                 }).then(res => {
                  console.log(res.data?.createEvent.id!)
                  faqs.map(async (faq)=>{
                    await addfaq({variables : {
                     createEventFaqEventId: res.data?.createEvent.id!,
                     createEventFaqData:{
                       question : faq.question,
                       answer : faq.answer
                     } 
                    }}).catch(err => console.log(err))
                  })
                 })
                 
                 .catch(err => console.log(JSON.stringify(err, null, 2)))

                 
                 actions.resetForm()
               }}>
              {(props)=>(

            <Form>

            <Flex flexDirection={'column'} p={5}>
             
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
                  <option value={EventType.Workshops}>Workshop</option>
                  <option value={EventType.Competitions}>Competition</option>
                  <option value={EventType.Shows}>Shows</option>
              </Select>
              </FormControl>
               )}
               </Field>

            <Field  name="Audience Type">
             {({ field }:{field: any}) => (
              <FormControl m={2}>
              <FormLabel >Audience Type</FormLabel>
              <Select  {...field} size={'lg'} multiple id="Audience Type" borderColor={'#244f3b'} placeholder="Audience Type" color={"#244f3b"}>
                 
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
              <Input {...field}  id="est" borderColor={'#244f3b'} type="datetime-local" color={"#244f3b"}/>
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
                  <option value={RegistraionType.None}>None</option>
                  <option value={RegistraionType.Individual}>Individual</option>
                  <option value={RegistraionType.Team}>Team</option>
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
            <Flex flexDirection={'row'} m={2} p={2} justifyContent={'center'} fontSize={'small'}>
             <Box width={['80%','20%']}>
             <Field  name="pic">
              {({ field }:{field: any}) => (
                <FormControl>
                <Input {...field} type='file' id="pic" fontSize={'small'} onChange= {(e)=> setImage(e.target.files![0])}
                p={2} borderColor={'#244f3b'}/>
                </FormControl>
              )}
             </Field>
             </Box>
             <Button onClick={uploadImage} size={'xs'} m={2}>Upload Image</Button>
             {
               uploaded ? 
               (<CheckIcon color={'green'} border={"2px solid"} p={1} borderRadius={'full'} w={6} h={6} m={2}/>)
               :null
             }
              </Flex>
              <Flex flexDirection={'column'}>
                
                <Flex p={2}>
                  <Heading size={'md'} m={2}>Add Fqs </Heading>
                  
                  
                </Flex>
                {
                  faqs.map((faq,index) => {
                  return(
                    <Fragment key={index}>
                    <Flex p={2} >
                    <FormControl m={2}>
          
                    <Input  name = "question"
                    placeholder = {'Question'}
                    id={"faqq"+ index} fontSize={'small'} p={2} borderColor={'#244f3b'} value={faq.question}
                    onChange = {(event)=>handleFqsInput({index ,event})}/>
                    </FormControl>
                    <FormControl m={2}>
                    <Input name = "answer"
                    placeholder = {'Answer'}
                     onChange = {(event)=>handleFqsInput({index ,event})}
                     id={"faqa"+ index} fontSize={'small'} p={2} borderColor={'#244f3b'} value={faq.answer}/>
                    </FormControl>
                     <Flex p={[0,3]} width={'40px'} flexDirection ={['column','row']}>
                     {
                       index === 0 ? null : (
                        <Button mx={2} my={1} size={'xs'}
                        onClick = {() => {
                       const values = [...faqs];
                       values.splice(index,1)
                       setfaqs(values)
                      }}
                      ><MinusIcon /></Button>
                       )
                     }
                  <Button mx={2} my={1} size={'xs'}
                   onClick={() => setfaqs([...faqs,{question : '',answer : ''}])}
                  ><AddIcon  /></Button>
                   </Flex>
                    </Flex>
                </Fragment>
                  )
                })
                }
              </Flex>
            <Flex flexDirection={'row'} m={2} justifyContent={'center'}>
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



export default AddEvent;