<template>
    <div class="header">
        <button class="header-back" @click="handleBack">
            <img src="/images//ic-left-arrow.svg" alt="뒤로가기" />
        </button>
        <div class="header-title">
            <p>{{ meta.pageName }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "../utils";

const { router, meta } = useRouter();

function handleBack() {
    router.back();
    // const { next } = meta.value;

    // if (next) {

    // }
}
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    padding: 16px 24px;
    height: 50px;

    &-back {
        position: absolute;
        z-index: 10;
        height: 21px;

        img {
            height: 100%;
        }
    }

    &-title {
        text-align: center;
    }
}
</style>
