# nativescript-vue 測試

## 注意事項
*  目前用 vue-devtools 會有 TypeError: Cannot read property 'on' of undefined 問題


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