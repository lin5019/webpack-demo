var path = require('path');

module.exports = {
    mode: 'development',  // development 开发模式 or production 生产模式(默认模式)
    entry: './src/index.js',  //入口文件,设置成自己的
    output: {
        filename: '[name].[contenthash].js'  //将文件名hash编码
    }
};
