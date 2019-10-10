module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  // 遇到特定副檔名檔案，需要轉換成 jest 可以識別的語法來進行測試
  transform: {
    '^.+\\.vue$': 'vue-jest',
    // 因為只對邏輯做測試，不對樣式測試，所以需將以下靜態資源轉換成字符串即可，不需要解析
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    // 將 es6 等轉成 es5 語法
    '^.+\\.jsx?$': 'babel-jest'
  },
  // 不需要轉換的路徑檔案
  transformIgnorePatterns: ['/node_modules/'],
  // 因為 Jest 不知道 vue 配置的引入前綴 @ 意思，在此重新映射轉換成對應路徑
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  // 需要執行的測試檔案, 以下配置會針對所有 __tests__/ 資料夾底下的所有 .js .jsx .ts .tsx 檔案來運行測試
  testMatch: ['**/__tests__/**/*.(js|jsx|ts|tsx)'],
  // 排除 .eslintrc.js 檔案，不把它當成測試文件
  testPathIgnorePatterns: ['.eslintrc.js'],
  // window、jsDOM 位置
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
