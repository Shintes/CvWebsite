import { Box, Typography, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";

const CoreValues: React.FC = () => {
  const values = [
    {
      icon: "🔥",
      label: "Passion",
      description: "Driving force behind innovation",
    },
    {
      icon: "⚡",
      label: "Discipline",
      description: "Foundation of consistent excellence",
    },
    {
      icon: "🎯",
      label: "Focus",
      description: "Clear vision and determination",
    },
    {
      icon: "💪",
      label: "Resilience",
      description: "Overcoming challenges with strength",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          fontWeight: 600,
          marginTop: 6,
          marginBottom: 3,
          color: "text.primary",
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Core Values
      </Typography>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
            color: "text.secondary",
            marginBottom: 4,
            maxWidth: "800px",
            lineHeight: 1.7,
          }}
        >
          At the heart of everything I do lies an unwavering passion for
          technology and a disciplined approach to problem-solving. I believe
          that passion fuels innovation, while discipline ensures consistent
          quality and growth. Whether it's tackling complex coding challenges or
          pursuing personal interests, I bring the same level of dedication and
          attention to detail.
        </Typography>
      </motion.div>

      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        useFlexGap
        sx={{ mb: 4 }}
      >
        {values.map((value, index) => (
          <motion.div
            key={value.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Chip
              icon={<span>{value.icon}</span>}
              label={
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {value.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ display: "block", color: "text.secondary" }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              }
              sx={{
                backgroundColor: "rgba(33, 150, 243, 0.1)",
                color: "primary.main",
                fontWeight: 500,
                cursor: "pointer",
                height: "auto",
                padding: "8px 12px",
                "&:hover": {
                  backgroundColor: "rgba(33, 150, 243, 0.2)",
                },
              }}
            />
          </motion.div>
        ))}
      </Stack>
    </motion.div>
  );
};

export default CoreValues;
