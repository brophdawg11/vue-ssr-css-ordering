<template>
    <div id="app">
        <router-view :key="$route.path" class="o-view"/>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
.global {
    color: red;
}
</style>
