import { ACCENT_COLOR } from "../config";
import { Stack, Flex, Heading, Text, Link } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGithub,
  FaGoogleScholar,
  FaLinkedin,
} from "react-icons/fa6";

const InlineLink = (props: { link: string; label: string }) => (
  <Link
    href={props.link}
    color="inherit"
    target="_blank"
    fontWeight="bold"
    textDecoration="underline"
    textUnderlineOffset={2}
    _hover={{ color: ACCENT_COLOR }}
  >
    {props.label}
  </Link>
);

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/darren-lo30",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:darren.lo@uwaterloo.ca",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/darren-lo-04/",
    icon: FaLinkedin,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.ca/citations?view_op=list_works&hl=en&authuser=1&user=ReKTn4kAAAAJ",
    icon: FaGoogleScholar,
  },
];

const Intro = () => (
  <Stack gap={6}>
    <Heading
      as="h1"
      fontSize={{ base: "3xl", md: "4xl" }}
      lineHeight="1.1"
      letterSpacing="-0.02em"
    >
      Darren Lo
    </Heading>

    <Stack gap={4}>
      <Text fontSize="md" color="gray.400" lineHeight="1.75">
        Hi! I'm a 4th year computer science student at the{" "}
        <InlineLink
          label="University of Waterloo"
          link="https://uwaterloo.ca/"
        />
        .
      </Text>
      <Text fontSize="md" color="gray.400" lineHeight="1.75">
        I'm currently a Research Intern at{" "}
        <InlineLink link="https://waabi.ai/" label="Waabi" />, working on
        generative video models for autonomous driving, and a Machine Learning
        Researcher at the University of Waterloo exploring diffusion models. I
        was previously at <InlineLink link="https://groq.com" label="Groq" />{" "}
        where I worked on model inference.
      </Text>
      <Text fontSize="md" color="gray.400" lineHeight="1.75">
        My research interests lie in generative modeling, with a focus on video
        diffusion world models. More recently, I've become interested in AI
        alignment and safety as models grow increasingly capable.{" "}
      </Text>
    </Stack>

    <Flex gap={5} align="center">
      {SOCIALS.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          aria-label={label}
          color="gray.400"
          _hover={{ color: ACCENT_COLOR }}
        >
          <Icon size="1.2em" />
        </Link>
      ))}
    </Flex>
  </Stack>
);

export default Intro;
