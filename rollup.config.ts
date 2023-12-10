import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import { RollupOptions } from 'rollup';

const config: RollupOptions = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    preserveModules: true,
    exports: 'named',
    assetFileNames: '[name][extname]',
  },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external: ['commander'],
};

export default config;