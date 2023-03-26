import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">Contact</h3>

      <div className="flex flex-col space-y-10 mt-20">
        <h4 className="text-md sm:text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="underline decoration-[#F7AB0A]/50"> Lets Talk.</span>
        </h4>

        <div className="space-y-5 my-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-lg sm:text-xl">{pageInfo.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <a className="text-lg sm:text-xl" href={`mailto:${pageInfo.email}`}>
              {pageInfo.email}
            </a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-lg sm:text-xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid sm:flex sm:flex-col space-y-2 w-screen px-5 sm:w-fit sm:mx-auto"
        >
          <div className="grid sm:flex sm:space-x-2 space-y-2 sm:space-y-0">
            <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />

          <textarea {...register("message")} placeholder="Message" className="contactInput h-36" />
          <button
            className="bg-[#F7AB0A] py-3 px-5 sm:px-10 sm:py-5 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
