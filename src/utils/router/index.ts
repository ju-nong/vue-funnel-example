import { computed } from "vue";
import { useRouter, useRoute, RouteMeta } from "vue-router";

type Meta = {
    pageName: string;
};

export default function () {
    const route = useRoute();

    return {
        router: useRouter(),
        route,
        meta: computed<RouteMeta | Meta>(() => route.meta),
    };
}
