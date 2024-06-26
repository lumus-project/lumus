import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

import packageJson from './package.json' assert { type: 'json' };

export default {
    input: './index.ts',
    treeshake: true,
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
        },
        {
            file: packageJson.module,
            format: 'esm',
        },
    ],
    plugins: [
        terser(),
        resolve(),
        commonjs(),
        typescript({ declaration: false, declarationDir: undefined, declarationMap: false }),
    ],
    external: ['react', 'react-dom', '@lumus/engine'],
};
