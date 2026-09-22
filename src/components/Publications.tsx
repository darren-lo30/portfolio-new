import { Flex, Text, Stack, Link } from "@chakra-ui/react";
import publicationsData from "../content/publications.json";
import { COLORS, HOVER, TEXT, external } from "../config";
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
  <Text fontSize={TEXT.meta} color={COLORS.body} lineHeight="1.6">
    {authors.map((a, i) => (
      <span key={a}>
        {a === YOU ? (
          <Text as="span" color={COLORS.strong}>
            {a}
          </Text>
        ) : (
          a
        )}
        {i < authors.length - 1 ? ", " : ""}
      </span>
    ))}
  </Text>
);

// Avoid "ICLR 2026, 2026" when the venue already carries the year.
const venueLabel = (pub: Publication) =>
  pub.venue.includes(String(pub.year)) ? pub.venue : `${pub.venue}, ${pub.year}`;

const PubEntry = ({ pub }: { pub: Publication }) => (
  <Stack gap={0.5}>
    {pub.paperUrl ? (
      <Link
        href={pub.paperUrl}
        {...external}
        fontSize={TEXT.body}
        fontWeight="semibold"
        color={COLORS.strong}
        lineHeight="1.4"
        width="fit-content"
        {...HOVER}
      >
        {pub.title}
      </Link>
    ) : (
      <Text
        fontSize={TEXT.body}
        fontWeight="semibold"
        color={COLORS.strong}
        lineHeight="1.4"
      >
        {pub.title}
      </Text>
    )}

    <AuthorList authors={pub.authors} />

    <Flex gap={3} align="baseline" flexWrap="wrap" fontSize={TEXT.meta}>
      <Text color={COLORS.muted}>{venueLabel(pub)}</Text>
      {pub.codeUrl && (
        <Link href={pub.codeUrl} {...external} color={COLORS.muted} {...HOVER}>
          code ↗
        </Link>
      )}
    </Flex>
  </Stack>
);

const Publications = () => (
  <Section title="Publications">
    <Stack gap={6}>
      {publicationsData.publications.map((pub: Publication) => (
        <PubEntry key={pub.title} pub={pub} />
      ))}
    </Stack>
  </Section>
);

export default Publications;
