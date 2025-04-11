import { Container, Grid } from "@mui/material";
import { useState } from "react";
import BlogHeader from "./BlogHeader";
import PostCard from "./BlogCard";
import CategoryTabs from "./CategoryTabs";
import placeholderImage from "../../assets/placeholder.jpg";

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
      <BlogHeader
        title="Blog"
        subtitle="Insights, tutorials, and thoughts on web development and technology."
      />

      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <Grid container spacing={4}>
        {featuredPost && (
          <Grid size={{ xs: 12 }}>
            <PostCard post={featuredPost} isFeatured={true} />
          </Grid>
        )}

        {regularPosts.map((post, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex" }}
          >
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;
