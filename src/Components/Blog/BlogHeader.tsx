import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Fade } from "@mui/material";

interface BlogHeaderProps {
  title: string;
  subtitle: string;
}

const BlogHeader = ({ title, subtitle }: BlogHeaderProps) => {
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
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              fontWeight: 700,
              marginBottom: 2,
              color: "text.primary",
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
