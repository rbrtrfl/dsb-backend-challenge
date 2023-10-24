import fs from 'fs'

export function extractValuesFromJson(filepath: string): string[] {
  const jsonData = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
  return getValues(jsonData)
}

function getValues(obj: any): string[] {
  if (Array.isArray(obj)) {
    return obj.flatMap(getValues)
  } else if (obj !== null && typeof obj === 'object') {
    return Object.values(obj).flatMap(getValues)
  }
  return [obj]
}