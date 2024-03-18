const tool = [
    {
        path: "/tool",
        name: "tool",
        component: () => import("@/views/ToolView.vue"),
    },
    {
        path: "/tool/windowsBlue",
        name: "windowsBlue",
        component: () => import("@/components/tool/windowsBlue.vue"),
    },
    {
        path: "/tool/discordEmoji",
        name: "discordEmoji",
        component: () => import("@/components/tool/discordEmoji.vue"),
    },
];

export default tool;