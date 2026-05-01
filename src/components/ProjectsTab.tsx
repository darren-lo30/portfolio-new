import { Flex, Text, Box, Stack, Link } from "@chakra-ui/react";
import projectData from "../content/projects.json";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ACCENT_COLOR } from "../config";

interface Project {
  title: string;
  description: string;
  link: string;
  paperLink?: string;
  tags?: string[];
}

const ProjectRow = ({ project }: { project: Project }) => (
  <Box
    borderTop="1px solid"
    borderColor="whiteAlpha.100"
    py={5}
    _last={{ borderBottom: "1px solid", borderBottomColor: "whiteAlpha.100" }}
    _hover={{ backgroundColor: "whiteAlpha.50" }}
    px={3}
    mx={-3}
    borderRadius="sm"
    transition="background 0.15s"
  >
    <Stack gap={2}>
      <Flex align="center" justify="space-between" gap={2}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color="gray.100"
          letterSpacing="-0.01em"
          lineHeight="1.3"
        >
          {project.title}
        </Text>
        <Flex gap={1} flexShrink={0}>
          {project.paperLink && (
            <Link
              href={project.paperLink}
              target="_blank"
              display="inline-flex"
              alignItems="center"
              color="gray.500"
              title="Read paper"
              _hover={{
                backgroundColor: "transparent",
                color: ACCENT_COLOR,
              }}
            >
              <FaArrowUpRightFromSquare size="0.75em" />
            </Link>
          )}
          <Link
            href={project.link}
            target="_blank"
            display="inline-flex"
            alignItems="center"
            color="gray.500"
            title="GitHub"
            _hover={{ backgroundColor: "transparent", color: ACCENT_COLOR }}
          >
            <FaGithub size="1em" />
          </Link>
        </Flex>
      </Flex>

      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="gray.400"
        lineHeight="1.7"
      >
        {project.description}
      </Text>

      {project.tags && project.tags.length > 0 && (
        <Flex gap={2} flexWrap="wrap" mt={1}>
          {project.tags.map((tag) => (
            <Text
              key={tag}
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
              {tag}
            </Text>
          ))}
        </Flex>
      )}
    </Stack>
  </Box>
);

const ProjectsTab = () => (
  <Stack w="full" maxW="3xl" gap={0} marginTop={{ base: 0, md: "-50px" }}>
    <Flex align="center" gap={4} mb={4}>
      <Text
        fontSize="xs"
        fontFamily="mono"
        color="gray.500"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        Projects
      </Text>
      <Box flex={1} h="1px" backgroundColor="whiteAlpha.100" />
    </Flex>

    {projectData.projects.map((p: Project, i: number) => (
      <ProjectRow key={i} project={p} />
    ))}
  </Stack>
);

export default ProjectsTab;
