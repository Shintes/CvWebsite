import { Certification } from "./Certification";
import { Education } from "./Education";
import { Experience } from "./ExperienceDto";
import { Language } from "./Language";
import { Project } from "./ProjectDto";
import { Skill } from "./SkillDto";

export interface PersonalInformation {
  name: string;
  title: string;
  about: string;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  education: Education[];
  languages: Language[];
  certifications: Certification[];
  location: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}
  