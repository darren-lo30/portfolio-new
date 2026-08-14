import { Flex, Text, Stack } from "@chakra-ui/react";
import experiencesData from "../content/experiences.json";
import { ACCENT_COLOR } from "../config";
import Section from "./Section";

interface Experience {
  jobTitle: string;
  company: string;
  description: string;
  time: string;
}

const ExperienceRow = ({ exp }: { exp: Experience }) => (
  <Stack gap={1}>
    <Flex
      justify="space-between"
      align="baseline"
      gap={4}
      flexDir={{ base: "column", sm: "row" }}
    >
      <Text fontSize="15px" color="gray.100" lineHeight="1.4">
        <Text as="span" fontWeight="semibold">
          {exp.jobTitle}
        </Text>
        <Text as="span" color="gray.500">
          {" — "}
        </Text>
        <Text as="span" color={ACCENT_COLOR}>
          {exp.company}
        </Text>
      </Text>
      <Text fontSize="13px" color="gray.500" flexShrink={0}>
        {exp.time}
      </Text>
    </Flex>

    <Text fontSize="13px" color="gray.400" lineHeight="1.6">
      {exp.description}
    </Text>
  </Stack>
);

const ExperienceSection = () => (
  <Section title="Experience">
    <Stack gap={6}>
      {experiencesData.experiences.map((exp: Experience, i: number) => (
        <ExperienceRow key={i} exp={exp} />
      ))}
    </Stack>
  </Section>
);

export default ExperienceSection;
