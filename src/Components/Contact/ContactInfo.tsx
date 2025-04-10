import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

interface ContactInfoItem {
  icon: React.ReactNode;
  text: string;
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: <EmailIcon sx={{ color: "primary.main" }} />,
    text: "your.email@example.com",
  },
  {
    icon: <PhoneIcon sx={{ color: "primary.main" }} />,
    text: "+1 234 567 890",
  },
];

const ContactInfo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {contactInfo.map((info, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {info.icon}
          <Typography>{info.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ContactInfo;
