import type { Options } from './types'
import fileHandlers from './fileHandlers'

export default class Utils extends fileHandlers {
    constructor(protected options: Options) { super(options.base) }
    _csvTojson(csv: string) {
        const content = csv.split(/\r?\n/)
        const columns = content[0].split(',')
        return content.slice(1)
            .map(line => line.split(','))
            .map(row => row.reduce((acc, curr, idx) => ({ ...acc, [columns[idx]]: curr }), {}))
    }
    _jsonToCsv(json) {
        let csv = ''
        const columns = Object.keys(json[0])
        csv += columns.join(',') + '\n'
        csv += json.map(data => columns.map(key => data[key]).join(',')).join('\n')
        return csv
    }
    test() {
        const file = this._open('hello')
        const data = this._csvTojson(file)
        const csv = this._jsonToCsv(data.map(data => ({... data, address: 'hell'})))
        this._write('hello', csv)
        return { msg: 'Okay' }
    }
}