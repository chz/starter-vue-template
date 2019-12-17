import Vue from 'vue'
import { Pagination, Button, Input, DatePicker } from 'ant-design-vue'
import { LocaleProvider } from 'ant-design-vue'
Vue.component(LocaleProvider.name, LocaleProvider)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component('a-date-picker', DatePicker)
