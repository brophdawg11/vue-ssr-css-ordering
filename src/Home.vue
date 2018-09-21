<template>
    <div class="global home">
        <h1>This is the home page</h1>
        <p>My text should be in blue</p>
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
