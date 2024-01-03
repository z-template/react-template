// vite/vite-plugin-icon-dts.ts
import glob from 'fast-glob'
// @ts-ignore
import fs from 'fs-extra'
import path from 'node:path'

const PLUGIN_NAME = 'vite-plugin-icon-dts'

function error(...args: any[]) {
  console.error(`${PLUGIN_NAME}: `, ...args)
}

function debounce(fn: () => void, wait: number) {
  let timer: any = null
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, wait)
  }
}

// glob 默认只支持 / 作为路径分隔符，windows 下会出现问题
const normalizePath = (path: string) => path.replace(/\\/g, '/')

type IconDtsOptions = {
  /** 监听的目录 */
  directory: string
  /** 输出的dts文件 */
  dts: string
  /** 监听变化的延迟时间 */
  delay: number
  /** 接口名称 */
  interfaceName: string
}

const defualtOptions: IconDtsOptions = {
  directory: 'src/assets/svg/',
  dts: 'src/components/SvgIcon/icons-dts.d.ts',
  delay: 200,
  interfaceName: 'ISvgIconPath'
}

export function iconDts(options: Partial<IconDtsOptions> = {}) {
  const finalOptions: IconDtsOptions = Object.assign({}, defualtOptions, options)
  const { delay, interfaceName } = finalOptions
  let { directory, dts } = finalOptions
  directory = normalizePath(directory)
  dts = normalizePath(dts)

  return {
    name: PLUGIN_NAME,
    configureServer: () => {
      if (!fs.existsSync(directory)) {
        error(`directory ${directory} not exist, please check`)
        return
      }

      const update = () => {
        let assets: any = glob.sync(`${directory}/*.svg`, {})
        assets = assets.map((i: string) => i.replace(directory, ''))
        assets = assets.map((i: string) => i.replace('.svg', ''))
        assets = assets.map((i: string) => i.replace('/', '-'))

        let output = `/* prettier-ignore-start */\n/* tslint:disable */\n/* eslint-disable */\nexport type ${interfaceName} =\n`
        for (let i = 0; i < assets.length; i++) {
          const pic = assets[i]
          output += `| '${pic}'\n`
        }
        output += '\n/* prettier-ignore-end */\n'

        const base = path.dirname(dts)
        fs.ensureDirSync(base)
        fs.writeFileSync(dts, output)
      }

      const debounceLogic = debounce(update, delay)
      // 监听到文件变化，就重新写一遍
      fs.watch(directory, { recursive: true }, () => {
        debounceLogic()
      })
      update()
    }
  }
}
