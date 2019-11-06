/*
 * @Description: 页面快速生成脚本
 * @Date: 2019-11-06
 * @LastEditTime: 2019-11-
*/
const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)

if (!dirName) {
    console.log('文件夹名称不能为空！')
    console.log('示例：npm run tep ${capPirName}')
    process.exit(0)
}

/**
 * @msg: vue页面模版
*/

const VueTep = `<template>
  <div class="${dirName}-view">
    {{data.componentName}}
  </div>
</template>

<script lang="ts" src="./${dirName}.ts"></script>

<style lang="scss">

</style>
`

/**
 * @msg: ts模版
*/

const tsTep = `import { Component, Vue } from 'vue-property-decorator'
// import { } from "@/components/" // 组件

@Component({})

export default class About extends Vue {  
  ${capPirName}Data = {
    pageName: '${dirName}'
  }

  created() {
    //
  }
  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
}
`

fs.mkdirSync(`${basePath}/views/${dirName}`) // mkdir
 process.chdir(`${basePath}/views/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue 
fs.writeFileSync(`${dirName}.ts`, tsTep) // ts

// process.chdir(`${basePath}/types/views`); // cd types
// fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep) // interface
 
// process.chdir(`${basePath}/api`); // cd api
// fs.writeFileSync(`${dirName}.ts`, apiTep) // api

process.exit(0)


