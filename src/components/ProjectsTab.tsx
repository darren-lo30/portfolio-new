import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import projectData from "../content/projects/projects.json";
import matter from "gray-matter";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
}

const ProjectsTab = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      const projectLoaded = await Promise.all(
        projectData.projects.map(async (projectFileName) => {
          const fileData = await import(
            `../content/projects/${projectFileName}.mdx`
          );
          console.log(fileData);
          const parsedData = matter(fileData);
          return {
            title: parsedData.data.title as string,
            description: parsedData.content as string,
          };
        })
      );
      console.log(projectLoaded);
      setProjects(projectLoaded);
    })();
  }, []);

  return (
    <div>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap="16px"
      >
        {projects.map((project) => {
          return (
            <GridItem>
              <Card.Root backgroundColor="gray.700" border="none">
                <Card.Body gap="2">
                  <Card.Title color="gray.200">{project.title}</Card.Title>
                  <Card.Description color="gray.400">
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
