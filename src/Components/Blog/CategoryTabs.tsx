import { Box, Tabs, Tab, useTheme } from "@mui/material";

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const CategoryTabs = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 4 }}>
      <Tabs
        value={selectedCategory}
        onChange={onCategoryChange}
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
  );
};

export default CategoryTabs;
