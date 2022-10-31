const path = require('path');
const esbuild = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');
const args = require('args-parser')(process.argv);

const isProd = process.env.NODE_ENV === 'production';
const watch = Boolean(args.watch);

(async () => {
  esbuild
    .build({
      outdir: path.join(__dirname, '..', isProd ? 'dist' : 'src', 'public', 'js'),
      entryPoints: [
        path.join(__dirname, 'bundles', 'index.js'),
      ],
      minify: isProd,
      watch: watch,
      sourcemap: !isProd,
      bundle: true,
      loader: {
        '.js': 'jsx',
      },
      plugins: [
        svgrPlugin(),
      ],
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
})();
