import { CheckIcon } from '@chakra-ui/icons'
import { Alert , AlertIcon ,Spinner,Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, Textarea } from '@chakra-ui/react'
import { Field, Form, Formik} from 'formik'
import moment from 'moment'
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { GETEVENTS } from '../../../Queries.graphql'
import { EventType, RegistraionType, Standard, useEditEventMutation, useGetEventQuery } from '../../../types/generated/generated'
import CustomBox from '../../shared/CustomBox'
import Loader from '../../shared/Loader'

const EditEvent = () =>{

    const audience = [Standard.Eigth,Standard.Eleventh,Standard.Twelfth];    
    const [EditEvent] = useEditEventMutation();
    const [image, setImage ] = React.useState< any | null >();
    const [ url, setUrl ] = React.useState<any | null>();
    const { id } = useParams<{id : string}>();
    const [uploaded , setUploaded ] = React.useState(false);
    const [spinner,setSpinner] = React.useState(false);
    const [aerror,setError] = React.useState();

 
    const {data , loading , error } = useGetEventQuery({variables : {
      getEventEventId : id
  }});
  if(loading) return(<Loader />)
  const event = data?.getEvent ;

  const uploadImage = () => {
    setSpinner(true)
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
    setSpinner(false)
    setUploaded(true)

    })
    .catch(err => console.log(err))
    }
   
   
    return(
         <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={['20px','20px']} minHeight={"100vh"}>
            <Box width={'100%'}>
            <Heading as="h3" size="lg" float={'left'}  m={2} p={3}>Edit Event</Heading>
              </Box>
              <Formik 
                  initialValues={
                    {
                      "title": event!.title,
                      "type": event!.eventType,
                      "Audience Type": event!.audience,
                      "rot":moment(parseInt(event?.registrationOpenTime!)).format("yyyy-MM-DDThh:mm:ss.SSS"),
                      "rct": moment(parseInt(event?.registrationCloseTime!)).format("yyyy-MM-DDThh:mm:ss.SSS"),
                      "est": moment(parseInt(event?.eventTimeFrom!)).format("yyyy-MM-DDThh:mm:ss.SSS"),
                      "ect": moment(parseInt(event?.eventTimeTo!)).format("yyyy-MM-DDThh:mm:ss.SSS"),
                      "platform" : event?.platform!,
                      "requirements" : event?.requirements!,
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
                          platform : values.platform,
                          requirements : values.requirements,
                          registrationOpenTime : moment(values.rot).format("DD/MM/YYYY h:mm a"),
                          registrationCloseTime : moment(values.rct).format("DD/MM/YYYY h:mm a"),
                          eventTimeFrom: moment(values.est).format("DD/MM/YYYY h:mm a"),
                          eventTimeTo : moment(values.ect ).format("DD/MM/YYYY h:mm a"),
                          registrationType: values.regtype,
                          teamSize : values.teamsize,
                          pic : url
                   }},
                   refetchQueries : [{query:GETEVENTS,variables:{ getEventsFilter: values.type}}]
                 }).catch(err => setError(err.message))

                 setUrl('');
                 setUploaded(false)
                 actions.resetForm()
               }}>
              {(props)=>(
                 <Form>

                 <Flex flexDirection={'column'} p={5}>
                 {
                    aerror ? (
                      <Alert status="error">
                      <AlertIcon />
                      {aerror}
                    </Alert>
                    ) : null
                  }
             
             
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
                            ))
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
                   <Input {...field}
                    id="rct" borderColor={'#244f3b'} type="datetime-local" color={"#244f3b"}/>
                   </FormControl>       
                    )}
                    </Field>     
             </Flex>
             <Flex flexDirection={['column','column','row']} px={5}>
              <Field  name="platform">
                  {({ field }:{field: any}) => (
                      <FormControl m={2}>
                      <FormLabel >Platform</FormLabel>
                      <Input {...field} id="platform" borderColor={'#244f3b'} placeholder="Title" color={"#244f3b"} />
                      </FormControl>
                  )}
                  </Field>
                  <Field  name="requirements">
                  {({ field }:{field: any}) => (
                      <FormControl m={2}>
                      <FormLabel >Requirements</FormLabel>
                      <Input {...field} id="requirements" borderColor={'#244f3b'} placeholder="Title" color={"#244f3b"} />
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
                    spinner ? (<Spinner color="blue" m={1}/>) : null
                  }
                  {
                    uploaded ? 
                    (<CheckIcon color={'green'} border={"2px solid"} p={1} borderRadius={'full'} w={6} h={6} m={2}/>)
                    :null
                  }
                   </Flex>
                 <Flex flexDirection={'row'} m={2} justifyContent={'center'}>
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