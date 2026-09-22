import { Heading, Stack } from "@chakra-ui/react";
import { COLORS } from "../config";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Stack as="section" gap={6}>
    <Heading
      as="h1"
      fontSize="2xl"
      fontWeight="semibold"
      letterSpacing="-0.02em"
      color={COLORS.strong}
    >
      {title}
    </Heading>
    {children}
  </Stack>
);

export default Section;
