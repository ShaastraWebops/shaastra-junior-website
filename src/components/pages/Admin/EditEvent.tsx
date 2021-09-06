import { CheckIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, Textarea } from '@chakra-ui/react'
import { Field, Form, Formik} from 'formik'
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { EventType, RegistraionType, Standard, useEditEventMutation, useGetEventQuery } from '../../../types/generated/generated'
import CustomBox from '../../shared/CustomBox'
import Loader from '../../shared/Loader'
import { competitions, workshops } from '../workshops/data'

const EditEvent = () =>{

    const audience = ["KIDS","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];
    const [EditEvent] = useEditEventMutation();
    const [image, setImage ] = React.useState< any | null >();
    const [ url, setUrl ] = React.useState<any | null>();
    const { id } = useParams<{id : string}>();
    const [uploaded , setUploaded ] = React.useState(false);
 
    const {data , loading , error } = useGetEventQuery({variables : {
      getEventEventId : id
  }});
  const event = data?.getEvent ;

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
   
    if(loading) return(<Loader />)
    return(
         <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={['60px','80px']} minHeight={"100vh"}>
            <Box width={'100%'}>
            <Heading as="h3" size="lg" float={'left'}  m={2} p={3}>Edit Event</Heading>
              </Box>
              <Formik 
                  initialValues={
                    {
                      "title": event!.title,
                      "type": event!.eventType,
                      "Audience Type": event!.audience,
                      "rot": event!.registrationOpenTime,
                      "rct": event!.registrationCloseTime,
                      "est": event!.eventTimeFrom,
                      "ect": event!.eventTimeTo,
                      "regtype": event!.registrationType,
                      "teamsize": event!.teamSize,
                      "description": event!.description,
                   }}
               onSubmit={(values, actions) => {
                 EditEvent({
                   variables:{
                    editEventEventId : id,
                    editEventData:{
                          title : values.title,
                          description : values.description,
                          eventType : values.type,
                          audience : values['Audience Type'],
                          registrationOpenTime : values.rot,
                          registrationCloseTime : values.rct,
                          eventTimeFrom: values.est,
                          eventTimeTo : values.ect,
                          registrationType: values.regtype,
                          teamSize : values.teamsize,

          
                   }}
                 }).catch(err => console.log(err))
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
                  <option value={EventType.Workshops}>Workshop</option>
                  <option value={EventType.Competitions}>Competition</option>
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
                  <option value= {RegistraionType.None}>None</option>
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
            <Flex flexDirection={'row'} width={'100%'} m={2} justifyContent={'center'}>
                <Button
                variant={'solid'}
                borderColor = '#244f3b'
                type="submit"
                >Edit Event</Button>
                </Flex>
            </Form>  )}
               
              </Formik>
            </Flex>
              </CustomBox>
    )


}

export default EditEvent;