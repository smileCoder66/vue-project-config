/*
 * @Description: 组件快速生成脚本
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
  <div class="${dirName}-com">
    {{data.componentName}}
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  // import {  } from "@/components" // 组件
  @Component({})

  export default class About extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    created() {
      //
    }
    
    mounted() {
      //
    }
  }
</script>

<style lang="scss">
  
</style>
`

fs.mkdirSync(`${basePath}/components/${dirName}`)
process.chdir(`${basePath}/components/${dirName}`)
fs.writeFileSync(`${dirName}.vue`, VueTep)

process.exit(0)