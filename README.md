# vue-yy-ui

## 安装
```
npm install vue-yy-ui --save
```

### 使用
#### 一. 全局引入

    import YYUI from "vue-yy-ui"
    Vue.use(YYUI);

说明：toast等js组件已经挂在到vue原型链上，可在组件内部通过 this.$toast({...})直接调用

#### 二. 按需加载

	import {Toast,BackTop} from "vue-yy-ui";
	
	Vue.component(BackTop.name, BackTop);
	Vue.prototype.$toast=Toast;
### 其他
#### 项目地址
源码请访问 [github](https://github.com/wangminghuan/vue-yy-ui)，项目使用vue-cli3构建而成，具体使用请参见[VUE CLI3使用说明](https://cli.vuejs.org/zh/config/)

#### github项目运行说明
1. 安装依赖
    	
		npm i
2. 运行dev
	   
		npm run serve
	
3. 打包发布npm
    
		npm run build-bundle
