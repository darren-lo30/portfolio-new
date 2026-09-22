export const ACCENT_COLOR = "#84dfe2";

// Shared type scale so every page reads the same.
export const TEXT = {
  body: "15px",
  meta: "13px",
} as const;

export const COLORS = {
  bg: "#151515",
  strong: "gray.100",
  body: "gray.400",
  muted: "gray.500",
} as const;

export const HOVER = {
  transition: "color 0.15s ease",
  _hover: { color: ACCENT_COLOR, textDecoration: "none" },
} as const;

export const external = { target: "_blank", rel: "noopener noreferrer" } as const;
