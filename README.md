# Modern CV Website

A sleek, interactive CV/Portfolio website built with React, TypeScript, and Material-UI. Features a modern design with smooth animations, dark mode support, and multilingual capabilities.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Material UI](https://img.shields.io/badge/Material%20UI-5.x-purple)

## 🌟 Features

- **Modern UI**: Clean interface with smooth animations and transitions
- **Dark/Light Mode**: Toggle between themes with animated transitions
- **Multilingual Support**: Available in English, Spanish, and French
- **Responsive Design**: Optimized for all device sizes
- **Interactive Components**: Engaging hover effects and card interactions
- **Dynamic Content**: Easy to update personal information and projects
- **Smooth Navigation**: React Router for seamless page transitions

## 🚀 Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/cv-website.git
cd cv-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

## 🛠️ Tech Stack

- **Core**: React 18 with TypeScript
- **UI Framework**: Material-UI v5
- **Routing**: React Router v6
- **Build Tool**: Vite
- **State Management**: React Hooks
- **Styling**: MUI Styled Components

## 📁 Project Structure

```
src/
├── Components/
│   ├── HomePage/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ConnectSection.tsx
│   ├── About/
│   └── Contact/
├── Menu/
│   └── Menu.tsx
├── Dto/
│   ├── PersonalInformation.ts
│   ├── ProjectDto.ts
│   └── SkillDto.ts
└── App.tsx
```

## 📱 Main Components

- **Home**: Dynamic landing page with personal information and skills showcase
- **About**: Professional summary and technology expertise
- **Contact**: Interactive contact form with validation

## ⚙️ Configuration

Update your personal information in `src/Components/HomePage/Homepage.tsx`:

```typescript
const data: PersonalInformation = {
  name: "Your Name",
  title: "Your Title",
  about: "Your Description",
  // ... other personal details
};
```

## 🎨 Features in Detail

### Navigation

- Responsive drawer menu
- Smooth page transitions
- Language selector
- Theme toggle

### Home Page

- Hero section with name and title
- Skills visualization
- Project showcase
- Experience timeline
- Education and certifications
- Contact information

### About Page

- Professional summary
- Technology expertise cards
- Interactive elements

### Contact Page

- Validated contact form
- Real-time input feedback
- Submission handling

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/cv-website](https://github.com/yourusername/cv-website)

## 🙏 Acknowledgments

- Material-UI Team
- React Community
