import { Language } from "../Dto/Language";

export async function getLanguages(): Promise<Language[]> {
  // TODO: Replace with actual API call
  return [
    {
      id: "1",
      name: "English",
      proficiency: "Native"
    },
    {
      id: "2",
      name: "Spanish",
      proficiency: "Fluent"
    }
  ];
} 