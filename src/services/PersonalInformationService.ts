import { PersonalInformation } from "../Dto/PersonalInformation";

export const getPersonalInformation =
  async (): Promise<PersonalInformation> => {
    // In a real application, this would be an API call
    return {
      name: "John Doe",
      title: "Full Stack Developer",
      about:
        "Passionate developer with experience in building web applications using modern technologies. Skilled in React, Node.js, and cloud services.",
      email: "john.doe@example.com",
      location: "San Francisco, CA",
      phone: "+1 (555) 123-4567",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    };
  };
