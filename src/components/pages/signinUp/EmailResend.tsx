import { Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    
}

const EmailResend = (props: Props) => {
    return (
        <div className="email-resend-page">
            <div className="email-resend-head">EMAIL RESEND</div>
            <div className="email-resend-container">
                <div>Enter your email to recieve the verification link</div>
                <form className="email-resend-form" id="email-resend">
                    <input className="email-resend-input" type="email" placeholder="Enter your registered email" />
                    <button  className="email-resend-submit" type="submit" form="email-resend">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EmailResend
