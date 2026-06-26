"use client";

import React from "react";
import Image from "next/image";
import {
  profileImgCircle,
  Python,
  Cpp,
  Java,
  Github,
  TensorFlow,
  Arduino,
  CircuitDesign,
  Onshape,
  ESP32,
  Modtran,
  Anthropic,
} from "@/public/assets";
import SectionTitle from "../common/SectionTitle";

// SkillIcon component
const SkillIcon = ({
  src,
  alt,
  title,
  className = "w-12 max-md:w-6 rounded-full",
}: {
  src: any;
  alt: string;
  title: string;
  className?: string;
}) => (
  <li className="flex items-center transition-all duration-300 hover:-translate-y-2">
    <Image
      className={`${className} hover:animate-pulse hover:contrast-150`}
      src={src}
      alt={alt}
      title={title}
      loading="lazy"
    />
  </li>
);

const skillGroups = [
  {
    title: "Hard Skills",
    skills: [
      { src: Python, alt: "Python", title: "Python", className: "w-14 max-md:w-7" },
      { src: Cpp, alt: "C++", title: "C/C++", className: "w-12 max-md:w-6" },
      { src: Java, alt: "Java", title: "Java", className: "w-12 max-md:w-6" },
      { src: Github, alt: "GitHub", title: "GitHub", className: "w-12 max-md:w-6 rounded-full" },
      { src: TensorFlow, alt: "TensorFlow", title: "TensorFlow", className: "w-12 max-md:w-6" },
      { src: Arduino, alt: "Arduino", title: "Arduino", className: "w-14 max-md:w-7" },
      {
        src: CircuitDesign,
        alt: "Circuit Design",
        title: "Circuit Design",
        className: "w-12 max-md:w-6",
      },
      { src: Onshape, alt: "Onshape", title: "Onshape", className: "w-12 max-md:w-6" },
    ],
  },
  {
    title: "Currently Exploring",
    skills: [
      { src: ESP32, alt: "ESP32", title: "ESP32", className: "w-14 max-md:w-7" },
      { src: Modtran, alt: "MODTRAN", title: "MODTRAN", className: "w-12 max-md:w-6" },
      {
        src: Anthropic,
        alt: "Anthropic API",
        title: "Anthropic API",
        className: "w-12 max-md:w-6",
      },
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex h-screen max-w-containerSmall flex-col justify-center gap-8 py-96 mdl:px-10 lgl:py-32"
    >
      <div className="flex items-center gap-10 pt-20 sml:pt-5">
        <SectionTitle titleNumber="0.1" titleName="About me" />
      </div>

      {/* CONTENT CONTAINER - GRID */}
      <div className="grid auto-rows-auto grid-cols-6">
        {/* Text block + mobile profile image */}
        <div className="col-start-1 col-end-5 row-span-2 text-base font-medium text-textDark max-mdl:col-span-full">
          <div className="text-xs sm:text-sm sml:text-base mdl:w-11/12">
            <div className="float-right py-6 pl-5">
              <div className="relative">
                <Image
                  className="left-0 top-0 w-24 rounded-full border-2 border-textGreen sm:w-32 sml:w-40 md:w-48 mdl:hidden"
                  src={profileImgCircle}
                  alt="profilepicture"
                />
                <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-textGreen/20 duration-300 hover:bg-transparent sm:h-32 sm:w-32 sml:h-40 sml:w-40 md:h-48 md:w-48 mdl:hidden" />
              </div>
            </div>
            <p>
              Hello there, I&apos;m a <span className="text-textGreen">student</span> based in
              Irvine, California.
              <br />
              <br />I have <span className="text-textGreen">4+ years </span> of experience in the
              engineering industry, including stints at various startups, labs, and companies.
              <br />
              <br />
              Recently, I had the incredible opportunity to join a{" "}
              <span className="text-textGreen">research lab</span> as a researcher and analyst of
              Hyperspectral data. Immersing myself in research practices, with a specific focus on{" "}
              <span className="text-textGreen">
                early wildfire detection and image pixel analysis.
              </span>
              <br />
              <br />
              <em>
                Currently working with Professor Healey and the ICVL group to increase outreach and
                funding.
              </em>
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="group relative col-start-5 col-end-7 row-start-1 row-end-3 grid place-items-center max-mdl:hidden">
          <div className="absolute -left-6 -top-6 h-52 w-52 rounded-full lgl:h-80 lgl:w-80">
            <Image
              className="fill absolute z-30 h-52 w-52 rounded-full border-2 border-textGreen object-cover lgl:h-80 lgl:w-80"
              src={profileImgCircle}
              alt="Dhruv Panchagatti - Profile picture"
            />
            <div className="absolute left-0 top-0 z-30 hidden h-52 w-52 rounded-full bg-textGreen/20 duration-300 group-hover:bg-transparent mdl:inline-block lgl:h-80 lgl:w-80" />
            <div className="absolute left-6 top-6 z-10 hidden h-52 w-52 rounded-full border-2 border-textGreen transition-transform duration-100 group-hover:-translate-x-6 group-hover:-translate-y-6 mdl:inline-block lgl:h-80 lgl:w-80" />
          </div>
        </div>

        {/* Skills Section (Hard Skills + Exploring) */}
        <div className="col-span-full row-start-3 pt-5">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {skillGroups.map(({ title, skills }) => (
              <div key={title}>
                <p className="pb-5 text-center font-codeFont text-sm font-bold text-textDark lg:text-base">
                  {title}:
                </p>
                <ul className="flex flex-row flex-wrap justify-center gap-5 md:gap-10">
                  {skills.map(({ src, alt, title, className }) => (
                    <SkillIcon
                      key={title}
                      src={src}
                      alt={alt}
                      title={title}
                      className={className}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;