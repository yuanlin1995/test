// no-type
import { createVuePlugin } from 'vite-plugin-vue2'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

export default {
  plugins: [
    createVuePlugin(), 
    viteCommonjs()
  ]
}