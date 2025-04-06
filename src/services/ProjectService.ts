import { Project } from "../Dto/ProjectDto";

export const getProjects = async (): Promise<Project[]> => {
  // In a real application, this would be an API call
  return [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment processing.",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://ecommerce.example.com",
      featured: true,
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A modern task management application with real-time updates and collaborative features. Built with React and Firebase.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/example/taskmanager",
      liveUrl: "https://tasks.example.com",
      featured: true,
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data using the OpenWeather API.",
      image: "https://images.unsplash.com/photo-1501691223387-dd05004093b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "TypeScript", "OpenWeather API"],
      githubUrl: "https://github.com/example/weather",
      liveUrl: "https://weather.example.com",
      featured: false,
    },
  ];
}; 