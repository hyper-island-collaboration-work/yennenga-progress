import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        // HERO
        hero: "Create conditions for all individuals to reach their full potential.",
        // INFORMATION SECTIONS
        informationSection1Title:
          "Pathways to Progress: Uniting for Human Rights and Sustainable Development",
        informationSection1Description:
          "At Yennenga Progress Sweden and Yennenga Progress Burkina Faso, our shared mission is to ensure fundamental human rights are upheld and fulfilled. We believe in the interconnectedness of all people and strive to provide opportunities for a brighter future through education, health, and infrastructure development. Our journey began in 2001 with a preschool in Nakamtenga, Burkina Faso, igniting community growth. Guided by the UN's Sustainable Development Goals, we continue to foster progress. Learn more about what we do.",
        informationSection1Button: "What we do",
      },
    },
    se: {
      translation: {
        // HERO
        hero: "Skapa förutsättningar för alla individer att nå sin fulla potential.",
        // INFORMATION SECTIONS
        informationSection1Title:
          "Vägar till framsteg: Enas för mänskliga rättigheter och hållbar utveckling",
        informationSection1Description:
          "På Yennenga Progress Sverige och Yennenga Progress Burkina Faso är vårt gemensamma uppdrag att säkerställa att grundläggande mänskliga rättigheter upprätthålls och uppfylls. Vi tror på alla människor är sammanlänkade och strävar efter att ge möjligheter för en ljusare framtid genom utbildning, hälsa och utveckling av infrastruktur. Vår resa började 2001 med en förskola i Nakamtenga, Burkina Faso, som satte igång samhällets tillväxt. Med hjälp av FN:s mål för hållbar utveckling fortsätter vi att främja framsteg.",
        informationSection1Button: "Vad vi gör",
      },
    },
  },
});

export default i18n;
