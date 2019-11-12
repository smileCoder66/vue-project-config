### First
```
主要介绍一些项目如何配置利用项目在npm指令快速生产文件及我们想要的代码覆盖;
在vscode配置 自动补全代码
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

### vscode
(vscode官方)[https://code.visualstudio.com/docs/editor/userdefinedsnippets]
```
文件-> 首选项 -> 用户代码片段 ->
javascript 配置 在我的snippets/javascript.json有示例参考
html之类或是其他语言皆可配置你想要的快捷生成代码~
```

```js
"Zxl console": {//从敲下prefix的第一个字母开始的提示
    "prefix": "log",//从l开始到log 会有提示 
    "body": [ 
        "console.log($1);"//-> 在提示选中回车或tab生成的代码片段
    ],
    "description": "Console"//描述
}

"Zxl forin": {
    "prefix": "fi",
    "body": [
        "for (const ${2:a} in ${1:obj}) {",
        "\t$0",
        "}"
    ],
    "description": "For in"
}
/*
----变量使用
    $0 $1 $2 定义光标生成后的位置,按tab会顺序跳跃
    例如:$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE -> 2019-11-11
    还有许多变量使用介绍请看官方文档.
*/
```

### last
```
构建时可以分的更细 类似view -> vue/js/css/api/...
还有各种做法去规范项目构建的,未完待续~
```
