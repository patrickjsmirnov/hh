function createNumber(str: string):number {
    return Number(str.match(/\d/g).join(''))
}

module.exports = createNumber