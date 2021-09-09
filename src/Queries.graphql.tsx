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
      id,
      sjID,
      email,
      isVerified,
      role,
      school,
      class
    }
  }`
  
  export const VERIFYUSER = gql`
  mutation verifyUser($verifyUserToken: String!){
    verifyUser(token: $verifyUserToken)
  }`
  
  export const RESETPASSWORD = gql`
    mutation resetPassword($data: ResetPasswordInput!){
      resetPassword(data: $data)
    }`

  export const REQFORGOTPASSWORD = gql`
    mutation  reqForgotPassVerification($email: RequestForgotPassInput!){
      reqForgotPassVerification(data: $email)
    }
  `

  export const ME = gql`
  query getProfile{
    me {
      __typename,
      id,
      sjID,
      name,
      school,
      class,
      registeredEvents {
        title,
        id,
        eventType,
        audience,
        description,
        registrationType,
        isRegistered,
        pic,
        eventTimeFrom,
        eventTimeTo,
        teamSize,
        yourTeam {
          members {
            class,
            name,
            email
          },
          name,
          id
        }
      },
    }
  }`
  
 export const EDITPROFILE = gql`
  mutation editProfile($data : EditProfileInput!){
    editProfile(data: $data)
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
    createEvent(data: $createEventData){
      id
    }
  }`
  
  export const GETEVENTS = gql`
  query getEvents($getEventsFilter: String){
    getEvents(filter: $getEventsFilter) {
      count,
      events {
        id
        title
        description
        pic
        audience
        eventType
        registrationOpenTime
        eventTimeFrom
        registrationCloseTime
        eventTimeTo
        updatedOn
        registrationType
        teamSize
      }
    }
  }`
  
  export const GETEVENT = gql`
  query getEvent($getEventEventId: String!){
    getEvent(EventID: $getEventEventId) {
      id,
      eventTimeFrom,
      eventTimeTo,
      title,
      description,
      pic,
      registrationType,
      platform,
      requirements,
      audience,
      eventType,
      registrationType,
      registrationOpenTime,
      eventTimeFrom,
      registrationCloseTime,
      eventTimeTo,
      teamSize,
      faqs {
        answer,
        question,
        id
      }}
}`

  export const EDITEVENT = gql`
  mutation editEvent($editEventEventId: String!, $editEventData: EditEventInput!){
    editEvent(EventID: $editEventEventId, data: $editEventData)
  }`

  export const DELETEEVENT = gql`
  mutation deleteEvent($deleteEventEventId: String!) {
    deleteEvent(EventID: $deleteEventEventId)
  }`
  
  export const CREATEEVENTFAQ = gql`
   mutation createEventFAQ($createEventFaqEventId: String!, $createEventFaqData: CreateEventFAQInput!){
    createEventFAQ(EventID: $createEventFaqEventId, data: $createEventFaqData)
  }`
  
  export const EDITEVENTFAQ = gql`
  mutation editEventFAQ($editEventFaqEventFaqid: String!, $editEventFaqData: EditEventFAQInput!){
    editEventFAQ(EventFAQID: $editEventFaqEventFaqid, data: $editEventFaqData)
  }`

  export const DELETEEVENTFAQ = gql`
  mutation deleteEventFAQ($deleteEventFaqEventFaqid: String!) {
    deleteEventFAQ(EventFAQID: $deleteEventFaqEventFaqid)
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