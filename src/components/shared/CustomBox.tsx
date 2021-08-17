import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box } from '@chakra-ui/layout'
import * as React from 'react'
import Header from './Header'

interface Props {
    children: React.ReactChild[] | React.ReactChildren[] | React.ReactChild
}

const CustomBox = (props: Props) => {

    const bg = useColorModeValue("highlight.200", "primary.default")

    return (
        <Box bg={bg}>
            <Header />
            {props.children}
        </Box>
    )
}

export default CustomBox
