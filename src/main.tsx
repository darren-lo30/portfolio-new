import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <CacheProvider value={emotionCache}> */}
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
    {/* </CacheProvider> */}
  </StrictMode>
);
