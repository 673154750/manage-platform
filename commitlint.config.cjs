module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 自定义类型
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复 Bug
        'perf', // 性能优化
        'style', // 样式 更新
        'docs', // 文档修改
        'test', // 增加测试
        'refactor', // 重构
        'build', // 修改项目构建配置
        'ci', // CI|CD 流程变更
        'revert', // 回滚某个更早之前的提交
        'release', // 版本更新
        'chore' // 其他类型
      ]
    ]
  },
}