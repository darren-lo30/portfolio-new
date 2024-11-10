import {
  Stack,
  Flex,
  Link,
  Box,
  LinkProps,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import AboutTab from "./components/AboutTab";
import ProjectsTab from "./components/ProjectsTab";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const ACCENT_COLOR = "#84dfe2";

interface NavItemProps extends LinkProps {
  label: string;
}

const NavItem = (props: NavItemProps) => {
  return (
    <Link
      fontSize={{ base: "md", lg: "lg" }}
      color={"gray.300"}
      fontWeight="bold"
      _hover={{
        color: ACCENT_COLOR,
      }}
      {...props}
    >
      {props.label}
    </Link>
  );
};

type Tab = "About" | "Experience" | "Projects";
const MotionBox = motion.create(div);
const variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};
function App() {
  const [tab, setTab] = useState<Tab>("About");
  const showNavSide = useBreakpointValue({ base: false, sm: true });

  return (
    <Stack
      minH={"100vh"}
      minW={"100vw"}
      direction={{ base: "column", md: "row" }}
      gap={4}
      borderBottom={"0.5rem solid #84dfe2"}
      backgroundColor={"#242424"}
      color="white"
    >
      <Flex
        p={8}
        flex={1}
        marginTop="75px"
        marginRight={"auto"}
        padding={{ md: "10%", base: "32px" }}
        paddingRight={{ md: "15%" }}
        width="100%"
      >
        <Flex flexDir="row" flex={1} gap="32px">
          <Flex flex={1} flexDir={"column"}>
            <MotionBox
              key={tab}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.25 }}
            >
              {tab === "About" && <AboutTab />}
              {tab === "Projects" && <ProjectsTab />}
            </MotionBox>
          </Flex>
          <Show when={showNavSide}>
            <Box position="relative" width="100%" flex={0.25}>
              <Flex
                flexDir="column"
                marginLeft="auto"
                right={{ base: 0 }}
                paddingRight="16px"
                gap="12px"
                borderRight="2px gray solid"
                maxHeight={"fit-content"}
                paddingBottom="32px"
                position="absolute"
              >
                <NavItem
                  label="About"
                  onClick={() => {
                    setTab("About");
                  }}
                  marginLeft="auto"
                />
                <NavItem
                  label="Experience"
                  onClick={() => {
                    setTab("Experience");
                  }}
                  marginLeft="auto"
                />
                <NavItem
                  label="Projects"
                  onClick={() => {
                    setTab("Projects");
                  }}
                  marginLeft="auto"
                />
              </Flex>
            </Box>
          </Show>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default App;
