import babel from 'rollup-plugin-babel';
import pkg from './package.json' with { type: 'json' };

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: [
      {
        name: 'Diff',
        format: 'umd',
        file: './dist/diff.js',
      },
      {
        format: 'esm',
        file: './lib/index.es6.js',
      }, {
        format: 'esm',
        file: './lib/index.mjs'
      }
    ],
    plugins: [
      babel({
        babelrc: false,
        presets: [['@babel/preset-env', { targets: {ie: '11'}, modules: false }]]
      })
    ]
  }
];
