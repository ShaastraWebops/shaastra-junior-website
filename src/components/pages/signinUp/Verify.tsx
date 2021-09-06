import { stringify } from 'querystring'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Redirect, useHistory } from 'react-router'
import { useVerifyUserMutation } from '../../../types/generated/generated'

const verifyCall = async (token: string, verifyUserMutation: any) => {
   
    const resp = await verifyUserMutation({variables: {verifyUserToken:token}})
    return resp;
}

const Verify = () => {
    // const {data,loading,error} = useGetProfileQuery()
    const {token} = useParams<{token: string}>();
    const [verifyUserMutation, {data,loading,error}] = useVerifyUserMutation()
    // let Token = stringify(token)
    const history = useHistory()
    const resp = verifyCall(token, verifyUserMutation)
    if(data?.verifyUser)
    {
        return(<Redirect to="/signin"></Redirect>)
    }
    else
    {
        return(<div></div>)
    }
}

export default Verify