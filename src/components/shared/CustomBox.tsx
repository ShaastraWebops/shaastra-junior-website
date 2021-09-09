import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box } from '@chakra-ui/layout'
import * as React from 'react'
import Particles from 'react-tsparticles'
import Header from './Header'
// Particles
import particlesConfig2 from "../pages/particlesjs-config2.json";
interface Props {
    children: React.ReactChild[] | React.ReactChildren[] | React.ReactChild
}

const CustomBox = (props: Props) => {

    const bg = useColorModeValue("highlight.200", "primary.default")

    return (
        <Box zIndex="-10">
            <Header />
            {props.children}
            {/* <Particles id="particles-js" params={particlesConfig2}></Particles> */}
        </Box>
    )
}

export default CustomBox
