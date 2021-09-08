import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
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
  registrationType?: Maybe<RegistraionType>;
  teamSize?: Maybe<Scalars['Float']>;
};

export type EditProfileInput = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type Event = {
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
  id: Scalars['ID'];
  question: Scalars['String'];
  createdOn: Scalars['String'];
  answer?: Maybe<Scalars['String']>;
  updatedOn: Scalars['String'];
};

export type GetEventsOutput = {
  events: Array<Event>;
  count: Scalars['Float'];
};

export type GetFaQsOutput = {
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
  users: Array<User>;
  count: Scalars['Float'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  setChampionship: Scalars['Boolean'];
  clearChampionship: Scalars['Boolean'];
  createEvent: Scalars['Boolean'];
  editEvent: Scalars['Boolean'];
  deleteEvent: Scalars['Boolean'];
  register: Scalars['Boolean'];
  createEventFAQ: Scalars['Boolean'];
  editEventFAQ: Scalars['Boolean'];
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
  championship: Array<Championship>;
  exportCSV: Scalars['Boolean'];
  getEvents: GetEventsOutput;
  getEvent: Event;
  getFAQs: GetFaQsOutput;
  getFAQ: FaQs;
  me?: Maybe<User>;
  getUsers?: Maybe<GetUsersOutput>;
  getUsersCount: Scalars['Float'];
  getUser?: Maybe<User>;
  searchUser?: Maybe<Array<User>>;
};


export type QueryExportCsvArgs = {
  EventID: Scalars['String'];
};


export type QueryGetEventsArgs = {
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  filter?: Maybe<Scalars['String']>;
};


export type QueryGetEventArgs = {
  EventID: Scalars['String'];
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
  id: Scalars['ID'];
  name: Scalars['String'];
  members: Array<User>;
  event: Event;
};

export type User = {
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


export type CreateUserMutation = { createUser: boolean };

export type LoginMutationVariables = Exact<{
  loginData: LoginInput;
}>;


export type LoginMutation = { login?: Maybe<{ name: string, id: string, sjID: string, email: string, isVerified: boolean, role: UserRole, school: string, class: Standard }> };

export type VerifyUserMutationVariables = Exact<{
  verifyUserToken: Scalars['String'];
}>;


export type VerifyUserMutation = { verifyUser: boolean };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { resetPassword: boolean };

export type ReqForgotPassVerificationMutationVariables = Exact<{
  email: RequestForgotPassInput;
}>;


export type ReqForgotPassVerificationMutation = { reqForgotPassVerification: boolean };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { me?: Maybe<{ __typename: 'User', id: string, sjID: string, name: string, school: string, class: Standard, registeredEvents: Array<{ title: string, id: string, eventType: EventType, audience: Array<Standard>, description: string, registrationType: string, isRegistered: boolean, pic: string, eventTimeFrom: string, eventTimeTo: string, teamSize: number, yourTeam?: Maybe<{ name: string, id: string, members: Array<{ class: Standard, name: string, email: string }> }> }> }> };

export type EditProfileMutationVariables = Exact<{
  data: EditProfileInput;
}>;


export type EditProfileMutation = { editProfile?: Maybe<boolean> };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logoutUser: boolean };

export type CreateFaqMutationVariables = Exact<{
  createFaqQuestion: Scalars['String'];
}>;


export type CreateFaqMutation = { createFAQ: boolean };

export type GetFaQsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFaQsQuery = { getFAQs: { count: number, faqs: Array<{ answer?: Maybe<string>, createdOn: string }> } };

export type CreateEventMutationVariables = Exact<{
  createEventData: CreateEventInput;
}>;


export type CreateEventMutation = { createEvent: boolean };

export type GetEventsQueryVariables = Exact<{
  getEventsFilter?: Maybe<Scalars['String']>;
}>;


export type GetEventsQuery = { getEvents: { count: number, events: Array<{ id: string, title: string, registrationType: string }> } };

export type GetEventQueryVariables = Exact<{
  getEventEventId: Scalars['String'];
}>;


export type GetEventQuery = { getEvent: { id: string, eventTimeFrom: string, eventTimeTo: string, registrationType: string, isRegistered: boolean, registeredTeamCount: number, faqs: Array<{ answer: string, question: string, id: string }>, registeredUser: Array<{ email: string, name: string }>, registeredTeam: Array<{ name: string, members: Array<{ sjID: string, email: string, name: string, school: string, class: Standard }> }> } };

export type EditEventMutationVariables = Exact<{
  editEventEventId: Scalars['String'];
  editEventData: EditEventInput;
}>;


export type EditEventMutation = { editEvent: boolean };

export type CreateEventFaqMutationVariables = Exact<{
  createEventFaqEventId: Scalars['String'];
  createEventFaqData: CreateEventFaqInput;
}>;


export type CreateEventFaqMutation = { createEventFAQ: boolean };

export type EditEventFaqMutationVariables = Exact<{
  editEventFaqEventFaqid: Scalars['String'];
  editEventFaqData: EditEventFaqInput;
}>;


export type EditEventFaqMutation = { editEventFAQ: boolean };

export type RegisterMutationVariables = Exact<{
  registerEventId: Scalars['String'];
}>;


export type RegisterMutation = { register: boolean };

export type CreateTeamandRegisterMutationVariables = Exact<{
  createTeamAndRegisterData: CreateTeamInput;
}>;


export type CreateTeamandRegisterMutation = { createTeamAndRegister: boolean };

export type LeaveTeamMutationVariables = Exact<{
  leaveTeamData: Scalars['String'];
}>;


export type LeaveTeamMutation = { leaveTeam: boolean };

export type GetChampionshipQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChampionshipQuery = { championship: Array<{ id: string, schoolName: string, points: number }> };

export type SetChampionshipMutationVariables = Exact<{
  setChampionshipData: SetChampionshipInput;
}>;


export type SetChampionshipMutation = { setChampionship: boolean };

export type ClearChampionshipMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearChampionshipMutation = { clearChampionship: boolean };

export type ExportCsvQueryVariables = Exact<{
  exportCsvEventId: Scalars['String'];
}>;


export type ExportCsvQuery = { exportCSV: boolean };


export const CreateUserDocument = gql`
    mutation createUser($createUserData: CreateUserInput!) {
  createUser(data: $createUserData)
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

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
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginData: LoginInput!) {
  login(data: $loginData) {
    name
    id
    sjID
    email
    isVerified
    role
    school
    class
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const VerifyUserDocument = gql`
    mutation verifyUser($verifyUserToken: String!) {
  verifyUser(token: $verifyUserToken)
}
    `;
export type VerifyUserMutationFn = ApolloReactCommon.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

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
export function useVerifyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = ApolloReactCommon.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($data: ResetPasswordInput!) {
  resetPassword(data: $data)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

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
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const ReqForgotPassVerificationDocument = gql`
    mutation reqForgotPassVerification($email: RequestForgotPassInput!) {
  reqForgotPassVerification(data: $email)
}
    `;
export type ReqForgotPassVerificationMutationFn = ApolloReactCommon.MutationFunction<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>;

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
export function useReqForgotPassVerificationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>(ReqForgotPassVerificationDocument, options);
      }
export type ReqForgotPassVerificationMutationHookResult = ReturnType<typeof useReqForgotPassVerificationMutation>;
export type ReqForgotPassVerificationMutationResult = ApolloReactCommon.MutationResult<ReqForgotPassVerificationMutation>;
export type ReqForgotPassVerificationMutationOptions = ApolloReactCommon.BaseMutationOptions<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>;
export const GetProfileDocument = gql`
    query getProfile {
  me {
    __typename
    id
    sjID
    name
    school
    class
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
export function useGetProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = ApolloReactCommon.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export function refetchGetProfileQuery(variables?: GetProfileQueryVariables) {
      return { query: GetProfileDocument, variables: variables }
    }
export const EditProfileDocument = gql`
    mutation editProfile($data: EditProfileInput!) {
  editProfile(data: $data)
}
    `;
export type EditProfileMutationFn = ApolloReactCommon.MutationFunction<EditProfileMutation, EditProfileMutationVariables>;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditProfileMutation, EditProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument, options);
      }
export type EditProfileMutationHookResult = ReturnType<typeof useEditProfileMutation>;
export type EditProfileMutationResult = ApolloReactCommon.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<EditProfileMutation, EditProfileMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logoutUser
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

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
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateFaqDocument = gql`
    mutation createFAQ($createFaqQuestion: String!) {
  createFAQ(question: $createFaqQuestion)
}
    `;
export type CreateFaqMutationFn = ApolloReactCommon.MutationFunction<CreateFaqMutation, CreateFaqMutationVariables>;

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
export function useCreateFaqMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateFaqMutation, CreateFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateFaqMutation, CreateFaqMutationVariables>(CreateFaqDocument, options);
      }
export type CreateFaqMutationHookResult = ReturnType<typeof useCreateFaqMutation>;
export type CreateFaqMutationResult = ApolloReactCommon.MutationResult<CreateFaqMutation>;
export type CreateFaqMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateFaqMutation, CreateFaqMutationVariables>;
export const GetFaQsDocument = gql`
    query getFAQs {
  getFAQs {
    count
    faqs {
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
export function useGetFaQsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFaQsQuery, GetFaQsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFaQsQuery, GetFaQsQueryVariables>(GetFaQsDocument, options);
      }
export function useGetFaQsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFaQsQuery, GetFaQsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFaQsQuery, GetFaQsQueryVariables>(GetFaQsDocument, options);
        }
export type GetFaQsQueryHookResult = ReturnType<typeof useGetFaQsQuery>;
export type GetFaQsLazyQueryHookResult = ReturnType<typeof useGetFaQsLazyQuery>;
export type GetFaQsQueryResult = ApolloReactCommon.QueryResult<GetFaQsQuery, GetFaQsQueryVariables>;
export function refetchGetFaQsQuery(variables?: GetFaQsQueryVariables) {
      return { query: GetFaQsDocument, variables: variables }
    }
export const CreateEventDocument = gql`
    mutation createEvent($createEventData: CreateEventInput!) {
  createEvent(data: $createEventData)
}
    `;
export type CreateEventMutationFn = ApolloReactCommon.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

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
export function useCreateEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = ApolloReactCommon.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const GetEventsDocument = gql`
    query getEvents($getEventsFilter: String) {
  getEvents(filter: $getEventsFilter) {
    count
    events {
      id
      title
      registrationType
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
export function useGetEventsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = ApolloReactCommon.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export function refetchGetEventsQuery(variables?: GetEventsQueryVariables) {
      return { query: GetEventsDocument, variables: variables }
    }
export const GetEventDocument = gql`
    query getEvent($getEventEventId: String!) {
  getEvent(EventID: $getEventEventId) {
    id
    eventTimeFrom
    eventTimeTo
    registrationType
    faqs {
      answer
      question
      id
    }
    isRegistered
    registeredUser {
      email
      name
    }
    registeredTeamCount
    registeredTeam {
      name
      members {
        sjID
        email
        name
        school
        class
      }
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
export function useGetEventQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventQueryResult = ApolloReactCommon.QueryResult<GetEventQuery, GetEventQueryVariables>;
export function refetchGetEventQuery(variables?: GetEventQueryVariables) {
      return { query: GetEventDocument, variables: variables }
    }
export const EditEventDocument = gql`
    mutation editEvent($editEventEventId: String!, $editEventData: EditEventInput!) {
  editEvent(EventID: $editEventEventId, data: $editEventData)
}
    `;
export type EditEventMutationFn = ApolloReactCommon.MutationFunction<EditEventMutation, EditEventMutationVariables>;

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
export function useEditEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditEventMutation, EditEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditEventMutation, EditEventMutationVariables>(EditEventDocument, options);
      }
export type EditEventMutationHookResult = ReturnType<typeof useEditEventMutation>;
export type EditEventMutationResult = ApolloReactCommon.MutationResult<EditEventMutation>;
export type EditEventMutationOptions = ApolloReactCommon.BaseMutationOptions<EditEventMutation, EditEventMutationVariables>;
export const CreateEventFaqDocument = gql`
    mutation createEventFAQ($createEventFaqEventId: String!, $createEventFaqData: CreateEventFAQInput!) {
  createEventFAQ(EventID: $createEventFaqEventId, data: $createEventFaqData)
}
    `;
export type CreateEventFaqMutationFn = ApolloReactCommon.MutationFunction<CreateEventFaqMutation, CreateEventFaqMutationVariables>;

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
export function useCreateEventFaqMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEventFaqMutation, CreateEventFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateEventFaqMutation, CreateEventFaqMutationVariables>(CreateEventFaqDocument, options);
      }
export type CreateEventFaqMutationHookResult = ReturnType<typeof useCreateEventFaqMutation>;
export type CreateEventFaqMutationResult = ApolloReactCommon.MutationResult<CreateEventFaqMutation>;
export type CreateEventFaqMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEventFaqMutation, CreateEventFaqMutationVariables>;
export const EditEventFaqDocument = gql`
    mutation editEventFAQ($editEventFaqEventFaqid: String!, $editEventFaqData: EditEventFAQInput!) {
  editEventFAQ(EventFAQID: $editEventFaqEventFaqid, data: $editEventFaqData)
}
    `;
export type EditEventFaqMutationFn = ApolloReactCommon.MutationFunction<EditEventFaqMutation, EditEventFaqMutationVariables>;

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
export function useEditEventFaqMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditEventFaqMutation, EditEventFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditEventFaqMutation, EditEventFaqMutationVariables>(EditEventFaqDocument, options);
      }
export type EditEventFaqMutationHookResult = ReturnType<typeof useEditEventFaqMutation>;
export type EditEventFaqMutationResult = ApolloReactCommon.MutationResult<EditEventFaqMutation>;
export type EditEventFaqMutationOptions = ApolloReactCommon.BaseMutationOptions<EditEventFaqMutation, EditEventFaqMutationVariables>;
export const RegisterDocument = gql`
    mutation register($registerEventId: String!) {
  register(EventID: $registerEventId)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

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
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateTeamandRegisterDocument = gql`
    mutation createTeamandRegister($createTeamAndRegisterData: CreateTeamInput!) {
  createTeamAndRegister(data: $createTeamAndRegisterData)
}
    `;
export type CreateTeamandRegisterMutationFn = ApolloReactCommon.MutationFunction<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;

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
export function useCreateTeamandRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>(CreateTeamandRegisterDocument, options);
      }
export type CreateTeamandRegisterMutationHookResult = ReturnType<typeof useCreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationResult = ApolloReactCommon.MutationResult<CreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;
export const LeaveTeamDocument = gql`
    mutation leaveTeam($leaveTeamData: String!) {
  leaveTeam(data: $leaveTeamData)
}
    `;
export type LeaveTeamMutationFn = ApolloReactCommon.MutationFunction<LeaveTeamMutation, LeaveTeamMutationVariables>;

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
export function useLeaveTeamMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LeaveTeamMutation, LeaveTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LeaveTeamMutation, LeaveTeamMutationVariables>(LeaveTeamDocument, options);
      }
export type LeaveTeamMutationHookResult = ReturnType<typeof useLeaveTeamMutation>;
export type LeaveTeamMutationResult = ApolloReactCommon.MutationResult<LeaveTeamMutation>;
export type LeaveTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<LeaveTeamMutation, LeaveTeamMutationVariables>;
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
export function useGetChampionshipQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetChampionshipQuery, GetChampionshipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetChampionshipQuery, GetChampionshipQueryVariables>(GetChampionshipDocument, options);
      }
export function useGetChampionshipLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetChampionshipQuery, GetChampionshipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetChampionshipQuery, GetChampionshipQueryVariables>(GetChampionshipDocument, options);
        }
export type GetChampionshipQueryHookResult = ReturnType<typeof useGetChampionshipQuery>;
export type GetChampionshipLazyQueryHookResult = ReturnType<typeof useGetChampionshipLazyQuery>;
export type GetChampionshipQueryResult = ApolloReactCommon.QueryResult<GetChampionshipQuery, GetChampionshipQueryVariables>;
export function refetchGetChampionshipQuery(variables?: GetChampionshipQueryVariables) {
      return { query: GetChampionshipDocument, variables: variables }
    }
export const SetChampionshipDocument = gql`
    mutation setChampionship($setChampionshipData: SetChampionshipInput!) {
  setChampionship(data: $setChampionshipData)
}
    `;
export type SetChampionshipMutationFn = ApolloReactCommon.MutationFunction<SetChampionshipMutation, SetChampionshipMutationVariables>;

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
export function useSetChampionshipMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetChampionshipMutation, SetChampionshipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SetChampionshipMutation, SetChampionshipMutationVariables>(SetChampionshipDocument, options);
      }
export type SetChampionshipMutationHookResult = ReturnType<typeof useSetChampionshipMutation>;
export type SetChampionshipMutationResult = ApolloReactCommon.MutationResult<SetChampionshipMutation>;
export type SetChampionshipMutationOptions = ApolloReactCommon.BaseMutationOptions<SetChampionshipMutation, SetChampionshipMutationVariables>;
export const ClearChampionshipDocument = gql`
    mutation clearChampionship {
  clearChampionship
}
    `;
export type ClearChampionshipMutationFn = ApolloReactCommon.MutationFunction<ClearChampionshipMutation, ClearChampionshipMutationVariables>;

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
export function useClearChampionshipMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ClearChampionshipMutation, ClearChampionshipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ClearChampionshipMutation, ClearChampionshipMutationVariables>(ClearChampionshipDocument, options);
      }
export type ClearChampionshipMutationHookResult = ReturnType<typeof useClearChampionshipMutation>;
export type ClearChampionshipMutationResult = ApolloReactCommon.MutationResult<ClearChampionshipMutation>;
export type ClearChampionshipMutationOptions = ApolloReactCommon.BaseMutationOptions<ClearChampionshipMutation, ClearChampionshipMutationVariables>;
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
export function useExportCsvQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
      }
export function useExportCsvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
        }
export type ExportCsvQueryHookResult = ReturnType<typeof useExportCsvQuery>;
export type ExportCsvLazyQueryHookResult = ReturnType<typeof useExportCsvLazyQuery>;
export type ExportCsvQueryResult = ApolloReactCommon.QueryResult<ExportCsvQuery, ExportCsvQueryVariables>;
export function refetchExportCsvQuery(variables?: ExportCsvQueryVariables) {
      return { query: ExportCsvDocument, variables: variables }
    }