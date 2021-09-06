import { propNames } from '@chakra-ui/styled-system'
import React from 'react'
import { UserRole } from '../../../types/generated/generated'

export const RoleContext = React.createContext({})

var userRole :any = null
var userName = ""

export const getRole = (role:UserRole,name: string ) => {
    userRole = role
    userName = name
} 

export const Provider = (props: any) =>
{
    <RoleContext.Provider value={{userRole}}>
        {props.children}
    </RoleContext.Provider>
}