import { StaticImageData } from "next/image";

import voiceVehicleBig from "@/public/assets/images/ProjectPictures/big-images/VoiceVehicle_big.png";
import candidBig from "@/public/assets/images/ProjectPictures/big-images/Candid_big.svg";
import electricVehicleBig from "@/public/assets/images/ProjectPictures/big-images/ElectricVehicle_big.png";

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
    title: "Electric Vehicle — Autonomous Distance-Control System",
    description:
      "Designed and built a battery-powered vehicle from scratch, placing 1st out of ~50 teams at the Science Olympiad National Tournament. Implemented closed-loop distance control on an Arduino using a rotary encoder for wheel-revolution counting, stopping the vehicle within 4mm of the operator-set target across variable distances. Drove a 600 RPM DC motor through a motor driver with PWM ramping, tuning the acceleration and braking profile to trade top speed against overshoot. Built an LCD and rotary-encoder input interface for run-to-run target entry, with a rifle-scope mount for repeatable start-line alignment.",
    image: {
      src: electricVehicleBig,
      alt: "Electric Vehicle Autonomous Distance-Control System Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/big-images/ElectricVehicle_big.png",
    gitLink: "",
    liveLink: "",
    techStackList: [
      "Arduino",
      "Embedded C++",
      "Rotary Encoder Feedback",
      "I2C LCD",
      "PWM Motor Control",
      "Closed-Loop Control",
    ],
    layout: "default",
  },
];

export default capstoneEntries;