import { RouteRecordRaw } from "vue-router";

import { Main, Step1, Step2, Step3, Step4 } from "../../pages/pay";

const routes: RouteRecordRaw[] = [
    {
        path: "/pay",
        name: "PAY",
        component: Main,
        meta: {
            pageName: "계좌결제",
        },
    },
    {
        path: "/pay/bank",
        name: "PAY-BANK",
        component: Step1,
        meta: {
            pageName: "은행 선택",
        },
    },
    {
        path: "/pay/account",
        name: "PAY",
        component: Step2,
        meta: {
            pageName: "계좌정보 입력",
        },
    },
    {
        path: "/pay/auth",
        name: "PAY-AUTH",
        component: Step3,
        meta: {
            pageName: "계좌 인증",
        },
    },
    {
        path: "/pay/completed",
        name: "PAY",
        component: Step4,
        meta: {
            pageName: "계좌 등록 완료",
        },
    },
];

export default routes;
