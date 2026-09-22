import { Grid, Text, Stack } from "@chakra-ui/react";
import experiencesData from "../content/experiences.json";
import { COLORS, TEXT } from "../config";
import Section from "./Section";

interface Experience {
  jobTitle: string;
  company: string;
  description: string;
  time: string;
}

// "May 2024 - Present" -> { current: true, start: <timestamp>, label: "2024 – Now" }
// Current roles sort first, then by most recent start.
const parseTime = (time: string) => {
  const [start, end] = time.split(" - ").map((s) => s.trim());
  const startYear = start.split(" ").pop()!;
  const endYear = end === "Present" ? "Now" : end.split(" ").pop()!;
  return {
    current: end === "Present",
    start: new Date(start).getTime(),
    label: startYear === endYear ? startYear : `${startYear} – ${endYear}`,
  };
};

const experiences = experiencesData.experiences
  .map((exp: Experience) => ({ ...exp, ...parseTime(exp.time) }))
  .sort((a, b) => Number(b.current) - Number(a.current) || b.start - a.start);

const ExperienceRow = ({ exp }: { exp: (typeof experiences)[number] }) => (
  // Two columns: text on the left, dates on the right. The description stays
  // in the left column so it never runs underneath the dates.
  <Grid
    templateColumns="1fr auto"
    columnGap={{ base: 3, sm: 6 }}
    rowGap={0.5}
    alignItems="baseline"
  >
    <Text fontSize={TEXT.body} lineHeight="1.4" color={COLORS.strong}>
      <Text as="span" fontWeight="semibold">
        {exp.company}
      </Text>
      <Text as="span" color={COLORS.muted}>
        {" · "}
      </Text>
      <Text as="span" color={COLORS.body}>
        {exp.jobTitle}
      </Text>
    </Text>
    <Text
      fontSize={TEXT.meta}
      color={COLORS.muted}
      textAlign="right"
      whiteSpace="nowrap"
      fontVariantNumeric="tabular-nums"
      title={exp.time}
    >
      {exp.label}
    </Text>
    <Text
      fontSize={TEXT.meta}
      color={COLORS.muted}
      lineHeight="1.6"
      gridColumn={{ base: "1 / -1", sm: "1" }}
    >
      {exp.description}
    </Text>
  </Grid>
);

const ExperienceSection = () => (
  <Section title="Experience">
    <Stack gap={5}>
      {experiences.map((exp) => (
        <ExperienceRow key={`${exp.company}-${exp.time}`} exp={exp} />
      ))}
    </Stack>
  </Section>
);

export default ExperienceSection;
