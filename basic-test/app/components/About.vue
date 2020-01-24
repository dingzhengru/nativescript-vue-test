<template>
    <Page class="page">
        <ActionBar title="About" class="action-bar" />
        <StackLayout>
            <Button @tap="this.$navigateBack" text="Go Back"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style>
</style>