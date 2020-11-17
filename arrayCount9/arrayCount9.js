function arrayCount9(nums){
let count = 0;
let nine = 9;
for (let i = 0; i < nums.length; i++){
 if (nums[i] === nine){
   count += 1;
 }
}
console.log(count);
}
arrayCount9([1,9,9]);