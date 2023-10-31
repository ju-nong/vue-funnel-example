<template>
    <div>
        계좌결제 완료! <br /><br />
        <button @click="router.back">홈으로</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "../../utils";

const { router } = useRouter();
</script>

<style lang="scss"></style>
