import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContactHeader from "./ContactHeader";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 8,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: "1200px", width: "100%" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <ContactHeader
            title="Hey, let's chat and get to know each other!"
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
          />
          <SocialLinks />
          <ContactInfo />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
