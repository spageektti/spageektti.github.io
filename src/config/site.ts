export interface SocialProfile {
  name: string;
  url: string;
  handle?: string;
}

export const site = {
  name: "Wiktor Perskawiec",
  username: "spageektti",
  url: "https://perskawiec.cc",
} as const;

export const socialProfiles: readonly SocialProfile[] = [
  {
    name: "GitHub",
    url: "https://github.com/spageektti",
    handle: "@spageektti",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wiktor-perskawiec",
    handle: "@wiktor-perskawiec",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61565781655485",
    handle: "Wiktor Perskawiec",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/spageektti/",
    handle: "@spageektti",
  },
];
