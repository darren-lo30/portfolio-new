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
import { COLORS, HOVER } from "./config";

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
    <Box minH="100vh" bg={COLORS.bg} color={COLORS.body}>
      <Container
        maxW="40rem"
        px={{ base: 6, md: 8 }}
        py={{ base: 10, md: 16 }}
      >
        <Stack gap={{ base: 14, md: 20 }}>
          <Flex as="header" justify="space-between" align="baseline" gap={4}>
            <Link
              asChild
              fontSize="sm"
              fontWeight="semibold"
              color={COLORS.strong}
              visibility={isHome ? "hidden" : "visible"}
              {...HOVER}
            >
              <RouterLink to="/">Darren Lo</RouterLink>
            </Link>
            <Flex as="nav" gap={6}>
              {NAV.map(({ label, path }) => (
                <Link
                  key={path}
                  asChild
                  fontSize="sm"
                  color={pathname === path ? COLORS.strong : COLORS.muted}
                  {...HOVER}
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
