<template>
  <div>
    <div>
      <p>{{ msg }}</p>
    </div>
    <!-- 字符串连接 -->
    <p>{{ msg + "官网地址：www.runoob.com" }}</p>
    <!-- 字符串反转 -->
    <p>
      {{
        msg
          .split("")
          .reverse()
          .join("")
      }}
    </p>
    <div v-html="message"></div>
    <input v-model="msg" />
    <div id="app">
      <ul id="example-2">
        <li v-for="(item, index) in items" :key="index">
          {{ parentMessage }} - {{ $index }} - {{ item.message }}
        </li>
      </ul>
    </div>
    <ol>
      <li v-for="(site, index) in sites" :key="index">
        {{
          site.name
            .split("")
            .reverse()
            .join("")
        }}
      </li>
    </ol>
    <div v-if="Math.random() > 0.5">
      随机数大于 0.5
    </div>
    <div v-else>
      随机数不大于 0.5
    </div>
    <div>
      <p>{{ msg }}</p>
      <p>{{ msg | uppercase }}</p>
      <p>{{ msg | reverse | uppercase }}</p>
    </div>
    <input v-model="phoneNumber" />
    <div>{{ phoneNumber | phoneStar }}</div>

    <p>这是index页面</p>
    <p @click="loadPage('Index')">Index</p>
    <p @click="loadPage('About')">About</p>
    <p @click="loadPage('Product')">Product</p>
    <div>价格：{{ price | formatMoney }}</div>
    <div>订单状态：{{ orderStatus | statusName }}</div>
    <div>{{ phoneNumber | txtSub(5) }}</div>
    <div>{{ phoneNumber | txtSub2(5) }}</div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Temple',
  data: function () {
    return {
      msg: 'hello guojing',
      message: '<h1>菜鸟教程</h1>',
      parentMessage: '菜鸟教程官网',
      items: [{ message: 'www.runoob.com' }, { message: 'www.runoob.com' }],
      sites: [{ name: 'Runoob' }, { name: 'Google' }, { name: 'Taobao' }],
      phoneNumber: '15260227699',
      price: 95,
      orderStatus: 10
    }
  }
}
Vue.filter('reverse', function (value) {
  return value
    .split('')
    .reverse()
    .join('')
})
</script>

<style scoped></style>
