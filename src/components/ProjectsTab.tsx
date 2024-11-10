import { Flex, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import projectData from "../content/projects.json";
import { FaGithub } from "react-icons/fa6";
import { ACCENT_COLOR } from "../config";

interface Project {
  title: string;
  description: string;
  link: string;
}

const ProjectsTab = () => {
  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="16px"
      >
        {projectData.projects.map((project: Project) => {
          return (
            <GridItem>
              <Card.Root backgroundColor="gray.700" border="none" height="100%">
                <Card.Body gap="2">
                  <Flex alignItems="center">
                    <Card.Title
                      color="gray.200"
                      fontSize={{ base: "2xl" }}
                      width="100%"
                    >
                      {project.title}
                    </Card.Title>
                    <IconButton
                      as={"a"}
                      href={project.link}
                      target={"_blank"}
                      marginLeft="auto"
                      variant="ghost"
                      color="gray.300"
                      _hover={{
                        backgroundColor: "transparent",
                        color: ACCENT_COLOR,
                      }}
                    >
                      <FaGithub />
                    </IconButton>
                  </Flex>
                  <Card.Description
                    color="gray.400"
                    fontSize={{ base: "md", lg: "lg" }}
                  >
                    {project.description}
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProjectsTab;
