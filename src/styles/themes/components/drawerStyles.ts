import { mode, whiten } from "@chakra-ui/theme-tools";

export const drawerStyles = {
    baseStyle: (props: any) => ({
        dialog: {
          bg: mode("highlight.300", "primary.450")(props),
        },
      }),
    sizes: {},
    variants: {
        primary: (props: any) => ({
          bgColor: "#ffffff", 
          colorScheme: "primary"
        }),
    },
    defaultProps: {},
}