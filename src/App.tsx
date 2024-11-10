import { Stack, Flex, Link, Box, Show } from "@chakra-ui/react";
import { useState } from "react";
import AboutTab from "./components/AboutTab";
import ProjectsTab from "./components/ProjectsTab";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ACCENT_COLOR } from "./config";
import ExperiencesTab from "./components/ExperiencesTab";

type Tab = "About" | "Experience" | "Projects";
const MotionBox = motion.create(div);
const variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};
function App() {
  const [tab, setTab] = useState<Tab>("About");
  const showNavSide = true;

  const tabs: Tab[] = ["About", "Experience", "Projects"];

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
        padding={{ md: "10%", base: "max(10%, 32px)" }}
        paddingRight={{ xl: "15%" }}
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
                borderRight="2px gray solid"
                maxHeight={"fit-content"}
                paddingBottom="32px"
                position="absolute"
              >
                {tabs.map((tabName) => (
                  <Link
                    fontSize={{ base: "md", lg: "lg" }}
                    color={tab === tabName ? ACCENT_COLOR : "gray.300"}
                    fontWeight="bold"
                    _hover={{
                      color: ACCENT_COLOR,
                    }}
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
    </Stack>
  );
}

export default App;
