import { Box, Flex } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import experiencesData from "../content/experiences.json";

interface Experience {
  jobTitle: string;
  company: string;
  description: string;
  time: string;
}

const ExperiencesTab = () => {
  return (
    <Flex marginTop="-50px">
      <Flex
        gap="0px"
        flexDir="column"
        width="80%"
        borderLeft="white 2px solid"
        marginLeft={{ base: "80px", lg: "min(20%, 200px)" }}
      >
        {experiencesData.experiences.map(
          (experience: Experience, index: number) => {
            return (
              <Box
                key={index}
                position={"relative"}
                _before={{
                  content: '""',
                  position: "absolute",
                  left: "-1px",
                  top: "35px",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Card.Root
                  backgroundColor="transparent"
                  border="none"
                  height="100%"
                >
                  <Card.Body gap="2">
                    <Flex alignItems="center">
                      <Card.Title
                        color="gray.200"
                        fontSize={{ base: "2xl" }}
                        width="100%"
                      >
                        {experience.jobTitle} @ {experience.company}
                      </Card.Title>
                    </Flex>
                    <Card.Description
                      color="gray.400"
                      fontSize={{ base: "md", lg: "lg" }}
                    >
                      {experience.description}
                    </Card.Description>
                  </Card.Body>
                </Card.Root>
                <Flex
                  position="absolute"
                  right="100%"
                  top={"28px"}
                  transform="translateX(-20px)"
                  whiteSpace={{ base: "wrap", lg: "nowrap" }}
                  color="gray.200"
                >
                  {experience.time}
                </Flex>
              </Box>
            );
          }
        )}
      </Flex>
    </Flex>
  );
};
export default ExperiencesTab;
