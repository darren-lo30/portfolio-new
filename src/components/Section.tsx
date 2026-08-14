import { Heading, Stack } from "@chakra-ui/react";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Stack as="section" gap={6}>
    <Heading as="h2" fontSize="xl" letterSpacing="-0.01em" color="gray.100">
      {title}
    </Heading>
    {children}
  </Stack>
);

export default Section;
