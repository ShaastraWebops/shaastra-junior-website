import gql from 'graphql-tag';

export const CREATEUSER = gql` 
mutation createUser($createUserData: CreateUserInput!) {
    createUser(data: $createUserData)
  }
  `
export const LOGIN = gql` 
mutation Login($loginData: LoginInput!){
    login(data: $loginData) {
      name,
      email,
      isVerified
    }
  }`
  
  export const VERIFYUSER = gql`
  mutation verifyUser($verifyUserToken: String!){
    verifyUser(token: $verifyUserToken)
  }`
  
  
  export const ME = gql`
  query getProfile{
    me {
      id,
      sjID,
      name,
      registeredEvents {
        audience,
        description,
        registrationType,
        isRegistered,
        yourTeam {
          members {
            class,
            email
          },
          name,
          id
        }
      },
    }
  }`
  
  export const LOGOUT = gql`
   mutation Logout{
    logoutUser
  }`
  
  export const CREATEFAQ = gql`
  mutation createFAQ($createFaqQuestion: String!){
    createFAQ(question: $createFaqQuestion)
  }`
  
  export const GETFAQS = gql`
  query getFAQs{
    getFAQs {
      count,
      faqs {
        question,
        answer,
        createdOn
      }
    }
  }`
  
  export const CREATEEVENT = gql`
  mutation createEvent($createEventData: CreateEventInput!){
    createEvent(data: $createEventData)
  }`
  
  export const GETEVENTS = gql`
  query getEvents($getEventsFilter: String){
    getEvents(filter: $getEventsFilter) {
      count,
      events {
        id,
        title,
        registrationType
      }
    }
  }`
  
  export const GETEVENT = gql`
  query getEvent($getEventEventId: String!){
    getEvent(EventID: $getEventEventId) {
      id,
      eventTimeFrom,
      eventTimeTo,
      registrationType,
      faqs {
        answer,
        question,
        id
      },
      isRegistered,
      registeredUser {
        email,
        name
      },
      
      registeredTeam {
        name,
        members {
          sjID,
          email,
          name,
          school,
          class
        }
      }
    }
  }`

  export const EDITEVENT = gql`
  mutation editEvent($editEventEventId: String!, $editEventData: EditEventInput!){
    editEvent(EventID: $editEventEventId, data: $editEventData)
  }`
  
  export const CREATEEVENTFAQ = gql`
   mutation createEventFAQ($createEventFaqEventId: String!, $createEventFaqData: CreateEventFAQInput!){
    createEventFAQ(EventID: $createEventFaqEventId, data: $createEventFaqData)
  }`
  
  export const EDITEVENTFAQ = gql`
  mutation editEventFAQ($editEventFaqEventFaqid: String!, $editEventFaqData: EditEventFAQInput!){
    editEventFAQ(EventFAQID: $editEventFaqEventFaqid, data: $editEventFaqData)
  }`
  
  export const REGISTER = gql`
  mutation register($registerEventId: String!){
    register(EventID: $registerEventId)
  }`
  
  export const CREATETEAMANDREGISTER = gql`
  mutation createTeamandRegister($createTeamAndRegisterData: CreateTeamInput!){
    createTeamAndRegister(data: $createTeamAndRegisterData)
  }`
  
  export const LEAVETEAM = gql`
  mutation leaveTeam($leaveTeamData: String!){
    leaveTeam(data: $leaveTeamData)
  }`
  
  export const CHAMPIONSHIP = gql`
  query getChampionship{
    championship {
      id,
      schoolName,
      points
    }
  }`
  
  export const SETCHAMPIONSHIP = gql`
  mutation setChampionship($setChampionshipData: SetChampionshipInput!){
    setChampionship(data: $setChampionshipData)
  }`
  
  export const CLEARCHAMPIONSHIP = gql`
  mutation clearChampionship{
    clearChampionship
  }`
  
  export const EXPORTCSV = gql`
  query exportCSV($exportCsvEventId: String!){
    exportCSV(EventID: $exportCsvEventId)
  }`