import { RouteRecordRaw } from "vue-router";

import { Home } from "../../pages";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "HOME",
        component: Home,
        meta: {
            pageName: "홈",
        },
    },
];

export default routes;
