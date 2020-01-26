<template>
    <Page>
        <ActionBar title="Vuex test"/>
        <StackLayout>
            <Button text="increment" @tap="increment()" />
            <Label :text="counter" />
        </StackLayout>
    </Page>
</template>

<script >
export default {
    data() {
        return {
            msg: 'Hello World',
            counter: 0,
        }
    },
    computed: {
        getCounter() {
            return this.$store.getters.counter
        }
    },
    methods: {
        increment() {
            // this.$store.commit('increment')
            this.$store.dispatch('incrementAction')
            this.counter = this.$store.getters.counter
        }
    }
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
