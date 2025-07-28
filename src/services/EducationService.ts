import { Education } from "../Dto/Education";

export async function getEducation(): Promise<Education[]> {
  return [
    {
      id: "1",
      institution: "Example University",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      startDate: "2018-09",
      endDate: "2022-05",
      description: "Graduated with honors",
      location: "New York, USA",
    },
  ];
}
