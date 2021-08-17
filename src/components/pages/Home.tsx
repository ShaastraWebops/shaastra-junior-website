import * as React from "react";
import {
  Text,
  VStack,
  Code,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";

import CustomBox from "../shared/CustomBox";

interface Props {}

const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );
  // const color = useColorModeValue("secondary", "link")

  return (
    <CustomBox>
      <Flex flexDirection={"column"} justifyContent="center" alignItems="center" minH="100vh" p={3}>
        <VStack spacing={8}>
          {/* <img src={"./../../images/logo/animated/looped/Dice_Outline_Light_animated.svg"} alt="Shaastra Logo" /> */}
          <Logo height="100" width="auto" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
        </VStack>
      </Flex>
    </CustomBox>
  );
};

export default Home;
