import { expect } from "chai";
import removeDuplicates from "../index";

describe("Remove duplicates II", () => {
    it("The 'K' value returned by the function should be the same as the expected. The first 'K' values should be the same as the expected.", () => {
        const nums = [1, 1, 1, 2, 2, 3]
        const expectedNums = [1, 1, 2, 2, 3]
        const k = removeDuplicates(nums)
        expect(k).to.equal(expectedNums.length)
        for(let i = 0; i < k; i++) {
            expect(nums[i]).to.equal(expectedNums[i])
        }
    })
    it("The 'K' value returned by the function should be the same as the expected. The first 'K' values should be the same as the expected.", () => {
        const nums = [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4]
        const expectedNums = [0, 0, 1, 1, 2, 2, 3, 3, 4]
        const k = removeDuplicates(nums)
        expect(k).to.equal(expectedNums.length)
        for(let i = 0; i < k; i++) {
            expect(nums[i]).to.equal(expectedNums[i])
        }
    })
})