<template>
    <h1>hahaha</h1>
</template>
 
 
<script>
export default {
    name: 'test',
    data() {
        return {
            readme: this.md2html(md)
        };
    },
    mounted() {
        console.log(this.md2html);
    },
    computed: {
    }
};
</script>