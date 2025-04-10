import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface SocialLink {
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    url: "https://linkedin.com",
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    url: "https://github.com",
    icon: <GitHubIcon fontSize="large" />,
  },
];

const SocialLinks = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
      {socialLinks.map((link, index) => (
        <IconButton
          key={index}
          href={link.url}
          target="_blank"
          sx={{
            color: theme.palette.text.primary,
            "&:hover": {
              color: theme.palette.primary.main,
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialLinks;
