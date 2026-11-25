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
];
