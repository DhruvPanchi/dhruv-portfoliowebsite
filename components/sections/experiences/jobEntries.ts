import { ReactNode } from "react";

export type JobTabKey =
  | "uciLab"
  | "gptTrainer"
  | "sciConnect"
  | "discoveryCube"
  | "steamForAll";

export type JobEntry = {
  key: JobTabKey;
  label: string;
  sub?: string;
  componentProps: {
    title: string;
    company: string;
    companyIcon?: ReactNode;
    dates: string;
    intro: string;
    bullets: {
      heading: string;
      content: string;
    }[];
  };
};

const jobEntries: JobEntry[] = [
  {
    key: "uciLab",
    label: "UCI ICVL",
    sub: "Hyperspectral Imaging Researcher",
    componentProps: {
      title: "Hyperspectral Imaging Researcher",
      company: "UCI ICVL (Healey Lab)",
      dates: "2025 - Present",
      intro:
        "Researching hyperspectral imaging applications for early wildfire detection under Professor Glenn Healey at the UC Irvine Imaging and Computer Vision Lab, with a focus on the HySpex pixel analysis pipeline and MODTRAN atmospheric matching.",
      bullets: [
        {
          heading: "HySpex Pixel Analysis",
          content:
            "Perform VNIR/SWIR pixel selection, alignment, and spectrum extraction on hyperspectral imagery to identify atmospheric signatures relevant to wildfire detection.",
        },
        {
          heading: "MODTRAN Atmospheric Matching",
          content:
            "Run MODTRAN-based atmospheric model fits against extracted pixel spectra and present matches to the lab PI for validation against an error threshold.",
        },
        {
          heading: "Pipeline Automation",
          content:
            "Designing and building an automated pipeline to scale the manual pixel-to-MODTRAN-fit workflow, dramatically reducing per-pixel analysis time and enabling larger batch runs.",
        },
        {
          heading: "Cross-Sensor Correlation",
          content:
            "Cross-reference VNIR and SWIR detector outputs against geo-referenced pixel locations to verify alignment and ensure consistent spectra across spectral bands.",
        },
        {
          heading: "Research Documentation",
          content:
            "Document workflows, results, and presentation materials for the professor and lab, supporting reproducibility and outreach efforts for the ICVL group.",
        },
      ],
    },
  },
  {
    key: "gptTrainer",
    label: "GPT-Trainer",
    sub: "AI Intern",
    componentProps: {
      title: "AI Intern",
      company: "GPT-Trainer (Petal)",
      dates: "2024 - 2025",
      intro:
        "Interned at GPT-Trainer, a platform for building custom AI chatbots and agents on top of LLMs, contributing to prompt engineering, agent workflows, and product testing across real customer deployments.",
      bullets: [
        {
          heading: "Prompt Engineering",
          content:
            "Designed and iterated on prompts for production chatbot deployments, improving response quality, consistency, and alignment with customer use cases.",
        },
        {
          heading: "Agent Workflow Design",
          content:
            "Built and tested multi-step agent workflows using GPT-Trainer's no-code platform, enabling chatbots to handle complex customer queries through tool use and chaining.",
        },
        {
          heading: "Model Evaluation",
          content:
            "Evaluated chatbot performance against real conversation samples, identifying failure modes and recommending prompt or workflow adjustments to improve reliability.",
        },
        {
          heading: "Product Testing & Feedback",
          content:
            "Stress-tested new platform features pre-release, surfacing bugs and UX issues to the engineering team and contributing to faster, cleaner releases.",
        },
        {
          heading: "Customer-Facing Documentation",
          content:
            "Helped write user-facing documentation and example workflows to onboard non-technical users to the platform's agent-building capabilities.",
        },
      ],
    },
  },
  {
    key: "sciConnect",
    label: "SciConnect",
    sub: "Co-founder",
    componentProps: {
      title: "Co-founder",
      company: "SciConnect (501c3 Nonprofit)",
      dates: "2022 - Present",
      intro:
        "Co-founded SciConnect, a nonprofit providing free Science Olympiad tutoring to middle and high school students nationwide. Grew the organization to reach 11,000+ students across 36+ states through volunteer tutors and free online resources.",
      bullets: [
        {
          heading: "Organization Building",
          content:
            "Built SciConnect from a small local initiative into a national nonprofit, structuring tutor recruitment, content review, and student matchmaking processes for scale.",
        },
        {
          heading: "Volunteer Tutor Network",
          content:
            "Recruited and managed a network of high-school and college-level volunteer tutors, training them to lead free sessions across the full Science Olympiad event lineup.",
        },
        {
          heading: "Nationwide Outreach",
          content:
            "Expanded reach to 11,000+ students across 36+ U.S. states through partnerships with schools, Science Olympiad chapters, and online communities.",
        },
        {
          heading: "Curriculum & Resource Development",
          content:
            "Oversaw the creation of free study guides, practice tests, and tutoring curricula across multiple Science Olympiad events, making competitive science prep accessible to underserved students.",
        },
        {
          heading: "Operations & Strategy",
          content:
            "Manage day-to-day operations including scheduling, communications, and event coordination, while setting longer-term strategy for nonprofit growth and impact.",
        },
      ],
    },
  },
  {
    key: "discoveryCube",
    label: "Discovery Cube",
    sub: "STEM Volunteer",
    componentProps: {
      title: "STEM Education Volunteer",
      company: "Discovery Cube Orange County",
      dates: "2023 - Present",
      intro:
        "Volunteered at Discovery Cube OC, one of Southern California's leading science museums, helping run hands-on STEM exhibits and engaging young visitors with interactive science demonstrations.",
      bullets: [
        {
          heading: "Hands-On Exhibit Support",
          content:
            "Guided museum visitors through interactive STEM exhibits, explaining underlying scientific concepts at age-appropriate levels for kids, families, and school groups.",
        },
        {
          heading: "Live Demonstrations",
          content:
            "Ran live science demonstrations, including physics, chemistry, and engineering experiments, helping spark curiosity in young learners through accessible, engaging content.",
        },
        {
          heading: "Visitor Engagement",
          content:
            "Built rapport with visitors of all ages, answering questions and tailoring explanations to ensure every guest left with at least one new concept or insight.",
        },
        {
          heading: "Special Event Support",
          content:
            "Supported special STEM events, summer camps, and school field trips, helping coordinate logistics and ensuring smooth operations across high-traffic days.",
        },
      ],
    },
  },
  {
    key: "steamForAll",
    label: "STEAM for All",
    sub: "Volunteer",
    componentProps: {
      title: "Volunteer",
      company: "STEAM for All",
      dates: "2022 - Present",
      intro:
        "Volunteered with STEAM for All, an initiative bringing free science, technology, engineering, arts, and math education to underserved students, helping expand access to high-quality STEAM learning experiences.",
      bullets: [
        {
          heading: "STEAM Workshops",
          content:
            "Led and assisted with STEAM workshops for K-12 students, covering topics across robotics, coding, engineering, and applied science.",
        },
        {
          heading: "Curriculum Support",
          content:
            "Helped develop and refine workshop curricula to make complex STEAM concepts accessible, engaging, and hands-on for students from a range of backgrounds.",
        },
        {
          heading: "Outreach to Underserved Communities",
          content:
            "Supported outreach efforts to schools and community centers in underserved areas, helping expand the reach of free STEAM programming.",
        },
        {
          heading: "Event Coordination",
          content:
            "Assisted with logistics, materials prep, and on-site management for STEAM for All events and workshops throughout the year.",
        },
      ],
    },
  },
];

export default jobEntries;