export interface Link {
  href: string;
  linkText: string;
  description?: string;
}

export const linkArray: Link[] = [
  {
    href: "https://github.com/olwatshisface",
    linkText: "My personal github",
    description:
      "I've only done enterprise-level development, so my personal repo is a work-in-progress. I'm currently working on building some public projects.",
  },
];
