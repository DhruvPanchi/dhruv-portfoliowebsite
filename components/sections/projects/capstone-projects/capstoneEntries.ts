import { StaticImageData } from "next/image";

import voiceVehicleBig from "@/public/assets/images/ProjectPictures/big-images/VoiceVehicle_big.png";
import candidBig from "@/public/assets/images/ProjectPictures/big-images/Candid_big.svg";
import sciConnectBig from "@/public/assets/images/ProjectPictures/big-images/SciConnect_big.png";

export type ProjectLayout = "default" | "reversed";

export type CapstoneEntry = {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  imageUrl: string;
  gitLink: string;
  youtubeLink?: string;
  liveLink: string;
  techStackList: string[];
  layout?: ProjectLayout;
};

const capstoneEntries: CapstoneEntry[] = [
  {
    title: "Voice-Controlled Vehicle",
    description:
      "A machine learning pipeline enabling reliable voice-controlled navigation for a robotic system, with applications in assistive technology. Built a custom dataset of voice commands, designed a two-stage CNN architecture with spectrogram (STFT) feature extraction, and integrated the model into a real-time robotic control system. Published in the Scholarly Review Journal.",
    image: {
      src: voiceVehicleBig,
      alt: "Voice-Controlled Vehicle Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/big-images/VoiceVehicle_big.png",
    gitLink:
      "https://www.scholarlyreview.org/article/158298-voice-controlled-vehicle-determining-the-best-machine-learning-models-for-voice-recognition",
    liveLink:
      "https://www.scholarlyreview.org/article/158298-voice-controlled-vehicle-determining-the-best-machine-learning-models-for-voice-recognition",
    techStackList: ["Python", "TensorFlow", "CNN", "STFT", "Arduino"],
    layout: "default",
  },
  {
    title: "Candid",
    description:
      "An AI-powered civic engagement platform built to improve how residents interact with local governments. Designed a chatbot system that answers natural-language questions about city policies, services, and initiatives. Implemented a full-stack web app, integrated LLMs for context-aware responses, and engineered backend workflows for data ingestion and prompt structuring — with active outreach to local government stakeholders for pilot adoption.",
    image: {
      src: candidBig,
      alt: "Candid Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/big-images/Candid_big.svg",
    gitLink: "",
    liveLink: "",
    techStackList: ["Next.js", "Tailwind", "LLMs", "RAG", "TypeScript"],
    layout: "reversed",
  },
  {
    title: "SciConnect",
    description:
      "Co-founded SciConnect, a 501(c)(3) nonprofit providing free Science Olympiad tutoring to middle and high school students nationwide. Grew the organization to reach 11,000+ students across 36+ states through a network of volunteer tutors, free study guides, and curriculum spanning the full Science Olympiad event lineup — making competitive science prep accessible to underserved students.",
    image: {
      src: sciConnectBig,
      alt: "SciConnect Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/big-images/SciConnect_big.png",
    gitLink: "https://www.sciconnect.org/",
    liveLink: "https://www.sciconnect.org/",
    techStackList: ["Nonprofit", "Education", "Outreach", "Curriculum"],
    layout: "default",
  },
];

export default capstoneEntries;