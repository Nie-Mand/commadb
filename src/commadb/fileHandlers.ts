import fs from 'fs'
import path from 'path'

export default class fileHandlers {
    constructor(private base: string) {}
    _filePath(fileName) { return path.resolve(this.base, fileName) }
    _write(fileName, data) {
        fs.writeFileSync(`${this._filePath(fileName)}.csv`, data)
    }
    _open(fileName) {
        let file = ''
        try {
            file = fs.readFileSync(`${this._filePath(fileName)}.csv`, 'utf8')
        } catch (e) {
            if (e.code === 'ENOENT') this._write(fileName, '')
            else console.error(e)
        }
        return file
    }
}