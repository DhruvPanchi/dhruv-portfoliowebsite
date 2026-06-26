export type MiniProjectEntry = {
  title: string;
  description: string;
  gitLink: string;
  liveLink: string;
  listItems: string[];
};

const miniProjectsEntries: MiniProjectEntry[] = [
  {
    title: "Spectra",
    description:
      "An AI agent helping local OC businesses automatically follow up on missed calls, collect Google reviews, and answer customer questions 24/7 — so they never lose a lead while running their business.",
    gitLink: "https://spectra-oc-ai.lovable.app/",
    liveLink: "https://spectra-oc-ai.lovable.app/",
    listItems: ["AI Agent", "LLMs", "Automation", "Small Business"],
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