import { Fade } from "@mui/material";
import { Certification } from "../../Dto/Certification";
import { Education } from "../../Dto/Education";
import { Language } from "../../Dto/Language";
import EducationPanel from "./Panels/EducationPanel";
import {
  Section,
  SubtleTab,
  TabPanel,
  SectionTitle,
  OptionalSectionsContainer,
  OptionalTabs,
  TabLabelContainer,
  TabCountBadge,
} from "./StyledComponents";
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
  const hasContent =
    education.length > 0 || certifications.length > 0 || languages.length > 0;

  if (!hasContent) {
    return null;
  }

  return (
    <Section>
      <SectionTitle>Additional Information</SectionTitle>
      <OptionalSectionsContainer>
        <OptionalTabs value={activeTab} onChange={handleTabChange}>
          {education?.length > 0 && (
            <SubtleTab
              label={
                <TabLabelContainer>
                  <TabCountBadge>{education.length}</TabCountBadge>
                  Education
                </TabLabelContainer>
              }
              value="education"
            />
          )}
          {certifications?.length > 0 && (
            <SubtleTab
              label={
                <TabLabelContainer>
                  <TabCountBadge>{certifications.length}</TabCountBadge>
                  Certifications
                </TabLabelContainer>
              }
              value="certifications"
            />
          )}
          {languages?.length > 0 && (
            <SubtleTab
              label={
                <TabLabelContainer>
                  <TabCountBadge>{languages.length}</TabCountBadge>
                  Languages
                </TabLabelContainer>
              }
              value="languages"
            />
          )}
        </OptionalTabs>

        <Fade in={activeTab === "education"} timeout={300}>
          <TabPanel
            sx={{ display: activeTab === "education" ? "block" : "none" }}
          >
            <EducationPanel education={education} />
          </TabPanel>
        </Fade>

        <Fade in={activeTab === "certifications"} timeout={300}>
          <TabPanel
            sx={{ display: activeTab === "certifications" ? "block" : "none" }}
          >
            <CertificationsPanel certifications={certifications} />
          </TabPanel>
        </Fade>

        <Fade in={activeTab === "languages"} timeout={300}>
          <TabPanel
            sx={{ display: activeTab === "languages" ? "block" : "none" }}
          >
            <LanguagesPanel languages={languages} />
          </TabPanel>
        </Fade>
      </OptionalSectionsContainer>
    </Section>
  );
}

export default OptionalSections;
