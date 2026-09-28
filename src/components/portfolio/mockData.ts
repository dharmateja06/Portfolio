export type AwardItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
};

export const awardsMockData: AwardItem[] = [
  {
    year: "2025",
    title: "Best Performer",
    organization: "Dev Creations and Solutions",
    description:
      "Recognized for consistent contribution and performance during internship.",
  },
  {
    year: "2025",
    title: "2nd Runner-Up",
    organization: "IOTOPIA Hackathon",
    description:
      "Built an innovative technology solution and secured second place.",
  },
  {
    year: "2024",
    title: "Winner – Best AI Used Team",
    organization: "Jyothy Institute of Technology",
    description:
      "Recognized for effectively integrating AI into a practical solution.",
  },
  {
    year: "2024",
    title: "Top 15 Team",
    organization: "SJBIT Axiom Hackathon",
    description: "Selected among the best performing teams.",
  },
  {
    year: "2024",
    title: "Finalist",
    organization: "The Great Bengaluru Hackathon",
    description: "Ranked among the top 10% of 1500+ teams.",
  },
  {
    year: "2024",
    title: "NPTEL SWAYAM Certification",
    organization: "The Art of C Programming",
    description: "Completed a focused certification in C programming and computational thinking.",
  },
];
