import { Box, CircularProgress, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const Loading = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${
          theme.palette.mode === "dark"
            ? "rgba(15, 23, 42, 0.8)"
            : "rgba(255, 255, 255, 0.8)"
        })`,
        backdropFilter: "blur(10px)",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: theme.palette.primary.main,
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Loading;
