import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import zh from "@/i18n/language/zh.json";
import en from "@/i18n/language/en.json";
import toolZh from "@/i18n/language/tool/windowsBlue/zh.json";
import toolEn from "@/i18n/language/tool/windowsBlue/en.json";
import emojiZh from "@/i18n/language/tool/discordEmoji/zh.json";
import emojiEn from "@/i18n/language/tool/discordEmoji/en.json";
import gyroCodeZn from "@/i18n/language/element/gyroCode/zh.json";
import gyroCodeEn from "@/i18n/language/element/gyroCode/en.json";
import fontZn from "@/i18n/language/element/font/zh.json";
import fontEn from "@/i18n/language/element/font/en.json";

const messages = {
    zh: {
        ...zh,
        ...toolZh,
        ...emojiZh,
        ...gyroCodeZn,
        ...fontZn,
    },
    en: {
        ...en,
        ...toolEn,
        ...emojiEn,
        ...gyroCodeEn,
        ...fontEn,
    },
};

const i18n = createI18n({
    legacy: false,
    locale: "en", // 默认使用中文
    messages,
});

export default i18n;
