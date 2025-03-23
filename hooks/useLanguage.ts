"use client";
import { useState, useEffect } from "react";

import { translations } from "@/config/locales";

export default function useLanguage() {
    // 📌 Récupère la langue stockée dans localStorage ou utilise "en" par défaut
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage && translations[storedLanguage]) {
            setLanguage(storedLanguage);
        }
    }, []);

    // 📌 Fonction pour changer la langue et stocker dans localStorage
    const changeLanguage = (lang: string) => {
        if (translations[lang]) {
            setLanguage(lang);
            localStorage.setItem("language", lang);
        }
    };

    return { language, changeLanguage };
}
