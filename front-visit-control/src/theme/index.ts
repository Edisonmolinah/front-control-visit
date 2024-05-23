import { background, extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./componentes/input";
import { selectTheme } from "./componentes/select"; 
import { buttonTheme } from "./componentes/button"

const theme = extendTheme({
  colors: {
    primary: {
      50: "#f0f5ff",
      100: "#cfe0fc",
    },
    secondary: {
      50: "#fdebeb",
      100: "#fad3d3",
    },
  },
  styles: {
    global: {
      body: {
        bg: '#2471A3', 
      },
    },
   
  },
  components: {
    Input:inputTheme,
    Select:selectTheme,
    Button:buttonTheme,
    
    
  },
});
export { theme }