"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";

interface CapstoneCardProps {
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
  layout?: "default" | "reversed";
}

const ProjectLinks = ({
  gitLink,
  youtubeLink,
  liveLink,
}: {
  gitLink: string;
  youtubeLink?: string;
  liveLink: string;
}) => (
  <div className="flex gap-4 text-2xl">
    {gitLink && (<a className="duration-300 hover:text-textGreen" href={gitLink} target="_blank" rel="noreferrer"><RiGithubLine /></a>)}
    {youtubeLink && (<a className="duration-300 hover:text-textGreen" href={youtubeLink} target="_blank" rel="noreferrer"><SlSocialYoutube /></a>)}
    {liveLink && (<a className="duration-300 hover:text-textGreen" href={liveLink} target="_blank" rel="noreferrer"><FiExternalLink /></a>)}
  </div>
);

const ProjectImage = ({
  image,
  liveLink,
}: {
  image: CapstoneCardProps["image"];
  liveLink: string;
}) => {
  const content = (
    <div>
      <Image {...image} className="h-full w-full rounded-lg object-contain" alt={image.alt} />
      <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-imageOverlay/20 duration-300 group-hover:bg-transparent md:inline-block"></div>
    </div>
  );

  const sharedClass = "group relative h-full w-full justify-center align-middle sml:w-1/2";

  return liveLink ? (
    <a className={sharedClass} href={liveLink} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <div className={sharedClass}>{content}</div>
  );
};

const CapstoneCard = ({
  title,
  description,
  image,
  imageUrl,
  gitLink,
  youtubeLink,
  liveLink,
  techStackList,
  layout = "default",
}: CapstoneCardProps) => {
  const isReversed = layout === "reversed";
  const divStyle = { backgroundImage: `url(${imageUrl})` };

  return (
    <div>
      <div className="mx-auto mt-10 flex max-w-containerSmall flex-col items-center justify-between gap-28">
        {isReversed ? (
          <div className="mr-10 hidden flex-col gap-2 sml:flex-row-reverse mdl:flex">
            <ProjectImage image={image} liveLink={liveLink} />
            <div className="z-10 flex w-full flex-col gap-6 sml:w-1/2 sml:justify-between md:-mr-8">
              <p className="font-titleFont text-sm tracking-wide text-textGreen">Featured Project</p>
              <h3 className="text-2xl font-bold hover:text-textGreen">{title}</h3>
              <p className="rounded-md bg-[#112240] px-5 py-5 text-sm md:text-base">{description}</p>
              <ul className="flex gap-2 font-titleFont text-xs tracking-wide text-textGreen md:gap-5 md:text-sm">
                {techStackList.map((item, i) => (<li key={i}>{item}</li>))}
              </ul>
              <ProjectLinks gitLink={gitLink} youtubeLink={youtubeLink} liveLink={liveLink} />
            </div>
          </div>
        ) : (
          <div className="ml-16 hidden flex-col gap-6 sml:flex-row mdl:flex">
            <ProjectImage image={image} liveLink={liveLink} />
            <div className="z-10 flex w-full flex-col items-end gap-6 text-right sml:w-1/2 sml:justify-between md:-ml-8">
              <p className="font-titleFont text-sm tracking-wide text-textGreen">Featured Project</p>
              <h3 className="text-2xl font-bold hover:text-textGreen">{title}</h3>
              <p className="rounded-md bg-[#112240] p-2 text-sm md:p-6 md:text-base">{description}</p>
              <ul className="flex justify-between gap-2 font-titleFont text-xs tracking-wide text-textGreen md:gap-5 md:text-sm">
                {techStackList.map((item, i) => (<li key={i}>{item}</li>))}
              </ul>
              <ProjectLinks gitLink={gitLink} youtubeLink={youtubeLink} liveLink={liveLink} />
            </div>
          </div>
        )}

        <div className="mx-4 flex-col rounded-lg bg-cover bg-no-repeat shadow-inner hover:shadow-xl mdl:hidden" style={divStyle}>
          <div className="z-10 mx-3 flex w-fit flex-col gap-6 px-5">
            <p className="pt-5 font-titleFont text-sm tracking-wide text-textGreen">Featured Project</p>
            <h3 className="font-titleFont text-2xl font-bold hover:text-textGreen">{title}</h3>
            <p className="-translate-x-2 rounded-md bg-black bg-opacity-50 px-2 py-3 text-xs sml:text-base">{description}</p>
            <ul className="flex gap-5 font-codeFont text-xs tracking-wide text-textGreen">
              {techStackList.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
            <div className="flex items-end gap-4 pb-10 text-right text-2xl">
              <ProjectLinks gitLink={gitLink} youtubeLink={youtubeLink} liveLink={liveLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapstoneCard;