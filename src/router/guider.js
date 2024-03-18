const guider = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: "/element",
        name: "element",
        component: () => import("@/views/ElementView.vue"),
    },
    {
        path: "/tool",
        name: "tool",
        component: () => import("@/views/ToolView.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/AboutView.vue"),
    },
];

export default guider;
