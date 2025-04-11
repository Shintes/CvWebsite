import { Typography, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";

const PersonalInterests: React.FC = () => {
  const interests = [
    { icon: "🎨", label: "Art Enthusiast" },
    { icon: "🎵", label: "Concert Lover" },
    { icon: "✈️", label: "Travel Explorer" },
    { icon: "📚", label: "Book Worm" },
    { icon: "🎬", label: "Film Buff" },
    { icon: "🍳", label: "Foodie" },
    { icon: "🏃", label: "Fitness" },
    { icon: "🎮", label: "Gaming" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          fontWeight: 700,
          marginBottom: 2,
          color: "text.primary",
        }}
      >
        Beyond Code
      </Typography>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
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
          When I'm not crafting elegant code, I'm exploring the vibrant world of
          art, attending live concerts, and discovering new places through
          travel. I'm an avid reader, always diving into new books that expand
          my horizons. These passions fuel my creativity and provide fresh
          perspectives that I bring back to my work. Whether it's getting lost
          in a good book, exploring new destinations, or experiencing the energy
          of live music, I believe in maintaining a well-rounded life that
          inspires both personal and professional growth.
        </Typography>
      </motion.div>

      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        useFlexGap
        sx={{ mb: 4 }}
      >
        {interests.map((interest, index) => (
          <motion.div
            key={interest.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          >
            <Chip
              icon={<span>{interest.icon}</span>}
              label={interest.label}
              sx={{
                backgroundColor: "rgba(33, 150, 243, 0.1)",
                color: "primary.main",
                fontWeight: 500,
                cursor: "pointer",
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

export default PersonalInterests;
