import { Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const AnimatedBackground = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:900px)");

  if (!isDesktop) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${
            theme.palette.mode === "dark"
              ? "rgba(15, 23, 42, 0.8)"
              : "rgba(255, 255, 255, 0.8)"
          })`,
          backdropFilter: "blur(10px)",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 50%, ${
            theme.palette.mode === "dark"
              ? "rgba(59, 130, 246, 0.1)"
              : "rgba(37, 99, 235, 0.15)"
          } 0%, transparent 50%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 70%, ${
            theme.palette.mode === "dark"
              ? "rgba(139, 92, 246, 0.1)"
              : "rgba(124, 58, 237, 0.15)"
          } 0%, transparent 50%)`,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 70% 30%, ${
            theme.palette.mode === "dark"
              ? "rgba(59, 130, 246, 0.05)"
              : "rgba(37, 99, 235, 0.1)"
          } 0%, transparent 50%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${
            theme.palette.mode === "dark"
              ? "rgba(59, 130, 246, 0.05)"
              : "rgba(37, 99, 235, 0.1)"
          } 0%, transparent 50%)`,
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </Box>
  );
};

export default AnimatedBackground;
