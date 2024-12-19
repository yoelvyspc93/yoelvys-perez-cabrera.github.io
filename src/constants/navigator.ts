export interface Navigator {
  label: string;
  href: string;
}

export const navigator: Navigator[] = [
  { label: "Home", href: "#main" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];