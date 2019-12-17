<template>
  <a-locale-provider :locale="ru_RU">
    <div id="app">
      <div>
        <p>
          If Ant-Design-Vue is successfully added to this project, you'll see an
          <code v-text="'<a-button>'"/>
          <code v-text="'<a-pagination>'"/>
          below
        </p>
        <a-button type="primary">Primary</a-button>
        <a-pagination size="small" :total="50" showSizeChanger showQuickJumper />
        <a-date-picker @change="onChange" />
      </div>
    </div>
  </a-locale-provider>
</template>

<script>
import ru_RU from 'ant-design-vue/lib/locale-provider/ru_RU'

export default {
  name: 'app',
  data() {
    return {
      ru_RU,
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
