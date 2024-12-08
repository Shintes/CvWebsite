import { Tabs, Fade } from "@mui/material";
import { Certification } from "../Dto/Certification";
import { Education } from "../Dto/Education";
import { Language } from "../Dto/Language";
import EducationPanel from "./Panels/EducationPanel";
import { Section, SubtleTab, TabPanel } from "./StyledComponents";
import CertificationsPanel from "./Panels/CertificationsPanel";
import LanguagesPanel from "./Panels/LanguagesPanel";

interface OptionalSectionsProps {
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  activeTab: string | false;
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
}

function OptionalSections({
  education,
  certifications,
  languages,
  activeTab,
  handleTabChange,
}: OptionalSectionsProps) {
  return (
    <Section>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          minHeight: "48px",
          mb: 2,
          "& .MuiTabs-indicator": { display: "none" },
          "& .MuiTabs-flexContainer": {
            gap: "8px",
          },
        }}
      >
        {education?.length > 0 && (
          <SubtleTab label="Education" value="education" />
        )}
        {certifications?.length > 0 && (
          <SubtleTab label="Certifications" value="certifications" />
        )}
        {languages?.length > 0 && (
          <SubtleTab label="Languages" value="languages" />
        )}
      </Tabs>

      <Fade in={activeTab === "education"}>
        <TabPanel
          sx={{ display: activeTab === "education" ? "block" : "none" }}
        >
          <EducationPanel education={education} />
        </TabPanel>
      </Fade>

      <Fade in={activeTab === "certifications"}>
        <TabPanel
          sx={{
            display: activeTab === "certifications" ? "block" : "none",
          }}
        >
          <CertificationsPanel certifications={certifications} />
        </TabPanel>
      </Fade>

      <Fade in={activeTab === "languages"}>
        <TabPanel
          sx={{ display: activeTab === "languages" ? "block" : "none" }}
        >
          <LanguagesPanel languages={languages} />
        </TabPanel>
      </Fade>
    </Section>
  );
}

export default OptionalSections;
