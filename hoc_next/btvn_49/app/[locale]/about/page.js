import AboutSection from "@/components/about/AboutSection";

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("about");

  return {
    title: t("tab-title-about"),
  };
}

const About = () => {
  const t = useTranslations("about");
  return (
    <div>
      <AboutSection />
    </div>
  );
};

export default About;
