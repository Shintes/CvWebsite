import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Fade } from "@mui/material";

interface BlogHeaderProps {
  title: string;
  subtitle: string;
}

const BlogHeader = ({ title, subtitle }: BlogHeaderProps) => {
  const theme = useTheme();

  return (
    <Fade in timeout={1000}>
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "4px",
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: "2px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            {subtitle}
          </Typography>
        </motion.div>
      </Box>
    </Fade>
  );
};

export default BlogHeader;
