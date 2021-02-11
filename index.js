// O(n^2) - Time | O(1) - Space
function threeNumberSum(array, targetSum) {
  array.sort((a,b) => a-b);
  // console.log('sorted array', array)
  let results = [];
  for(let i = 0; i < array.length; i++){
    let left = i + 1;
    let right = array.length-1;
    while(left < right){
      let sum = array[i] + array[left] + array[right];

      if(sum === targetSum){
        results.push([array[i], array[left], array[right]]);
        left++;
        right--;
      }
      else if(sum > targetSum){
        right--;
      }
      else if(sum < targetSum){
        left++;
      }
    }
  }
  return results;
}
threeNumberSum([12,3,1,2,-6,5,-8,6], 0)
// sorted [-8, -6, 1,  2, 3,  5, 6, 12]
//          C   L                    R
