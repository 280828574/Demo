<template>
    <div class="wrapper">
        <p><router-link to="/about">about</router-link></p>
        <p><router-link to="/login">login</router-link></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aaa: 'aaa'
        };
    }
};
</script>

<style lang="scss">
.index {
    width: 100%;
}
</style>
