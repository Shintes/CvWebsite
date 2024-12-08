import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Container, Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PersonalInformation } from "../Dto/PersonalInformation";
import { Project } from "../Dto/ProjectDto";
import { Skill } from "../Dto/SkillDto";

import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import AboutSection from "./AboutSection";
import ConnectSection from "./ConnectSection";
import HeroSection from "./HeroSection";
import OptionalSections from "./OptionalSections";
import ProjectsSection from "./ProjectsSection";
import { Section, SectionTitle } from "./StyledComponents";

const data: PersonalInformation = {
  name: "John Doe",
  title: "Full Stack Developer",
  about:
    "Passionate developer with experience in building web applications using modern technologies. Skilled in React, Node.js, and cloud services.",
  experience: [
    {
      title: "Software Engineer",
      location: "San Francisco, CA",
      date: "2010 - 2011",
      description: "Developed web applications and improved user experience.",
    },
  ],
  skills: [
    { name: "JavaScript", level: 32 },
    { name: "React", level: 52 },
    { name: "Node.js", level: 12 },
  ],
  projects: [
    {
      title: "Project One",
      image:
        "https://fastly.picsum.photos/id/883/200/200.jpg?hmac=evNCTcW3jHI_xOnAn7LKuFH_YkA8r6WdQovmsyoM1IY",
      description: "Description for project one.",
      url: "https://projectone.com",
    },
    {
      title: "Project Two",
      image:
        "https://fastly.picsum.photos/id/90/200/200.jpg?hmac=zltjAmHceKvUbRnvGycGPocNMsLFu-jiTwBEcre1_pU",
      description: "Description for project two.",
      url: "https://projecttwo.com",
    },
  ],
  education: [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      date: "2008 - 2010",
      description:
        "Specialized in Artificial Intelligence and Machine Learning",
    },
    {
      degree: "Bachelor of Engineering",
      school: "MIT",
      date: "2004 - 2008",
      description: "Major in Computer Science",
    },
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Professional" },
    { name: "French", level: "Intermediate" },
  ],
  certifications: [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      url: "https://aws.amazon.com/certification",
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google",
      date: "2022",
      url: "https://cloud.google.com/certification",
    },
  ],
  location: "San Francisco, CA",
  phone: "+1 (555) 123-4567",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
};

const MinimalContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2, 1),
  maxWidth: "1200px",
  transition: "all 0.3s ease-in-out",
  color: theme.palette.text.primary,
}));

function HomePage() {
  const theme = useTheme();
  const [skillsData, setSkillsData] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string | false>(false);

  useEffect(() => {
    setName(data.name);
    setTitle(data.title);
    setAbout(data.about || "");
    setSkillsData(data.skills || []);
    setProjects(data.projects || []);
  }, []);

  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(activeTab === newValue ? false : newValue);
  };
  if (!data) {
    return (
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
          }}
        >
          <CircularProgress />
        </Box>
      </Section>
    );
  }

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <MinimalContainer>
        <HeroSection name={name} title={title} />
        <AboutSection about={about} />
        <SkillsSection skills={skillsData} />
        <ExperienceSection experience={data.experience} />
        <ProjectsSection projects={projects} onCardClick={handleCardClick} />
        <OptionalSections
          education={data.education}
          certifications={data.certifications}
          languages={data.languages}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />

        <ConnectSection
          email={data.email || ""}
          linkedin={data.linkedin || ""}
          github={data.github || ""}
          location={data.location || ""}
        />
      </MinimalContainer>
    </Box>
  );
}

export default HomePage;
