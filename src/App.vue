<template>
    <TheHeader />
    <router-view></router-view>
</template>

<script setup lang="ts">
import { TheHeader } from "./components";
</script>

<style lang="scss" scoped>
p {
    font-size: 22px;
}
</style>
