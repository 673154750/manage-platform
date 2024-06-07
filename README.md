# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

# 后台管理系统demo

vue3 + ts + vite + vue-router + pinia + axios + echart  
使用vite要求node在16+，pnpm 8.0+

1 创建项目 pnpm create vite
pnpm i
pnpm run dev 默认5173端口

配置
启动项目自动打开浏览器 vite --open
eslint:
1,安装eslint pnpm i eslint -D
2,初始化eslint初始化文件 npx eslint --init
3，安装vue3环境代码检测插件：
vue3环境代码校验插件 适用于eslint9.0版本之前 #让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
"eslint-config-prettier":"^8.6.0",
"eslint-plugin-import":"^2.27.5",
"eslint-plugin-node":"^11.1.0", #运行更漂亮的Eslint，使prettier规则优先级更高，Es1int优先级低
"eslint-plugin-prettier":"^4.2.1",
#vue，js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南
"eslint-plugin-vue":"^9.9.0", #该解析器允许使用Eslint校验所有babel code
"@babel/eslint-parser":"^7.19.1",
安装指令
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier @babel/eslint-parser
4,配置忽略文件 node_modules dist
5，script添加启动校验脚本 修正脚本
lint: "eslint src"
fix: "eslint src --fix "

prettier
1,安装依赖 pnpm i -D eslint-plugin-prettier prettier eslint-config-prettier
2,.prettierrc添加规则
3,指定默認格式化工具 Prettier -code formatter

配置stylelint
1,安裝依賴：
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
注
stylelint-config-standard stylelint标准配置
postcss用于处理scss和其他css预处理器
2,创建配置文件 .stylelintrc.json
3,新增配置.stylelintignore
4，添加运行脚本
// 最后配置统一的prettier格式化js,ts,css,html代码 运行pnpm run format
"format": "prettier --write \"./**/\*.{html,vue,ts,js,json,md}\"",
// 下面两个命令暂时有误，待修正
"lint:eslint": "eslint src/**/_.{ts, vue} --cache --fix",
"lint:style": "stylelint src/\*\*/_.{css,scss,vue} --cache --fix"

husky
1,安装husky： pnpm install -D husky
2,执行初始化husky npx husky init 生成.husky文件，修改pre-commit钩子

