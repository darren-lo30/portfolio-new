import {
  Stack,
  Flex,
  Link,
  Box,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import AboutTab from "./components/AboutTab";
import ProjectsTab from "./components/ProjectsTab";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ACCENT_COLOR } from "./config";
import ExperiencesTab from "./components/ExperiencesTab";
import { FaBars, FaXmark } from "react-icons/fa6";

type Tab = "About" | "Experience" | "Projects";
const MotionBox = motion.create(div);
const MotionFlex = motion.create(Flex);
const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

function App() {
  const [tab, setTab] = useState<Tab>("About");
  const showNavSide = useBreakpointValue({ base: false, sm: true });
  const showMobileNav = useBreakpointValue({ base: true, sm: false });
  const [isNavOpen, setIsNavOpen] = useState(false);

  const tabs: Tab[] = ["About", "Experience", "Projects"];

  const renderMain = () => (
    <Flex
      p={8}
      flex={1}
      marginTop="75px"
      marginRight={"auto"}
      padding={{ md: "10%", base: "16px" }}
      paddingRight={{ xl: "15%" }}
      width="100%"
      position="relative"
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
            {tab === "Experience" && <ExperiencesTab />}
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
              borderRightStyle="solid"
              borderRightColor="gray.400"
              borderRightWidth={"3px"}
              maxHeight={"fit-content"}
              paddingBottom="32px"
              position="absolute"
            >
              {tabs.map((tabName) => (
                <Link
                  key={tabName}
                  fontSize={{ base: "md", lg: "lg" }}
                  color={tab === tabName ? ACCENT_COLOR : "gray.300"}
                  fontWeight="bold"
                  _hover={{
                    color: ACCENT_COLOR,
                  }}
                  marginLeft={"auto"}
                  onClick={() => {
                    setTab(tabName);
                  }}
                >
                  {tabName}
                </Link>
              ))}
            </Flex>
          </Box>
        </Show>
      </Flex>
    </Flex>
  );

  const renderMobileNav = () => (
    <MotionFlex
      flexDir="column"
      right={{ base: 0 }}
      paddingRight="16px"
      marginTop="auto"
      marginBottom={"auto"}
      alignSelf={"center"}
      justifySelf={"center"}
      gap={"16px"}
      key={tab}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {tabs.map((tabName) => (
        <Link
          key={tabName}
          fontSize={"xl"}
          color={tab === tabName ? ACCENT_COLOR : "gray.300"}
          fontWeight="bold"
          _hover={{
            color: ACCENT_COLOR,
          }}
          onClick={() => {
            setTab(tabName);
            setIsNavOpen(false);
          }}
        >
          {tabName}
        </Link>
      ))}
    </MotionFlex>
  );
  return (
    <Stack
      minH={"100vh"}
      minW={"100vw"}
      direction={{ base: "column", md: "row" }}
      gap={4}
      borderBottom={"0.5rem solid #84dfe2"}
      backgroundColor={"#242424"}
      color="white"
      paddingBottom={"32px"}
    >
      {showMobileNav && (
        <Box
          position="fixed"
          style={{ zIndex: 2 }}
          top="16px"
          right="16px"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          backgroundColor="transparent"
          color="gray.200"
          w={"fit-content"}
          h={"fit-content"}
        >
          <AnimatePresence mode="wait">
            {isNavOpen ? (
              <MotionBox
                key="close"
                aria-label="Close menu"
                onClick={() => setIsNavOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <FaXmark size="2em" />
              </MotionBox>
            ) : (
              <MotionBox
                key="open"
                aria-label="Open menu"
                onClick={() => setIsNavOpen(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <FaBars size="2em" />
              </MotionBox>
            )}
          </AnimatePresence>{" "}
        </Box>
      )}
      {isNavOpen ? renderMobileNav() : renderMain()}
    </Stack>
  );
}

export default App;
