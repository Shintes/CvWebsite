import { Certification } from "../Dto/Certification";

export async function getCertifications(): Promise<Certification[]> {
  // TODO: Replace with actual API call
  return [
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "2023-01",
      expirationDate: "2026-01",
      credentialId: "AWS123456",
      credentialUrl: "https://aws.amazon.com/certification",
    },
  ];
}
