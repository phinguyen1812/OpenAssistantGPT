"use client";
import useLanguage from "@/hooks/useLanguage";

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage();

    return (
        <div>
            <button onClick={() => changeLanguage("en")} disabled={language === "en"}>
                🇬🇧 English
            </button>
            <button onClick={() => changeLanguage("fr")} disabled={language === "fr"}>
                🇫🇷 Français
            </button>
            <button onClick={() => changeLanguage("de")} disabled={language === "de"}>
                🇩🇪 Deutsch
            </button>
        </div>
    );
}
