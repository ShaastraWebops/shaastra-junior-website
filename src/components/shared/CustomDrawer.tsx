import * as React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { useBreakpointValue } from "@chakra-ui/media-query";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDrawer = (props: Props) => {
  const closeButtonSize = useBreakpointValue({ base: "lg", lg: "xl" });
  const { isOpen } = useDisclosure({ isOpen: props.isOpen });

  return (
    <Drawer
      placement="right"
      onClose={props.onClose}
      isOpen={isOpen}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <Heading fontWeight="normal" p={3}>Our Menu</Heading>
          <DrawerCloseButton
            variant="unstyled"
            mt={3}
            mr={3}
            p={2}
            outline="none"
            borderRadius="50%"
            size={closeButtonSize}
          />
        </DrawerHeader>
        <DrawerBody>

        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
