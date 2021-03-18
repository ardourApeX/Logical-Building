function findMax(...nums) {
    console.log(nums)
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        max = max < nums[i] ? nums[i] : max
    }
    console.log(max)
}
findMax(1, 2, 3, 5, 2, 12, 3244, 543)