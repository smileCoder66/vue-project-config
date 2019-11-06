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
  <div class="${dirName}-view"></div>
</template>

<script>
//import moduleName from 'module';

export default {
  data () {
    return {
      name:'${dirName}'
    }
  },

  created () {
    //
  },
  mounted () {
    //
  },
  
  watch: {}
}
</script>

<style lang="scss">
</style>
`

fs.mkdirSync(`${basePath}/views/${dirName}`) // mkdir
process.chdir(`${basePath}/views/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue 

// process.chdir(`${basePath}/api`); // cd api
// fs.writeFileSync(`${dirName}.js`, apiTep) // api

process.exit(0)


