<template>
    <div class="link">
        <h3>Order of stylesheet link tags:</h3>
        <div ref="linkOrdering"></div>
    </div>
</template>

<script>
export default {
    name: 'ShowLinks',
    mounted() {
        const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
        this.$refs.linkOrdering.innerHTML =
            links.map(l => l.getAttribute('href')).join('<br>')
    },
};
</script>

<style>
</style>
