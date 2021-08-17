import { mode, whiten, darken } from "@chakra-ui/theme-tools";

export const buttonStyles = {
    sizes: {},
    variants: {
        primary: (props) => ({
          bg: "highlight", // Notice the use of color directly here
          color: "white",
          _hover: {
            // Notice the use of `mode` function to change color 
            // based on theme color mode
            // bg: mode(whiten("highlight", 50), darken("primary.default", 20))(props),
            boxShadow: "md",
          },
        }),
    },
    defaultProps: {},
}