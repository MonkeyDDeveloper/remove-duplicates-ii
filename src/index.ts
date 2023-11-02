function removeDuplicates(nums: number[]): number {
    for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        let nextNum = nums[i+1]
        let afterNextNum = nums[i+2]
        if(currentNum != nextNum) continue
        if(currentNum == nextNum) {
            if(currentNum == afterNextNum) {
                nums.splice(i + 2, 1)
                i--
                continue
            }
        }
    }
    return nums.length
};
export default removeDuplicates