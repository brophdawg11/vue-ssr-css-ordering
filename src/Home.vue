<template>
    <div class="global home">
        <h1>This is the home page</h1>
        <router-link to="/about">Go to the About page</router-link>

        <ShowLinks />
    </div>
</template>

<script>
import ShowLinks from './ShowLinks.vue';
export default {
    name: 'Home',
    components: {
        ShowLinks,
    },
};
</script>

<style>
.home {
    color: blue;
}
</style>
