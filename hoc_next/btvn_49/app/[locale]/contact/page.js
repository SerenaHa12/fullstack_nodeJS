import React from "react";

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("contact");

  return {
    title: t("tab-title-contact"),
  };
}

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
