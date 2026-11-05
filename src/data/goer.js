const photo = (name, ratio, caption) => ({ src: `/images/goer/${name}.webp`, ratio, caption });

export const goerHero = photo("team-stage", 4 / 3, "At the National GOER, Third Edition");

export const goerPhotos = [
  photo("team-campus", 4 / 3, "In Mumbai for the final"),
  photo("sda-bocconi", 4 / 3, "SDA Bocconi Asia Center"),
  photo("room", 4 / 3, "In the competition room"),
  photo("finalists", 9 / 16, "Welcome, GOER 2025 finalists"),
  photo("working", 3 / 2, "During the competition"),
  photo("finalist-wall", 9 / 16, "At the finalists' wall"),
  photo("session", 3 / 2, "A session at the venue"),
  photo("selfie", 16 / 9, "Team selfie at the venue"),
];
