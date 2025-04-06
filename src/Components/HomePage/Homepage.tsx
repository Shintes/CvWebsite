import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Container, Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PersonalInformation } from "../../Dto/PersonalInformation";
import { Project } from "../../Dto/ProjectDto";
import { Skill } from "../../Dto/SkillDto";
import { getPersonalInformation } from "../../services/PersonalInformationService";
import { getProjects } from "../../services/ProjectService";
import { getSkills } from "../../services/SkillService";
import HeroSection from "./HeroSection";
import AboutSectionComponent from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import OptionalSections from "./OptionalSections";
import ConnectSection from "./ConnectSection";
import { getCertifications } from "../../services/CertificationService";
import { getEducation } from "../../services/EducationService";
import { getLanguages } from "../../services/LanguageService";
import { Certification } from "../../Dto/Certification";
import { Education } from "../../Dto/Education";
import { Language } from "../../Dto/Language";

const MinimalContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  color: theme.palette.text.primary,
}));

function HomePage() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInformation | null>(
    null
  );
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [activeTab, setActiveTab] = useState<string | false>(false);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [info, projs, skls, edu, certs, langs] = await Promise.all([
          getPersonalInformation(),
          getProjects(),
          getSkills(),
          getEducation(),
          getCertifications(),
          getLanguages(),
        ]);
        setPersonalInfo(info);
        setProjects(projs);
        setSkills(skls);
        setEducation(edu);
        setCertifications(certs);
        setLanguages(langs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!personalInfo) {
    return null;
  }

  const { name, title, about } = personalInfo;
  const skillsData = skills;

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <MinimalContainer>
        <HeroSection name={name} title={title} about={about} />
        <AboutSectionComponent about={about} />
        <SkillsSection skills={skillsData} />
        <ProjectsSection projects={projects} />
        <OptionalSections
          education={education}
          certifications={certifications}
          languages={languages}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />
        <ConnectSection
          email={personalInfo.email}
          linkedin={personalInfo.linkedin}
          github={personalInfo.github}
          location={personalInfo.location}
        />
      </MinimalContainer>
    </Box>
  );
}

export default HomePage;
