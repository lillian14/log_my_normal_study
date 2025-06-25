// 输入 0 0 1 0 0
// 输出 3
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const line = await readline()
    const nums = line.split(' ').map(Number)
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            console.log(++i)
            return
        }
    }
}()