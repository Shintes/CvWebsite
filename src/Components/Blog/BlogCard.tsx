import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Stack,
  Chip,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FeaturedPostIcon from "@mui/icons-material/Star";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  isFeatured?: boolean;
}

const BlogCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  borderRadius: "16px",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
      : "linear-gradient(145deg, rgba(0,0,0,0.02), rgba(0,0,0,0.05))",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 32px rgba(0, 0, 0, 0.2)"
      : "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 40px rgba(0, 0, 0, 0.3)"
        : "0 12px 40px rgba(0, 0, 0, 0.15)",
    "& .MuiCardMedia-root": {
      transform: "scale(1.05)",
    },
    "& .MuiTypography-h5": {
      color: theme.palette.primary.main,
    },
    "& .read-more-button": {
      transform: "translateX(4px)",
    },
  },
}));

const FeaturedBlogCard = styled(BlogCard)(({ theme }) => ({
  gridColumn: "span 2",
  [theme.breakpoints.down("md")]: {
    gridColumn: "span 1",
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 240,
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  alt: "Blog Image",
});

const TagChip = styled(Chip)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    transform: "translateY(-2px)",
    boxShadow: `0 4px 8px ${theme.palette.primary.main}40`,
  },
}));

const PostCard = ({ post, isFeatured = false }: BlogCardProps) => {
  const theme = useTheme();
  const CardComponent = isFeatured ? FeaturedBlogCard : BlogCard;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <CardComponent>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: isFeatured ? "row" : "column" },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: isFeatured ? "50%" : "100%" } }}>
            <StyledCardMedia
              image={post.image}
              sx={{ height: { xs: 240, md: isFeatured ? "100%" : 240 } }}
            />
          </Box>
          <CardContent
            sx={{
              flex: 1,
              p: isFeatured ? 4 : 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              {post.featured && (
                <Chip
                  icon={<FeaturedPostIcon />}
                  label="Featured"
                  color="primary"
                  size="small"
                />
              )}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <CalendarMonthIcon fontSize="small" />
                {post.date}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <AccessTimeIcon fontSize="small" />
                {post.readTime}
              </Typography>
            </Stack>
            <Typography
              gutterBottom
              variant={isFeatured ? "h4" : "h5"}
              component="h2"
              sx={{
                fontWeight: 600,
                transition: "color 0.3s ease-in-out",
                mb: 2,
              }}
            >
              {post.title}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mb: 3, fontSize: isFeatured ? "1.1rem" : "1rem" }}
            >
              {post.excerpt}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
              {post.tags.map((tag, tagIndex) => (
                <TagChip key={tagIndex} label={tag} size="small" />
              ))}
            </Box>
            <Button
              variant="outlined"
              color="primary"
              href={post.link}
              endIcon={<ArrowForwardIcon />}
              className="read-more-button"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  transform: "translateY(-2px)",
                  boxShadow: `0 4px 8px ${theme.palette.primary.main}40`,
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Read More
            </Button>
          </CardContent>
        </Box>
      </CardComponent>
    </motion.div>
  );
};

export default PostCard;
