import Utils from './utils'
import type { Options } from './types'

export default class Commadb extends Utils {
    constructor(options: Options) {
        super(options)
        console.log('CommaDB instance created..')
    }
}
