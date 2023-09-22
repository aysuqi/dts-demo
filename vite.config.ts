/*
 * @Description: 
 * @Author: yusunqi
 * @Date: 2023-09-22 11:09:03
 * @LastEditTime: 2023-09-22 11:53:34
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { name } from './package.json'
import dts from 'vite-plugin-dts'

const resolve = {
  alias: {
    "@": path.resolve(__dirname, 'src'),
    dtsdemo: path.resolve(__dirname, 'packages/components')
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      resolve,
      publicDir: false,
      build: {
        outDir: 'lib',
        lib: {
          name,
          fileName: name,
          entry: path.resolve(__dirname, 'packages/components/index.ts')
        }
      },
      plugins: [dts({ rollupTypes: true })]
    }
  }

  return {
    resolve,
    plugins: [react()]
  }
})

