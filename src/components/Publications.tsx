import { Flex, Text, Box, Stack, Link } from "@chakra-ui/react";
import publicationsData from "../content/publications.json";
import { ACCENT_COLOR } from "../config";
import Section from "./Section";

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  paperUrl?: string;
  codeUrl?: string;
}

const YOU = "Darren Lo";

const AuthorList = ({ authors }: { authors: string[] }) => (
  <Text fontSize="13px" color="gray.400" lineHeight="1.6">
    {authors.map((a, i) => (
      <span key={a}>
        {a === YOU ? (
          <Box as="span" color="gray.200" fontWeight="semibold">
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

const PubEntry = ({ pub }: { pub: Publication }) => (
  <Stack gap={1}>
    {pub.paperUrl ? (
      <Link
        href={pub.paperUrl}
        target="_blank"
        fontSize="15px"
        fontWeight="semibold"
        color="gray.100"
        lineHeight="1.4"
        width="fit-content"
        _hover={{ color: ACCENT_COLOR }}
      >
        {pub.title}
      </Link>
    ) : (
      <Text fontSize="15px" fontWeight="semibold" color="gray.100" lineHeight="1.4">
        {pub.title}
      </Text>
    )}

    <AuthorList authors={pub.authors} />

    <Flex gap={3} align="baseline" flexWrap="wrap">
      <Text fontSize="13px" color="gray.500" fontStyle="italic">
        {pub.venue}, {pub.year}
      </Text>
      {pub.codeUrl && (
        <Link
          href={pub.codeUrl}
          target="_blank"
          fontSize="13px"
          color={ACCENT_COLOR}
          _hover={{ textDecoration: "underline" }}
        >
          code
        </Link>
      )}
    </Flex>
  </Stack>
);

const Publications = () => (
  <Section title="Publications">
    <Stack gap={7}>
      {publicationsData.publications.map((pub: Publication, i: number) => (
        <PubEntry key={i} pub={pub} />
      ))}
    </Stack>
  </Section>
);

export default Publications;
