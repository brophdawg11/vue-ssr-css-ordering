<template>
    <div class="global about">
        <h1>This is the about page</h1>
        <router-link to="/">Go to the Home page</router-link>

        <ShowLinks />
    </div>
</template>

<script>
import ShowLinks from './ShowLinks.vue';
export default {
    name: 'About',
    components: {
        ShowLinks,
    },
};
</script>

<style>
.home {
    color: green;
}
</style>
