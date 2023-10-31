<template>
    <TheHeader />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { TheHeader } from "./components";
</script>

<style lang="scss" scoped>
p {
    font-size: 22px;
}
</style>
