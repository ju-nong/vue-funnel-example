<template>
    <div>
        <h3>Home</h3>
        <router-link to="/pay">결제하기</router-link>
    </div>
</template>

<script setup lang="ts">
import { useRouter, onBeforeRouteLeave } from "vue-router";

const router = useRouter();

onBeforeRouteLeave((to, from, next) => {
    console.log(to, from);
    if (to.name === "PAY-COMPLETED") {
        next(false);
    } else {
        next();
    }
});

// router.beforeEach((to, from, next) => {
//     if (from.name === "" && to.name === "PAY-COMPLETED") {
//         next(false);
//     } else {
//         next();
//     }
// });
</script>

<style lang="scss"></style>
