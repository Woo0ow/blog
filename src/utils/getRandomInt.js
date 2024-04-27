/**
 * 生成指定范围内的随机整数。
 * @param {number} min - 最小值（包含）。
 * @param {number} max - 最大值（包含）。
 * @returns {number} 返回范围内的随机整数。
*/
function getRandomInt(min, max) {
    min = Math.ceil(min); // 向上取整，确保min是整数
    max = Math.floor(max); // 向下取整，确保max是整数
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomInt