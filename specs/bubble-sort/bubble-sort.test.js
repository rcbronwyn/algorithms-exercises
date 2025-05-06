/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // code goes here
  let swapped = true;
  let iteration = 1

  // Run an iteration as long as something was swapped;
  while(swapped){
    // Set swapped to false before looping through the array.
    swapped = false;
    let iteration = 1;
    for(let i = 0; i < nums.length - iteration; i++){
      // Check if the item in the current index has a greater value than the next index.
      // If it does, swap the two values and set swapped to true.  
      if(nums[i] > nums[i+1]){
        let temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
    //Increase iteration by 1 at the end of the cycle;
    iteration++
  }
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
