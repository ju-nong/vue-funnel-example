import { RouteRecordRaw } from "vue-router";

import { Main, Completed, Step1, Step2, Step3, Step4 } from "../../pages/pay";

const routes: RouteRecordRaw[] = [
    {
        path: "/pay",
        name: "PAY",
        component: Main,
        meta: {
            pageName: "계좌 결제",
        },
    },
    {
        path: "/pay/completed",
        name: "PAY-COMPLETED",
        component: Completed,
        meta: {
            pageName: "계좌 결제 완료",
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
        name: "PAY-ACCOUNT",
        component: Step2,
        meta: {
            pageName: "계좌 정보 입력",
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
        path: "/pay/register",
        name: "PAY-REGISTER",
        component: Step4,
        meta: {
            pageName: "계좌 등록 완료",
        },
    },
];

export default routes;
