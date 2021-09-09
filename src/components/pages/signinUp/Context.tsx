import { propNames } from '@chakra-ui/styled-system'
import React, { createContext } from 'react'
import { UserRole } from '../../../types/generated/generated'


interface UserContext{
    role: string
    setRole: any
}

let initContext: UserContext = {
    role: 'USER',
    setRole: (C: string) => {}
}

export const Usercontext = createContext(initContext);