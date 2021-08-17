import { extendTheme } from "@chakra-ui/react";
// import  {boxStyles as Box} from "./components/boxStyles"
import  {drawerStyles as Drawer} from "./components/drawerStyles"
import { buttonStyles as Button } from "./components/buttonStyles";

export const theme = extendTheme(
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    colors: {
      primary: {
        100: "#7c8eef",
        200: "#6675c5",
        300: "#505c9a",
        400: "#3a4270",
        450: "#1a1f36",
        500: "#0e101b",
        default: "#0e101b",
      },
      secondary: {
        100: "#80D4BC",
        200: "#40BE9A",
        300: "#00A072",
        400: "#005C42",
        500: "#002A1E",
        default: "#00A072",
      },
      highlight: {
          100: "#ffffff",
          200: "#fffafa",
          300: "#f5f5f5",
          400: "#f2f3f4",
          500: "#ebecf0"
        },
      darkHighlight: "#2c262a",
      link: "#6cd4ff",
    },
    components: {
      // Box: {
      //   baseStyle: ({ colorMode }) => ({
      //     bg: colorMode === "dark" ? "green" : "green.500",
      //     color: colorMode === "dark" ? "gray.800" : "white",
      //     textTransform: "uppercase",
      //     fontWeight: "semibold",
      //     letterSpacing: "0.02em",
      //     padding: "4px",
      //     borderRadius: "2px",
      //     fontSize: "12px",
      //   }),
      // },
      Button,
      Drawer,
    },
  }
);
