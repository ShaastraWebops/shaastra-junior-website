import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Championship = {
  __typename?: 'Championship';
  id: Scalars['ID'];
  schoolName: Scalars['String'];
  points: Scalars['Float'];
};

export type CreateEventFaqInput = {
  question: Scalars['String'];
  answer: Scalars['String'];
};

export type CreateEventInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  pic: Scalars['String'];
  eventType: EventType;
  audience: Array<Standard>;
  registrationOpenTime?: Maybe<Scalars['String']>;
  registrationCloseTime?: Maybe<Scalars['String']>;
  eventTimeFrom: Scalars['String'];
  eventTimeTo: Scalars['String'];
  registrationType: RegistraionType;
  teamSize?: Maybe<Scalars['Float']>;
};

export type CreateTeamInput = {
  name: Scalars['String'];
  members?: Maybe<Array<Scalars['String']>>;
  eventID: Scalars['String'];
};

export type CreateUserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  school: Scalars['String'];
  class: Standard;
};

export type EditEventFaqInput = {
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
};

export type EditEventInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  pic?: Maybe<Scalars['String']>;
  eventType?: Maybe<EventType>;
  audience?: Maybe<Array<Standard>>;
  registrationOpenTime?: Maybe<Scalars['String']>;
  registrationCloseTime?: Maybe<Scalars['String']>;
  eventTimeFrom?: Maybe<Scalars['String']>;
  eventTimeTo?: Maybe<Scalars['String']>;
  registrationType?: Maybe<Scalars['String']>;
  teamSize?: Maybe<Scalars['Float']>;
};

export type EditProfileInput = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  pic: Scalars['String'];
  eventType: EventType;
  audience: Array<Standard>;
  registrationOpenTime?: Maybe<Scalars['String']>;
  registrationCloseTime?: Maybe<Scalars['String']>;
  eventTimeFrom: Scalars['String'];
  eventTimeTo: Scalars['String'];
  updatedOn: Scalars['String'];
  registrationType: Scalars['String'];
  teamSize: Scalars['Float'];
  user: User;
  registeredUser: Array<User>;
  registeredUserCount: Scalars['Float'];
  registeredTeam: Array<Team>;
  registeredTeamCount: Scalars['Float'];
  isRegistered: Scalars['Boolean'];
  yourTeam?: Maybe<Team>;
  faqs: Array<EventFaq>;
};

export type EventFaq = {
  __typename?: 'EventFAQ';
  id: Scalars['ID'];
  updatedOn: Scalars['String'];
  question: Scalars['String'];
  answer: Scalars['String'];
};

export enum EventType {
  Workshops = 'WORKSHOPS',
  Competitions = 'COMPETITIONS',
  Shows = 'SHOWS'
}

export type FaQs = {
  __typename?: 'FAQs';
  id: Scalars['ID'];
  question: Scalars['String'];
  createdOn: Scalars['String'];
  answer?: Maybe<Scalars['String']>;
  updatedOn: Scalars['String'];
};

export type GetEventsOutput = {
  __typename?: 'GetEventsOutput';
  events: Array<Event>;
  count: Scalars['Float'];
};

export type GetFaQsOutput = {
  __typename?: 'GetFAQsOutput';
  faqs: Array<FaQs>;
  count: Scalars['Float'];
};

export type GetUsersFilter = {
  city?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type GetUsersOutput = {
  __typename?: 'GetUsersOutput';
  users: Array<User>;
  count: Scalars['Float'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  setChampionship: Scalars['Boolean'];
  clearChampionship: Scalars['Boolean'];
  createEvent: Event;
  editEvent: Scalars['Boolean'];
  deleteEvent: Scalars['Boolean'];
  register: Scalars['Boolean'];
  createEventFAQ: Scalars['Boolean'];
  editEventFAQ: Scalars['Boolean'];
  deleteEventFAQ: Scalars['Boolean'];
  createFAQ: Scalars['Boolean'];
  answerFAQ: Scalars['Boolean'];
  deleteFAQs: Scalars['Boolean'];
  createTeamAndRegister: Scalars['Boolean'];
  leaveTeam: Scalars['Boolean'];
  createUser: Scalars['Boolean'];
  verifyUser: Scalars['Boolean'];
  login?: Maybe<User>;
  editProfile?: Maybe<Scalars['Boolean']>;
  reqForgotPassVerification: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  logoutUser: Scalars['Boolean'];
};


export type MutationSetChampionshipArgs = {
  data: SetChampionshipInput;
};


export type MutationCreateEventArgs = {
  data: CreateEventInput;
};


export type MutationEditEventArgs = {
  EventID: Scalars['String'];
  data: EditEventInput;
};


export type MutationDeleteEventArgs = {
  EventID: Scalars['String'];
};


export type MutationRegisterArgs = {
  EventID: Scalars['String'];
};


export type MutationCreateEventFaqArgs = {
  EventID: Scalars['String'];
  data: CreateEventFaqInput;
};


export type MutationEditEventFaqArgs = {
  EventFAQID: Scalars['String'];
  data: EditEventFaqInput;
};


export type MutationDeleteEventFaqArgs = {
  EventFAQID: Scalars['String'];
};


export type MutationCreateFaqArgs = {
  question: Scalars['String'];
};


export type MutationAnswerFaqArgs = {
  answer: Scalars['String'];
  FAQID: Scalars['String'];
};


export type MutationDeleteFaQsArgs = {
  FAQID: Scalars['String'];
};


export type MutationCreateTeamAndRegisterArgs = {
  data: CreateTeamInput;
};


export type MutationLeaveTeamArgs = {
  data: Scalars['String'];
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationVerifyUserArgs = {
  token: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationEditProfileArgs = {
  data: EditProfileInput;
};


export type MutationReqForgotPassVerificationArgs = {
  data: RequestForgotPassInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};

export type Query = {
  __typename?: 'Query';
  championship: Array<Championship>;
  getEvent: Event;
  exportCSV: Scalars['Boolean'];
  getEvents: GetEventsOutput;
  getFAQs: GetFaQsOutput;
  getFAQ: FaQs;
  me?: Maybe<User>;
  getUsers?: Maybe<GetUsersOutput>;
  getUsersCount: Scalars['Float'];
  getUser?: Maybe<User>;
  searchUser?: Maybe<Array<User>>;
};


export type QueryGetEventArgs = {
  EventID: Scalars['String'];
};


export type QueryExportCsvArgs = {
  EventID: Scalars['String'];
};


export type QueryGetEventsArgs = {
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  filter?: Maybe<Scalars['String']>;
};


export type QueryGetFaQsArgs = {
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  isAnswered?: Maybe<Scalars['Boolean']>;
};


export type QueryGetFaqArgs = {
  FAQID: Scalars['String'];
};


export type QueryGetUsersArgs = {
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  filter?: Maybe<GetUsersFilter>;
};


export type QueryGetUsersCountArgs = {
  filter: GetUsersFilter;
};


export type QueryGetUserArgs = {
  userId: Scalars['String'];
};


export type QuerySearchUserArgs = {
  search: Scalars['String'];
};

export enum RegistraionType {
  Team = 'TEAM',
  Individual = 'INDIVIDUAL',
  None = 'NONE'
}

export type RequestForgotPassInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
};

export type SetChampionshipInput = {
  schoolName: Scalars['String'];
  points: Scalars['Float'];
};

export enum Standard {
  Kids = 'KIDS',
  First = 'FIRST',
  Second = 'SECOND',
  Third = 'THIRD',
  Fourth = 'FOURTH',
  Fifth = 'FIFTH',
  Sixth = 'SIXTH',
  Seventh = 'SEVENTH',
  Eigth = 'EIGTH',
  Ninth = 'NINTH',
  Tenth = 'TENTH',
  Eleventh = 'ELEVENTH',
  Twelfth = 'TWELFTH'
}

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  name: Scalars['String'];
  members: Array<User>;
  event: Event;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  sjID: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  school: Scalars['String'];
  class: Standard;
  isVerified: Scalars['Boolean'];
  role: UserRole;
  events: Array<Event>;
  registeredEvents: Array<Event>;
};

export enum UserRole {
  User = 'USER',
  Admin = 'ADMIN'
}

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createUser'>
);

export type LoginMutationVariables = Exact<{
  loginData: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email' | 'isVerified' | 'role'>
  )> }
);

export type VerifyUserMutationVariables = Exact<{
  verifyUserToken: Scalars['String'];
}>;


export type VerifyUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'verifyUser'>
);

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPassword'>
);

export type ReqForgotPassVerificationMutationVariables = Exact<{
  email: RequestForgotPassInput;
}>;


export type ReqForgotPassVerificationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'reqForgotPassVerification'>
);

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'sjID' | 'name' | 'school'>
    & { registeredEvents: Array<(
      { __typename?: 'Event' }
      & Pick<Event, 'title' | 'id' | 'eventType' | 'audience' | 'description' | 'registrationType' | 'isRegistered' | 'pic' | 'eventTimeFrom' | 'eventTimeTo' | 'teamSize'>
      & { yourTeam?: Maybe<(
        { __typename?: 'Team' }
        & Pick<Team, 'name' | 'id'>
        & { members: Array<(
          { __typename?: 'User' }
          & Pick<User, 'class' | 'name' | 'email'>
        )> }
      )> }
    )> }
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logoutUser'>
);

export type CreateFaqMutationVariables = Exact<{
  createFaqQuestion: Scalars['String'];
}>;


export type CreateFaqMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createFAQ'>
);

export type GetFaQsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFaQsQuery = (
  { __typename?: 'Query' }
  & { getFAQs: (
    { __typename?: 'GetFAQsOutput' }
    & Pick<GetFaQsOutput, 'count'>
    & { faqs: Array<(
      { __typename?: 'FAQs' }
      & Pick<FaQs, 'question' | 'answer' | 'createdOn'>
    )> }
  ) }
);

export type CreateEventMutationVariables = Exact<{
  createEventData: CreateEventInput;
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { createEvent: (
    { __typename?: 'Event' }
    & Pick<Event, 'id'>
  ) }
);

export type GetEventsQueryVariables = Exact<{
  getEventsFilter?: Maybe<Scalars['String']>;
}>;


export type GetEventsQuery = (
  { __typename?: 'Query' }
  & { getEvents: (
    { __typename?: 'GetEventsOutput' }
    & Pick<GetEventsOutput, 'count'>
    & { events: Array<(
      { __typename?: 'Event' }
      & Pick<Event, 'id' | 'title' | 'description' | 'pic' | 'audience' | 'eventType' | 'registrationOpenTime' | 'eventTimeFrom' | 'registrationCloseTime' | 'eventTimeTo' | 'updatedOn' | 'registrationType' | 'teamSize'>
    )> }
  ) }
);

export type GetEventQueryVariables = Exact<{
  getEventEventId: Scalars['String'];
}>;


export type GetEventQuery = (
  { __typename?: 'Query' }
  & { getEvent: (
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'eventTimeFrom' | 'eventTimeTo' | 'title' | 'description' | 'pic' | 'registrationType' | 'audience' | 'eventType' | 'registrationOpenTime' | 'registrationCloseTime' | 'teamSize'>
    & { faqs: Array<(
      { __typename?: 'EventFAQ' }
      & Pick<EventFaq, 'answer' | 'question' | 'id'>
    )> }
  ) }
);

export type EditEventMutationVariables = Exact<{
  editEventEventId: Scalars['String'];
  editEventData: EditEventInput;
}>;


export type EditEventMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'editEvent'>
);

export type DeleteEventMutationVariables = Exact<{
  deleteEventEventId: Scalars['String'];
}>;


export type DeleteEventMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteEvent'>
);

export type CreateEventFaqMutationVariables = Exact<{
  createEventFaqEventId: Scalars['String'];
  createEventFaqData: CreateEventFaqInput;
}>;


export type CreateEventFaqMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createEventFAQ'>
);

export type EditEventFaqMutationVariables = Exact<{
  editEventFaqEventFaqid: Scalars['String'];
  editEventFaqData: EditEventFaqInput;
}>;


export type EditEventFaqMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'editEventFAQ'>
);

export type DeleteEventFaqMutationVariables = Exact<{
  deleteEventFaqEventFaqid: Scalars['String'];
}>;


export type DeleteEventFaqMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteEventFAQ'>
);

export type RegisterMutationVariables = Exact<{
  registerEventId: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type CreateTeamandRegisterMutationVariables = Exact<{
  createTeamAndRegisterData: CreateTeamInput;
}>;


export type CreateTeamandRegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createTeamAndRegister'>
);

export type LeaveTeamMutationVariables = Exact<{
  leaveTeamData: Scalars['String'];
}>;


export type LeaveTeamMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'leaveTeam'>
);

export type GetChampionshipQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChampionshipQuery = (
  { __typename?: 'Query' }
  & { championship: Array<(
    { __typename?: 'Championship' }
    & Pick<Championship, 'id' | 'schoolName' | 'points'>
  )> }
);

export type SetChampionshipMutationVariables = Exact<{
  setChampionshipData: SetChampionshipInput;
}>;


export type SetChampionshipMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setChampionship'>
);

export type ClearChampionshipMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearChampionshipMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'clearChampionship'>
);

export type ExportCsvQueryVariables = Exact<{
  exportCsvEventId: Scalars['String'];
}>;


export type ExportCsvQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'exportCSV'>
);


export const CreateUserDocument = gql`
    mutation createUser($createUserData: CreateUserInput!) {
  createUser(data: $createUserData)
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserData: // value for 'createUserData'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginData: LoginInput!) {
  login(data: $loginData) {
    name
    email
    isVerified
    role
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginData: // value for 'loginData'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const VerifyUserDocument = gql`
    mutation verifyUser($verifyUserToken: String!) {
  verifyUser(token: $verifyUserToken)
}
    `;
export type VerifyUserMutationFn = Apollo.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      verifyUserToken: // value for 'verifyUserToken'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: Apollo.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = Apollo.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = Apollo.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($data: ResetPasswordInput!) {
  resetPassword(data: $data)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const ReqForgotPassVerificationDocument = gql`
    mutation reqForgotPassVerification($email: RequestForgotPassInput!) {
  reqForgotPassVerification(data: $email)
}
    `;
export type ReqForgotPassVerificationMutationFn = Apollo.MutationFunction<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>;

/**
 * __useReqForgotPassVerificationMutation__
 *
 * To run a mutation, you first call `useReqForgotPassVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReqForgotPassVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reqForgotPassVerificationMutation, { data, loading, error }] = useReqForgotPassVerificationMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useReqForgotPassVerificationMutation(baseOptions?: Apollo.MutationHookOptions<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>(ReqForgotPassVerificationDocument, options);
      }
export type ReqForgotPassVerificationMutationHookResult = ReturnType<typeof useReqForgotPassVerificationMutation>;
export type ReqForgotPassVerificationMutationResult = Apollo.MutationResult<ReqForgotPassVerificationMutation>;
export type ReqForgotPassVerificationMutationOptions = Apollo.BaseMutationOptions<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>;
export const GetProfileDocument = gql`
    query getProfile {
  me {
    id
    sjID
    name
    school
    registeredEvents {
      title
      id
      eventType
      audience
      description
      registrationType
      isRegistered
      pic
      eventTimeFrom
      eventTimeTo
      teamSize
      yourTeam {
        members {
          class
          name
          email
        }
        name
        id
      }
    }
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logoutUser
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateFaqDocument = gql`
    mutation createFAQ($createFaqQuestion: String!) {
  createFAQ(question: $createFaqQuestion)
}
    `;
export type CreateFaqMutationFn = Apollo.MutationFunction<CreateFaqMutation, CreateFaqMutationVariables>;

/**
 * __useCreateFaqMutation__
 *
 * To run a mutation, you first call `useCreateFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFaqMutation, { data, loading, error }] = useCreateFaqMutation({
 *   variables: {
 *      createFaqQuestion: // value for 'createFaqQuestion'
 *   },
 * });
 */
export function useCreateFaqMutation(baseOptions?: Apollo.MutationHookOptions<CreateFaqMutation, CreateFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFaqMutation, CreateFaqMutationVariables>(CreateFaqDocument, options);
      }
export type CreateFaqMutationHookResult = ReturnType<typeof useCreateFaqMutation>;
export type CreateFaqMutationResult = Apollo.MutationResult<CreateFaqMutation>;
export type CreateFaqMutationOptions = Apollo.BaseMutationOptions<CreateFaqMutation, CreateFaqMutationVariables>;
export const GetFaQsDocument = gql`
    query getFAQs {
  getFAQs {
    count
    faqs {
      question
      answer
      createdOn
    }
  }
}
    `;

/**
 * __useGetFaQsQuery__
 *
 * To run a query within a React component, call `useGetFaQsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFaQsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFaQsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFaQsQuery(baseOptions?: Apollo.QueryHookOptions<GetFaQsQuery, GetFaQsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFaQsQuery, GetFaQsQueryVariables>(GetFaQsDocument, options);
      }
export function useGetFaQsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFaQsQuery, GetFaQsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFaQsQuery, GetFaQsQueryVariables>(GetFaQsDocument, options);
        }
export type GetFaQsQueryHookResult = ReturnType<typeof useGetFaQsQuery>;
export type GetFaQsLazyQueryHookResult = ReturnType<typeof useGetFaQsLazyQuery>;
export type GetFaQsQueryResult = Apollo.QueryResult<GetFaQsQuery, GetFaQsQueryVariables>;
export const CreateEventDocument = gql`
    mutation createEvent($createEventData: CreateEventInput!) {
  createEvent(data: $createEventData) {
    id
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      createEventData: // value for 'createEventData'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const GetEventsDocument = gql`
    query getEvents($getEventsFilter: String) {
  getEvents(filter: $getEventsFilter) {
    count
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
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *      getEventsFilter: // value for 'getEventsFilter'
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const GetEventDocument = gql`
    query getEvent($getEventEventId: String!) {
  getEvent(EventID: $getEventEventId) {
    id
    eventTimeFrom
    eventTimeTo
    title
    description
    pic
    registrationType
    audience
    eventType
    registrationType
    registrationOpenTime
    eventTimeFrom
    registrationCloseTime
    eventTimeTo
    teamSize
    faqs {
      answer
      question
      id
    }
  }
}
    `;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      getEventEventId: // value for 'getEventEventId'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions: Apollo.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventQueryResult = Apollo.QueryResult<GetEventQuery, GetEventQueryVariables>;
export const EditEventDocument = gql`
    mutation editEvent($editEventEventId: String!, $editEventData: EditEventInput!) {
  editEvent(EventID: $editEventEventId, data: $editEventData)
}
    `;
export type EditEventMutationFn = Apollo.MutationFunction<EditEventMutation, EditEventMutationVariables>;

/**
 * __useEditEventMutation__
 *
 * To run a mutation, you first call `useEditEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editEventMutation, { data, loading, error }] = useEditEventMutation({
 *   variables: {
 *      editEventEventId: // value for 'editEventEventId'
 *      editEventData: // value for 'editEventData'
 *   },
 * });
 */
export function useEditEventMutation(baseOptions?: Apollo.MutationHookOptions<EditEventMutation, EditEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditEventMutation, EditEventMutationVariables>(EditEventDocument, options);
      }
export type EditEventMutationHookResult = ReturnType<typeof useEditEventMutation>;
export type EditEventMutationResult = Apollo.MutationResult<EditEventMutation>;
export type EditEventMutationOptions = Apollo.BaseMutationOptions<EditEventMutation, EditEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation deleteEvent($deleteEventEventId: String!) {
  deleteEvent(EventID: $deleteEventEventId)
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      deleteEventEventId: // value for 'deleteEventEventId'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const CreateEventFaqDocument = gql`
    mutation createEventFAQ($createEventFaqEventId: String!, $createEventFaqData: CreateEventFAQInput!) {
  createEventFAQ(EventID: $createEventFaqEventId, data: $createEventFaqData)
}
    `;
export type CreateEventFaqMutationFn = Apollo.MutationFunction<CreateEventFaqMutation, CreateEventFaqMutationVariables>;

/**
 * __useCreateEventFaqMutation__
 *
 * To run a mutation, you first call `useCreateEventFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventFaqMutation, { data, loading, error }] = useCreateEventFaqMutation({
 *   variables: {
 *      createEventFaqEventId: // value for 'createEventFaqEventId'
 *      createEventFaqData: // value for 'createEventFaqData'
 *   },
 * });
 */
export function useCreateEventFaqMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventFaqMutation, CreateEventFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventFaqMutation, CreateEventFaqMutationVariables>(CreateEventFaqDocument, options);
      }
export type CreateEventFaqMutationHookResult = ReturnType<typeof useCreateEventFaqMutation>;
export type CreateEventFaqMutationResult = Apollo.MutationResult<CreateEventFaqMutation>;
export type CreateEventFaqMutationOptions = Apollo.BaseMutationOptions<CreateEventFaqMutation, CreateEventFaqMutationVariables>;
export const EditEventFaqDocument = gql`
    mutation editEventFAQ($editEventFaqEventFaqid: String!, $editEventFaqData: EditEventFAQInput!) {
  editEventFAQ(EventFAQID: $editEventFaqEventFaqid, data: $editEventFaqData)
}
    `;
export type EditEventFaqMutationFn = Apollo.MutationFunction<EditEventFaqMutation, EditEventFaqMutationVariables>;

/**
 * __useEditEventFaqMutation__
 *
 * To run a mutation, you first call `useEditEventFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditEventFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editEventFaqMutation, { data, loading, error }] = useEditEventFaqMutation({
 *   variables: {
 *      editEventFaqEventFaqid: // value for 'editEventFaqEventFaqid'
 *      editEventFaqData: // value for 'editEventFaqData'
 *   },
 * });
 */
export function useEditEventFaqMutation(baseOptions?: Apollo.MutationHookOptions<EditEventFaqMutation, EditEventFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditEventFaqMutation, EditEventFaqMutationVariables>(EditEventFaqDocument, options);
      }
export type EditEventFaqMutationHookResult = ReturnType<typeof useEditEventFaqMutation>;
export type EditEventFaqMutationResult = Apollo.MutationResult<EditEventFaqMutation>;
export type EditEventFaqMutationOptions = Apollo.BaseMutationOptions<EditEventFaqMutation, EditEventFaqMutationVariables>;
export const DeleteEventFaqDocument = gql`
    mutation deleteEventFAQ($deleteEventFaqEventFaqid: String!) {
  deleteEventFAQ(EventFAQID: $deleteEventFaqEventFaqid)
}
    `;
export type DeleteEventFaqMutationFn = Apollo.MutationFunction<DeleteEventFaqMutation, DeleteEventFaqMutationVariables>;

/**
 * __useDeleteEventFaqMutation__
 *
 * To run a mutation, you first call `useDeleteEventFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventFaqMutation, { data, loading, error }] = useDeleteEventFaqMutation({
 *   variables: {
 *      deleteEventFaqEventFaqid: // value for 'deleteEventFaqEventFaqid'
 *   },
 * });
 */
export function useDeleteEventFaqMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventFaqMutation, DeleteEventFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventFaqMutation, DeleteEventFaqMutationVariables>(DeleteEventFaqDocument, options);
      }
export type DeleteEventFaqMutationHookResult = ReturnType<typeof useDeleteEventFaqMutation>;
export type DeleteEventFaqMutationResult = Apollo.MutationResult<DeleteEventFaqMutation>;
export type DeleteEventFaqMutationOptions = Apollo.BaseMutationOptions<DeleteEventFaqMutation, DeleteEventFaqMutationVariables>;
export const RegisterDocument = gql`
    mutation register($registerEventId: String!) {
  register(EventID: $registerEventId)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerEventId: // value for 'registerEventId'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateTeamandRegisterDocument = gql`
    mutation createTeamandRegister($createTeamAndRegisterData: CreateTeamInput!) {
  createTeamAndRegister(data: $createTeamAndRegisterData)
}
    `;
export type CreateTeamandRegisterMutationFn = Apollo.MutationFunction<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;

/**
 * __useCreateTeamandRegisterMutation__
 *
 * To run a mutation, you first call `useCreateTeamandRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamandRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamandRegisterMutation, { data, loading, error }] = useCreateTeamandRegisterMutation({
 *   variables: {
 *      createTeamAndRegisterData: // value for 'createTeamAndRegisterData'
 *   },
 * });
 */
export function useCreateTeamandRegisterMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>(CreateTeamandRegisterDocument, options);
      }
export type CreateTeamandRegisterMutationHookResult = ReturnType<typeof useCreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationResult = Apollo.MutationResult<CreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationOptions = Apollo.BaseMutationOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;
export const LeaveTeamDocument = gql`
    mutation leaveTeam($leaveTeamData: String!) {
  leaveTeam(data: $leaveTeamData)
}
    `;
export type LeaveTeamMutationFn = Apollo.MutationFunction<LeaveTeamMutation, LeaveTeamMutationVariables>;

/**
 * __useLeaveTeamMutation__
 *
 * To run a mutation, you first call `useLeaveTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveTeamMutation, { data, loading, error }] = useLeaveTeamMutation({
 *   variables: {
 *      leaveTeamData: // value for 'leaveTeamData'
 *   },
 * });
 */
export function useLeaveTeamMutation(baseOptions?: Apollo.MutationHookOptions<LeaveTeamMutation, LeaveTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LeaveTeamMutation, LeaveTeamMutationVariables>(LeaveTeamDocument, options);
      }
export type LeaveTeamMutationHookResult = ReturnType<typeof useLeaveTeamMutation>;
export type LeaveTeamMutationResult = Apollo.MutationResult<LeaveTeamMutation>;
export type LeaveTeamMutationOptions = Apollo.BaseMutationOptions<LeaveTeamMutation, LeaveTeamMutationVariables>;
export const GetChampionshipDocument = gql`
    query getChampionship {
  championship {
    id
    schoolName
    points
  }
}
    `;

/**
 * __useGetChampionshipQuery__
 *
 * To run a query within a React component, call `useGetChampionshipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChampionshipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChampionshipQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChampionshipQuery(baseOptions?: Apollo.QueryHookOptions<GetChampionshipQuery, GetChampionshipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChampionshipQuery, GetChampionshipQueryVariables>(GetChampionshipDocument, options);
      }
export function useGetChampionshipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChampionshipQuery, GetChampionshipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChampionshipQuery, GetChampionshipQueryVariables>(GetChampionshipDocument, options);
        }
export type GetChampionshipQueryHookResult = ReturnType<typeof useGetChampionshipQuery>;
export type GetChampionshipLazyQueryHookResult = ReturnType<typeof useGetChampionshipLazyQuery>;
export type GetChampionshipQueryResult = Apollo.QueryResult<GetChampionshipQuery, GetChampionshipQueryVariables>;
export const SetChampionshipDocument = gql`
    mutation setChampionship($setChampionshipData: SetChampionshipInput!) {
  setChampionship(data: $setChampionshipData)
}
    `;
export type SetChampionshipMutationFn = Apollo.MutationFunction<SetChampionshipMutation, SetChampionshipMutationVariables>;

/**
 * __useSetChampionshipMutation__
 *
 * To run a mutation, you first call `useSetChampionshipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetChampionshipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setChampionshipMutation, { data, loading, error }] = useSetChampionshipMutation({
 *   variables: {
 *      setChampionshipData: // value for 'setChampionshipData'
 *   },
 * });
 */
export function useSetChampionshipMutation(baseOptions?: Apollo.MutationHookOptions<SetChampionshipMutation, SetChampionshipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetChampionshipMutation, SetChampionshipMutationVariables>(SetChampionshipDocument, options);
      }
export type SetChampionshipMutationHookResult = ReturnType<typeof useSetChampionshipMutation>;
export type SetChampionshipMutationResult = Apollo.MutationResult<SetChampionshipMutation>;
export type SetChampionshipMutationOptions = Apollo.BaseMutationOptions<SetChampionshipMutation, SetChampionshipMutationVariables>;
export const ClearChampionshipDocument = gql`
    mutation clearChampionship {
  clearChampionship
}
    `;
export type ClearChampionshipMutationFn = Apollo.MutationFunction<ClearChampionshipMutation, ClearChampionshipMutationVariables>;

/**
 * __useClearChampionshipMutation__
 *
 * To run a mutation, you first call `useClearChampionshipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearChampionshipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearChampionshipMutation, { data, loading, error }] = useClearChampionshipMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearChampionshipMutation(baseOptions?: Apollo.MutationHookOptions<ClearChampionshipMutation, ClearChampionshipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClearChampionshipMutation, ClearChampionshipMutationVariables>(ClearChampionshipDocument, options);
      }
export type ClearChampionshipMutationHookResult = ReturnType<typeof useClearChampionshipMutation>;
export type ClearChampionshipMutationResult = Apollo.MutationResult<ClearChampionshipMutation>;
export type ClearChampionshipMutationOptions = Apollo.BaseMutationOptions<ClearChampionshipMutation, ClearChampionshipMutationVariables>;
export const ExportCsvDocument = gql`
    query exportCSV($exportCsvEventId: String!) {
  exportCSV(EventID: $exportCsvEventId)
}
    `;

/**
 * __useExportCsvQuery__
 *
 * To run a query within a React component, call `useExportCsvQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportCsvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportCsvQuery({
 *   variables: {
 *      exportCsvEventId: // value for 'exportCsvEventId'
 *   },
 * });
 */
export function useExportCsvQuery(baseOptions: Apollo.QueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
      }
export function useExportCsvLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
        }
export type ExportCsvQueryHookResult = ReturnType<typeof useExportCsvQuery>;
export type ExportCsvLazyQueryHookResult = ReturnType<typeof useExportCsvLazyQuery>;
export type ExportCsvQueryResult = Apollo.QueryResult<ExportCsvQuery, ExportCsvQueryVariables>;