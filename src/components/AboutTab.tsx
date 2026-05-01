import { ACCENT_COLOR } from "../config";
import {
  Stack,
  Flex,
  Heading,
  Text,
  IconButton,
  chakra,
  Link,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGithub,
  FaGoogleScholar,
  FaLinkedin,
} from "react-icons/fa6";

const LinkItem = (props: { link: string; label: string }) => (
  <Link
    href={props.link}
    color={"inherit"}
    target={"_blank"}
    fontWeight="bold"
    textDecoration={"underline"}
    textUnderlineOffset={2}
    _hover={{ color: ACCENT_COLOR }}
  >
    {props.label}
  </Link>
);

const ButtonLink = chakra(IconButton, {
  base: {
    color: "gray.400",
    backgroundColor: "transparent",
    "&:hover": { backgroundColor: "transparent", color: ACCENT_COLOR },
  },
});

// Replace with your actual image path or URL, e.g. "/pfp.jpg" or "https://..."
// const PROFILE_PIC_SRC = "/pfp.jpg";

const AboutTab = () => {
  return (
    <Stack w={"full"} maxW={"3xl"} gap={"40px"}>
      {/* ── Header: avatar + name ── */}
      <Flex gap={{ base: 5, md: 8 }} align="center" flexWrap="wrap">
        {/* <Box
          w={{ base: "88px", md: "116px" }}
          h={{ base: "88px", md: "116px" }}
          borderRadius="full"
          overflow="hidden"
          border="2px solid"
          borderColor={ACCENT_COLOR}
          backgroundColor="whiteAlpha.100"
          flexShrink={0}
        >
          <Image
            src={PROFILE_PIC_SRC}
            alt="Darren Lo"
            w="100%"
            h="100%"
            objectFit="cover"
            fallback={
              <Flex w="100%" h="100%" align="center" justify="center">
                <Text
                  color="gray.500"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  fontFamily="mono"
                >
                  DL
                </Text>
              </Flex>
            }
          />
        </Box> */}

        <Stack gap={2} flex={1} minW="180px">
          <Heading
            fontSize={{ base: "4xl", md: "5xl" }}
            lineHeight="1.1"
            letterSpacing="-0.02em"
          >
            Hi, I'm Darren
          </Heading>
        </Stack>
      </Flex>

      {/* ── Bio ── */}
      <Stack gap={4}>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          color="gray.400"
          lineHeight="1.75"
        >
          I'm a 4th year computer science student at the{" "}
          <LinkItem
            label="University of Waterloo"
            link="https://uwaterloo.ca/"
          />{" "}
          with an interest in machine learning research.
        </Text>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          color="gray.400"
          lineHeight="1.75"
        >
          I'm currently a Research Intern at{" "}
          <LinkItem link="https://waabi.ai/" label="Waabi" />, working on
          generative video models for autonomous driving, and a Machine Learning
          Researcher at the University of Waterloo exploring diffusion language
          models.
        </Text>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          color="gray.400"
          lineHeight="1.75"
        >
          My research interests lie in generative modeling, specifically video
          diffusion world models and diffusion language models.
        </Text>
      </Stack>

      {/* ── Social links ── */}
      <Flex gap={3} ml={-2} mt={-4}>
        <ButtonLink
          size="lg"
          aria-label="Github"
          as="a"
          href="https://github.com/darren-lo30"
          target="_blank"
        >
          <FaGithub />
        </ButtonLink>
        <ButtonLink
          size="lg"
          aria-label="Email"
          as="a"
          href="mailto:darren.lo@uwaterloo.ca"
          target="_blank"
        >
          <FaEnvelope />
        </ButtonLink>
        <ButtonLink
          size="lg"
          aria-label="Linkedin"
          as="a"
          href="https://www.linkedin.com/in/darren-lo-04/"
          target="_blank"
        >
          <FaLinkedin />
        </ButtonLink>
        <ButtonLink
          size="lg"
          aria-label="Google Scholar"
          as="a"
          href="https://scholar.google.ca/citations?view_op=list_works&hl=en&authuser=1&user=ReKTn4kAAAAJ"
          target="_blank"
        >
          <FaGoogleScholar />
        </ButtonLink>
      </Flex>
    </Stack>
  );
};

export default AboutTab;
