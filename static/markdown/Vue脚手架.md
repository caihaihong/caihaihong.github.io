#### Vue脚手架

将html、js、css写到一个后缀名.vue的文件中，区分这三种类型是通过<template>、<script>、<style>来区分，这个.vue文件在打包的过程中会被转换成浏览器能识别的传统html、js、css。

![enter image description here](https://images2015.cnblogs.com/blog/1127793/201705/1127793-20170508205435738-759749042.png)
2.使用vue.js官方提供的命令行工具，可以让我们把关注点放在项目功能的实现上。

3.需要安装依赖（cnpm install），可进入package.json中查看。比如vue-loader，其作用就是解析vue文件使浏览器能识别。

4.页面的生成，通过webpack打包工具将.vue文件打包成html、js、css，其中js就是一个新的vue对象。