import { RouteRecordRaw } from "vue-router";

import _home from "./_home";
import _pay from "./_pay";

const routes: RouteRecordRaw[] = [..._home, ..._pay];

export default routes;
