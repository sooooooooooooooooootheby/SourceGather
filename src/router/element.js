const tool = [
    {
        path: "/element",
        name: "element",
        component: () => import("@/views/ElementView.vue"),
    },
    {
        path: "/element/gyroCode",
        name: "gyrocode",
        component: () => import("@/components/element/gyroCode.vue"),
    },
    {
        path: "/element/font",
        name: "font",
        component: () => import("@/components/element/font.vue"),
    },
];

export default tool;
