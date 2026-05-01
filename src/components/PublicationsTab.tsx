import { Flex, Text, Box, Stack, Link } from "@chakra-ui/react";
import publicationsData from "../content/publications.json";
import { ACCENT_COLOR } from "../config";

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  tldr?: string;
  highlight?: boolean;
}

const YOU = "Darren Lo";

const AuthorList = ({ authors }: { authors: string[] }) => (
  <Text fontFamily="mono" fontSize="xs" color="gray.500" letterSpacing="wide">
    {authors.map((a, i) => (
      <span key={a}>
        {a === YOU ? (
          <Box as="span" color="gray.300" fontWeight="semibold">
            {a}
          </Box>
        ) : (
          a
        )}
        {i < authors.length - 1 ? ", " : ""}
      </span>
    ))}
  </Text>
);

const PubRow = ({ pub }: { pub: Publication }) => (
  <Box
    borderTop="1px solid"
    borderColor="whiteAlpha.100"
    py={5}
    _last={{ borderBottom: "1px solid", borderBottomColor: "whiteAlpha.100" }}
    position="relative"
    pl={pub.highlight ? 4 : 0}
    _before={
      pub.highlight
        ? {
            content: '""',
            position: "absolute",
            left: 0,
            top: "16px",
            bottom: "16px",
            width: "2px",
            backgroundColor: ACCENT_COLOR,
            borderRadius: "full",
          }
        : undefined
    }
  >
    <Stack gap={2}>
      {/* Title + links */}
      <Flex align="flex-start" justify="space-between" gap={4} flexWrap="wrap">
        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"
          color="gray.100"
          letterSpacing="-0.01em"
          lineHeight="1.4"
          flex={1}
        >
          {pub.title}
        </Text>
        <Flex gap={2} flexShrink={0} flexWrap="wrap" pt={0.5}>
          {pub.paperUrl && (
            <Link
              href={pub.paperUrl}
              target="_blank"
              fontFamily="mono"
              fontSize="2xs"
              color={ACCENT_COLOR}
              letterSpacing="wide"
              textTransform="uppercase"
              _hover={{ textDecoration: "underline" }}
            >
              paper
            </Link>
          )}
          {pub.codeUrl && (
            <Link
              href={pub.codeUrl}
              target="_blank"
              fontFamily="mono"
              fontSize="2xs"
              color="gray.400"
              letterSpacing="wide"
              textTransform="uppercase"
              _hover={{ color: ACCENT_COLOR, textDecoration: "underline" }}
            >
              code
            </Link>
          )}
          {pub.projectUrl && (
            <Link
              href={pub.projectUrl}
              target="_blank"
              fontFamily="mono"
              fontSize="2xs"
              color="gray.400"
              letterSpacing="wide"
              textTransform="uppercase"
              _hover={{ color: ACCENT_COLOR, textDecoration: "underline" }}
            >
              project
            </Link>
          )}
        </Flex>
      </Flex>

      {/* Authors */}
      <AuthorList authors={pub.authors} />

      {/* Venue + year */}
      <Flex align="center" gap={2} flexWrap="wrap">
        <Text fontSize="xs" color="gray.400" fontStyle="italic">
          {pub.venue}
        </Text>
        <Text fontFamily="mono" fontSize="xs" color="gray.600">
          ·
        </Text>
        <Text fontFamily="mono" fontSize="xs" color="gray.500">
          {pub.year}
        </Text>
      </Flex>

      {/* TL;DR */}
      {pub.tldr && (
        <Flex gap={2} align="flex-start" mt={1}>
          <Text
            fontFamily="mono"
            fontSize="2xs"
            color={ACCENT_COLOR}
            letterSpacing="wide"
            textTransform="uppercase"
            flexShrink={0}
            pt="2px"
          >
            tl;dr
          </Text>
          <Text fontSize="sm" color="gray.500" lineHeight="1.6">
            {pub.tldr}
          </Text>
        </Flex>
      )}
    </Stack>
  </Box>
);

const PublicationsTab = () => (
  <Stack w="full" maxW="3xl" gap={0} marginTop={{ base: 0, md: "-50px" }}>
    <Flex align="center" gap={4} mb={6}>
      <Text
        fontSize="xs"
        fontFamily="mono"
        color="gray.500"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        Publications
      </Text>
      <Box flex={1} h="1px" backgroundColor="whiteAlpha.100" />
    </Flex>

    {publicationsData.publications.length === 0 ? (
      <Text color="gray.600" fontFamily="mono" fontSize="sm">
        No publications yet — check back soon.
      </Text>
    ) : (
      publicationsData.publications.map((pub: Publication, i: number) => (
        <PubRow key={i} pub={pub} />
      ))
    )}
  </Stack>
);

export default PublicationsTab;
