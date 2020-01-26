# nativescript-vue 測試

## 注意事項
*  目前用 vue-devtools 會有 TypeError: Cannot read property 'on' of undefined 問題
*  vuex 需在 main.js 加上```Vue.prototype.$store = store``` 才能正常運行，否則會有 $store undefined error

## Windows 環境下安裝
*  參考此步驟: https://docs.nativescript.org/start/ns-setup-win#system-requirements
*  安裝 chocolatey : https://chocolatey.org/docs/installation

## 建立專案
*  參考此步驟: https://nativescript-vue.org/en/docs/getting-started/quick-start

``` bash
npm install -g @vue/cli @vue/cli-init

vue init nativescript-vue/vue-cli-template <project-name>

cd <project-name>

npm install

tns preview
# or
tns run
```

## 建立 apk
*  要先設置好上面的環境安裝: https://docs.nativescript.org/start/ns-setup-win#system-requirements
``` bash
tns build android
```

## vuex
*  vuex 需在 main.js 加上```Vue.prototype.$store = store``` 才能正常運行，否則會有 $store undefined error
*  即使用 computed 去取得 state 還是沒辦法即時更新，但可以在 data() 先設個變數，在用方法去給它值

template  
```
<template>
    <Page>
        <ActionBar title="Vuex test"/>
        <StackLayout>
            <Button text="increment" @tap="increment()" />
            <Label :text="counter" />
        </StackLayout>
    </Page>
</template>
```
script  
```
export default {
    data() {
        return {
            msg: 'Hello World',
            counter: 0,
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
            this.counter = this.$store.getters.counter
        }
    }
}
```
store.js
```
export default new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        counter(state) {
            return state.counter
        }
    },
    mutations: {
        increment: (state) => {
            console.log("state.counter", state.counter)
            state.counter++
        }
    },
    actions: {
        incrementAction: ({ commit }) => {
            commit('increment')
        }
    }
});

```