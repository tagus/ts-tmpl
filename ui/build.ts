import path from 'path';
import esbuild, { BuildOptions } from 'esbuild';
import svgrPlugin from 'esbuild-plugin-svgr';
import { parse } from 'ts-command-line-args';
import { clean } from 'esbuild-plugin-clean';
import fs from 'fs';

const args = parse({
  watch: Boolean,
  bundlePath: {
    type: String,
    defaultValue: path.join(__dirname, 'bundles'),
  },
});

async function config(args: { isProd: boolean; bundlePath: string }): Promise<BuildOptions> {
  const entrypoints = await gatherEntrypoints(args.bundlePath);
  const output = path.join(__dirname, '..', args.isProd ? 'dist' : 'src', 'public', 'js');
  return {
    outdir: output,
    entryPoints: entrypoints,
    minify: args.isProd,
    sourcemap: !args.isProd,
    bundle: true,
    logLevel: 'info',
    tsconfig: path.join(__dirname, 'tsconfig.json'),
    plugins: [
      svgrPlugin(),
      clean({
        patterns: [output],
        options: { force: true },
      }),
    ],
  };
}

async function gatherEntrypoints(bundlePath: string) {
  const entrypoints = [];
  const files = await fs.promises.readdir(bundlePath);
  for (const file of files) {
    entrypoints.push(path.join(bundlePath, file));
  }
  return entrypoints;
}

async function build() {
  try {
    const cfg = await config({
      isProd: process.env.NODE_ENV === 'production',
      bundlePath: args.bundlePath,
    });
    if (args.watch) {
      const ctx = await esbuild.context(cfg);
      await ctx.watch();
    } else {
      await esbuild.build(cfg);
    }
  } catch (err) {
    console.error(err);
  }
}

/******************************************************************************/

build();
