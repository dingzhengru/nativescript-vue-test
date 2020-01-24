<template>
    <Page>
        <ActionBar title="Title"/>
        <StackLayout>
            <Label text="Route" />
            <Button 
                text="methods to About (AboutPage)" 
                @tap="goAboutPage" />
            
            <Label text="TextField" />
            <TextField 
                v-model="textFieldValue"
                hint="Enter text..." />
            <Label v-model="textFieldValue" />
            <Label text="SearchBar" />
            <SearchBar 
                hint="Search hint......" 
                v-model="searchValue"
                @textChange="changeValue(searchValue)" 
                @submit="submitSearch(searchValue)" />
            <Label v-model="searchValue" />
        </StackLayout>
    </Page>
</template>

<script>
import About from './About.vue'

export default {
    data() {
        return {
            textFieldValue: 'TextField here',
            searchValue: 'defaultSearchValue'
        }
    },
    methods: {
        goAboutPage() {
            this.$navigateTo(About);
        },
        changeValue(searchValue) {
            // 當搜尋值變更時就會觸發此方法
            console.log('changeValue', searchValue)
        },
        submitSearch(searchValue) {
            // 送出時觸發此方法
            console.log('searchValue', searchValue)
        }
    }
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
</style>
