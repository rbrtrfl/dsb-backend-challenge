import * as fs from 'fs'
import * as path from 'path'

export default async function loadAllExportsFromFolder(folderPath: string): Promise<Record<string, string>[]> {
  const exportsArray: Record<string, string>[] = []

  const files = fs.readdirSync(folderPath)

  for (const file of files) {
    // TODO: use conditional checks based on the environment
    if ((path.extname(file) === '.ts' && file !== 'index.ts') || (path.extname(file) === '.js' && file !== 'index.js')) {
      const fullPath = path.join(folderPath, file)
      const moduleExports = await import(fullPath)
      exportsArray.push(moduleExports)
    }
  }

  return exportsArray
}