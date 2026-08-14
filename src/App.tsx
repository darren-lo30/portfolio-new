import { Box, Container, Flex, Link, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  Link as RouterLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Intro from "./components/Intro";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import { ACCENT_COLOR } from "./config";

const NAV = [
  { label: "Publications", path: "/publications" },
  { label: "Experience", path: "/experience" },
];

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box minH="100vh" backgroundColor="#151515" color="white">
      <Container maxW="40rem" px={{ base: 6, md: 8 }} py={{ base: 10, md: 14 }}>
        <Stack gap={{ base: 12, md: 14 }}>
          <Flex as="header" justify="space-between" align="baseline" gap={4}>
            {isHome ? (
              <Box />
            ) : (
              <Link
                asChild
                fontSize="md"
                fontWeight="semibold"
                color="gray.100"
                _hover={{ color: ACCENT_COLOR }}
              >
                <RouterLink to="/">Darren Lo</RouterLink>
              </Link>
            )}
            <Flex gap={5}>
              {NAV.map(({ label, path }) => (
                <Link
                  key={path}
                  asChild
                  fontSize="sm"
                  color={pathname === path ? "gray.100" : "gray.500"}
                  fontWeight={pathname === path ? "semibold" : "normal"}
                  _hover={{ color: ACCENT_COLOR }}
                >
                  <RouterLink to={path}>{label}</RouterLink>
                </Link>
              ))}
            </Flex>
          </Flex>

          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<Intro />} />
          </Routes>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
