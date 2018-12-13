## **注意**

>1. 打包前请务必配置根目录的`ecosystem.config.js`中的`PROJECT_PATH` `host` `key` 和`repo` 字段,否则部署不成功.
>2. 确保服务器能够正常访问git仓库,否则git clone不成功,
>3. 确保服务器安装了node 和 npm.
>4. 确保服务器开启免密登录,并且能够通过ssh免密成功登录服务器(方法请自行谷歌)


------

确保2个命令正常
```
node -v
npm -v
```  
---
### 项目初始化安装依赖
```
npm install
```

### 项目初始化安装依赖-使用淘宝源
```
npm install --registry=https://registry.npm.taobao.org
```

### 启动开发服务
```
npm run serve
```

### 打包部署
```
npm run deploy
```

### eslint 修复
```
npm run lint
```
