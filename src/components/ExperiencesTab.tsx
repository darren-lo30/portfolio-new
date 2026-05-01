import { Flex, Text, Box, Stack } from "@chakra-ui/react";
import experiencesData from "../content/experiences.json";
import { ACCENT_COLOR } from "../config";

interface Experience {
  jobTitle: string;
  company: string;
  companyUrl?: string;
  description: string;
  time: string;
  location?: string;
  skills?: string[];
}

const ExperienceRow = ({ exp }: { exp: Experience }) => (
  <Box
    borderTop="1px solid"
    borderColor="whiteAlpha.100"
    py={5}
    _last={{ borderBottom: "1px solid", borderBottomColor: "whiteAlpha.100" }}
  >
    <Flex gap={{ base: 0, md: 6 }} flexDir={{ base: "column", md: "row" }}>
      {/* Left: date */}
      <Box minW={{ md: "160px" }} mb={{ base: 2, md: 0 }} flexShrink={0}>
        <Text
          fontFamily="mono"
          fontSize="xs"
          color="gray.500"
          letterSpacing="wide"
        >
          {exp.time}
        </Text>
      </Box>

      {/* Right: content */}
      <Stack gap={2} flex={1}>
        <Flex align="baseline" gap={2} flexWrap="wrap">
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="semibold"
            color="gray.100"
            letterSpacing="-0.01em"
            lineHeight="1.3"
          >
            {exp.jobTitle}
          </Text>
          <Text color="gray.500" fontSize="md">
            @
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={ACCENT_COLOR}
            letterSpacing="-0.01em"
            lineHeight="1.3"
          >
            {exp.company}
          </Text>
          {exp.location && (
            <Text fontFamily="mono" fontSize="xs" color="gray.600" ml={1}>
              · {exp.location}
            </Text>
          )}
        </Flex>

        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="gray.400"
          lineHeight="1.7"
        >
          {exp.description}
        </Text>

        {exp.skills && exp.skills.length > 0 && (
          <Flex gap={2} flexWrap="wrap" mt={1}>
            {exp.skills.map((skill) => (
              <Text
                key={skill}
                fontFamily="mono"
                fontSize="2xs"
                color="gray.500"
                px={1.5}
                py={0.5}
                border="1px solid"
                borderColor="whiteAlpha.150"
                borderRadius="sm"
                letterSpacing="wide"
              >
                {skill}
              </Text>
            ))}
          </Flex>
        )}
      </Stack>
    </Flex>
  </Box>
);

const ExperiencesTab = () => (
  <Stack w="full" maxW="3xl" gap={0} marginTop={{ base: 0, md: "-50px" }}>
    <Flex align="center" gap={4} mb={4}>
      <Text
        fontSize="xs"
        fontFamily="mono"
        color="gray.500"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        Experience
      </Text>
      <Box flex={1} h="1px" backgroundColor="whiteAlpha.100" />
    </Flex>

    {experiencesData.experiences.map((exp: Experience, i: number) => (
      <ExperienceRow key={i} exp={exp} />
    ))}
  </Stack>
);

export default ExperiencesTab;
