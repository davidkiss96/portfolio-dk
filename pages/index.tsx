import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name}</title>
      </Head>

      <Header socials={socials} />

      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills">
        <Skills skills={skills} />
      </section>

      <section id="projects">
        <Projects projects={projects} />
      </section>

      <section id="contact">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="h-10 w-10 rounded-full bg-[#F7AB0A] filter grayscale hover:grayscale-0 cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};
