import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  useTheme,
  Button,
  Fade,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import placeholderImage from "../../assets/placeholder.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FeaturedPostIcon from "@mui/icons-material/Star";
import { useState } from "react";

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

const blogPosts = [
  {
    title: "Getting Started with React and TypeScript",
    excerpt:
      "Learn how to set up a new React project with TypeScript and best practices for type safety.",
    image: placeholderImage,
    date: "April 15, 2024",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Web Development"],
    link: "#",
    featured: true,
    category: "Development",
  },
  {
    title: "Building Responsive UIs with Material-UI",
    excerpt:
      "A comprehensive guide to creating responsive and accessible user interfaces using Material-UI.",
    image: placeholderImage,
    date: "April 10, 2024",
    readTime: "8 min read",
    tags: ["Material-UI", "CSS", "Responsive Design"],
    link: "#",
    featured: false,
    category: "Design",
  },
  {
    title: "State Management in Modern React Applications",
    excerpt:
      "Exploring different state management solutions and when to use them in your React applications.",
    image: placeholderImage,
    date: "April 5, 2024",
    readTime: "10 min read",
    tags: ["React", "State Management", "Redux"],
    link: "#",
    featured: false,
    category: "Development",
  },
  {
    title: "The Future of Web Development",
    excerpt:
      "A look into emerging technologies and trends that will shape the future of web development.",
    image: placeholderImage,
    date: "April 1, 2024",
    readTime: "7 min read",
    tags: ["Web Development", "Future", "Technology"],
    link: "#",
    featured: false,
    category: "Technology",
  },
];

const categories = ["All", "Development", "Design", "Technology"];

function Blog() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === "All" || post.category === selectedCategory
  );

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
              Blog
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: "600px", mx: "auto" }}
            >
              Insights, tutorials, and thoughts on web development and
              technology.
            </Typography>
          </motion.div>
        </Box>
      </Fade>

      <Box sx={{ mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-indicator": {
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            },
          }}
        >
          {categories.map((category) => (
            <Tab
              key={category}
              label={category}
              value={category}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                "&.Mui-selected": {
                  color: theme.palette.primary.main,
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {featuredPost && (
          <Grid size={{ xs: 12 }} component="div">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FeaturedBlogCard>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <StyledCardMedia
                      image={featuredPost.image}
                      sx={{ height: { xs: 240, md: "100%" } }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      flex: 1,
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                      <Chip
                        icon={<FeaturedPostIcon />}
                        label="Featured"
                        color="primary"
                        size="small"
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <CalendarMonthIcon fontSize="small" />
                        {featuredPost.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <AccessTimeIcon fontSize="small" />
                        {featuredPost.readTime}
                      </Typography>
                    </Stack>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2"
                      sx={{
                        fontWeight: 600,
                        transition: "color 0.3s ease-in-out",
                        mb: 2,
                      }}
                    >
                      {featuredPost.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ mb: 3, fontSize: "1.1rem" }}
                    >
                      {featuredPost.excerpt}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}
                    >
                      {featuredPost.tags.map((tag, tagIndex) => (
                        <TagChip key={tagIndex} label={tag} size="small" />
                      ))}
                    </Box>
                    <Button
                      variant="outlined"
                      color="primary"
                      href={featuredPost.link}
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
              </FeaturedBlogCard>
            </motion.div>
          </Grid>
        )}

        {regularPosts.map((post, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <BlogCard sx={{ width: "100%" }}>
                <StyledCardMedia
                  image={post.image}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
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
                    variant="h5"
                    component="h2"
                    sx={{
                      fontWeight: 600,
                      transition: "color 0.3s ease-in-out",
                      mb: 2,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    {post.excerpt}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}
                  >
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
              </BlogCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;
