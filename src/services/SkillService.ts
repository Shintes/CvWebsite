import { Skill } from "../Dto/SkillDto";

export const getSkills = async (): Promise<Skill[]> => {
  return [
    {
      id: "1",
      name: "React",
      level: 90,
      category: "Frontend",
      icon: "react",
    },
    {
      id: "2",
      name: "TypeScript",
      level: 85,
      category: "Frontend",
      icon: "typescript",
    },
    {
      id: "3",
      name: "Node.js",
      level: 80,
      category: "Backend",
      icon: "nodejs",
    },
    {
      id: "4",
      name: "MongoDB",
      level: 75,
      category: "Database",
      icon: "mongodb",
    },
    {
      id: "5",
      name: "AWS",
      level: 70,
      category: "Cloud",
      icon: "aws",
    },
    {
      id: "6",
      name: "Docker",
      level: 65,
      category: "DevOps",
      icon: "docker",
    },
    {
      id: "7",
      name: "GraphQL",
      level: 75,
      category: "Backend",
      icon: "graphql",
    },
    {
      id: "8",
      name: "Material-UI",
      level: 85,
      category: "Frontend",
      icon: "material-ui",
    },
  ];
};
