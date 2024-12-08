import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Certification } from "../../Dto/Certification";
import { LinkBox } from "../StyledComponents";

interface CertificationsPanelProps {
  certifications: Certification[];
}

function CertificationsPanel({ certifications }: CertificationsPanelProps) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "grid", gap: "2.5rem" }}>
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <LinkBox
            href={cert.url}
            target="_blank"
            sx={{
              display: "inline-block",
              mb: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              {cert.name}
            </Typography>
          </LinkBox>
          <Typography
            variant="subtitle2"
            sx={{
              color: theme.palette.text.secondary,
              letterSpacing: "0.02em",
            }}
          >
            {cert.issuer} • {cert.date}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
}

export default CertificationsPanel;
