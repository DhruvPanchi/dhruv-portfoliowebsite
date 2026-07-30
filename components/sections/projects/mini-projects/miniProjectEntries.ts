export type MiniProjectEntry = {
  title: string;
  description: string;
  gitLink: string;
  liveLink: string;
  listItems: string[];
};

const miniProjectsEntries: MiniProjectEntry[] = [
  {
    title: "SciConnect",
    description:
      "Co-founded SciConnect, a 501(c)(3) nonprofit providing free Science Olympiad tutoring to middle and high school students nationwide. Grew the organization to reach 11,000+ students across 36+ states through a network of volunteer tutors and free curriculum resources.",
    gitLink: "https://www.sciconnect.org/",
    liveLink: "https://www.sciconnect.org/",
    listItems: ["Nonprofit", "Education", "Outreach", "Curriculum"],
  },
  {
    title: "ML in Soccer",
    description:
      "A data-driven analysis predicting MLS player salaries from performance data. Built Linear and Ridge regression models on 9 selected features, achieving a cross-validated RMSE of ~$647K. Published in the Scholarly Review Journal.",
    gitLink:
      "https://www.scholarlyreview.org/article/143876-machine-learning-in-soccer-determining-the-value-of-mls-players-in-past-seasons-based-on-statistics-and-how-that-applies-to-value-as-a-player-in-gene",
    liveLink:
      "https://www.scholarlyreview.org/article/143876-machine-learning-in-soccer-determining-the-value-of-mls-players-in-past-seasons-based-on-statistics-and-how-that-applies-to-value-as-a-player-in-gene",
    listItems: ["Python", "Regression", "Feature Selection", "Stats"],
  },
];

export default miniProjectsEntries;