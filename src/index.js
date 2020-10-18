module.exports = function reverse(n) {
    let result;
    result = Math.abs(n) + ''
    result = result.split('').reverse().join('')
    result = +result
    return result;
}
