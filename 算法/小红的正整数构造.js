// 输入：6 10 3
// 输出：6
// 说明：区间6-10 6和9 是3 的倍数 所以输出 6
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const line = await readline()
    const nums = line.split(' ').map(Number)
    const min = Math.min(...nums) // 最小值
    let res = -1
    for(let i = nums[0]; i <= nums[1]; i++) {
        if(i % nums[2] === 0) {
            res = i
            break;
        }
    }
    console.log(res)
}()
