/**
 * 修改配置后重启编辑器
 * 配置项文档：https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

module.exports = {
  // 每一行的宽度
  printWidth: 100,
  // 每个tab相当于多少个空格（默认2）ab进行缩进（默认false）
  tabWidth: 2,
  // 是否使用tab
  useTabs: false,
  // 在对象中的括号之间是否用空格来间隔
  bracketSpacing: true,
  // 箭头函数的参数无论有几个，都要括号包裹
  arrowParens: "always",
  // 换行符的使用
  endOfLine: "auto",
  // 是否采用单引号
  singleQuote: true,
  // 对象或者数组的最后一个元素后面不要加逗号
  trailingComma: "all",
  // 是否加分号
  semi: false,
  // vue 文件中是否缩进 <style> 和 <script> 标签，默认 false
  vueIndentScriptAndStyle: false,
  // 对象属性是否使用引号(as-needed | consistent | preserve;默认as-needed:对象的属性需要加引号才添加;)
  quoteProps: "as-needed",
  // 当文件已经被 Prettier 格式化之后，是否会在文件顶部插入一个特殊的 @format 标记，默认false
  insertPragma: false,
  // 是否只格式化在文件顶部包含特定注释(@prettier| @format)的文件，默认false
  requirePragma: false
}
