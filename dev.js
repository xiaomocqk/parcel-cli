const path = require('path');
const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const app = require('express')();
const PORT = 1234;

process.env.NODE_ENV = 'development';

app.set('trust proxy', true);
app.set('x-powered-by', false);
app.use(
  proxy('/baidu', {
    target: 'https://www.baidu.com',
    changeOrigin: true,
    pathRewrite: {
      '^/baidu': ''
    }
  })
);

const parcelBundler = createParcelBundler();

app.use(parcelBundler.middleware());
app.listen(PORT);

function createParcelBundler() {
  const entryFiles = path.join(__dirname, './src/views/*.html');

  // https://parceljs.org/api.html
  const options = {
    outDir: './dist', // 将生成的文件放入输出目录下，默认为 dist
    target: 'browser',
    watch: true, // 是否需要监听文件并在发生改变时重新编译它们，默认为 process.env.NODE_ENV !== 'production'
    cache: true, // 启用或禁用缓存，默认为 true
    cacheDir: './dist/.cache', // 存放缓存的目录，默认为 .cache
    contentHash: false, // 禁止文件名hash
    minify: false,
    logLevel: 3,
    hmr: true, // 开启或禁止HRM
    hmrPort: 0, // hmr socket 运行的端口，默认为随机空闲端口(在 Node.js 中，0 会被解析为随机空闲端口)
    sourceMaps: true, // 启用或禁用 sourcemaps，默认为启用(在精简版本中不支持)
    // global: 'moduleName', // 在当前名字模块以UMD模式导出，默认禁止。
  };

  const bundler = new Bundler(entryFiles, options);
  
  bundler.on('buildEnd', ()=> {
    console.log(`[Example] http://localhost:${PORT}/emoji.html`)
    console.log(`[Example] http://localhost:${PORT}/game.html`)
    console.log(`[Example] http://localhost:${PORT}/baidu`)
  });

  return bundler;
}
