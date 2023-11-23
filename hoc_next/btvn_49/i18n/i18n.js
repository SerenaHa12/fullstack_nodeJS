import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import "i18n/i18n";

// translation catalog
const resources = {
  en: {
    // namespace
    translation: {
      welcome: "Welcome to React and react-i18next",
    },
  },
  en: {
    // namespace
    translation: {
      welcome: "Xin chào",
    },
  },
};

// initialize i18next with catalog and language to use
i18n.init({
  resources,
  lng: "en",
  fallbackLng: "en",
});
