import { Typography } from "@mui/material";
import { Section } from "./StyledComponents";

interface AboutSectionProps {
  about: string;
}

function AboutSection({ about }: AboutSectionProps) {
  return (
    <Section>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.25rem" },
          lineHeight: 1.8,
          maxWidth: "800px",
        }}
      >
        {about}
      </Typography>
    </Section>
  );
}

export default AboutSection;
