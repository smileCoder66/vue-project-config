### First
```
经常看别人项目时总会好奇别人一些配置的用法,今天抽空浅浅地研究了下类似package.json里的一些项目构筑
用node去执行某些js 其实也就是一些进入目录读写文件之类的
```

### todo
```js
//package.json
"script":{
    ...,
    "tep":"node scripts/template",
    "com":"node scripts/com",
}
//执行 npm run tep-->进入对应目录执行template.js
/*这里我写了一些demo用来在项目内创建view和compontent
    scripts -> vue的demo
    scripts-ts -> vue+ts的demo
*/
```

#### last
```
构建时可以分的更细 类似view -> vue/js/css/api/...
还有各种做法去规范项目构建的,未完待续~
```
