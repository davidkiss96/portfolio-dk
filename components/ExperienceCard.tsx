import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg justify-start items-center space-y-7 flex-shrink-0 w-[350px] sm:w-[400px] md:w-[500px] xl:w-[550px] snap-center bg-[#292929] px-5 sm:px-10 py-5 sm:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full md:rounded-full xl:w-32 xl:h-32 object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl sm:text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-lg  mt-1">{experience?.company}</p>

        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 sm:ml-5 sm:text-md min-h-ful max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
