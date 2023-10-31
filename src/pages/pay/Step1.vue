<template>
    <div>
        <label for="bank1">
            <input type="radio" name="bank" id="bank1" checked />
            NH농협
        </label>
        <label for="bank2">
            <input type="radio" name="bank" id="bank2" />
            우리은행
        </label>
        <label for="bank3">
            <input type="radio" name="bank" id="bank3" />
            신한은행
        </label>
        <label for="bank4">
            <input type="radio" name="bank" id="bank4" />
            KB국민은행
        </label>
        <label for="bank5">
            <input type="radio" name="bank" id="bank5" />
            하나은행
        </label>
        <label for="bank6">
            <input type="radio" name="bank" id="bank6" />
            씨티은행
        </label>
        <router-link to="/pay/account">은행 선택 완료</router-link>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
}

a {
    grid-area: 3 / 1 / 4 / 4;
    text-align: center;
}
</style>
