const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
arr[0].push(10);

arr.push([30, 31, 32, 33, 34, 35, 36, 37, 38, 39]);

const removeIndex = arr[1].indexOf(14);
if(removeIndex !== -1){
  arr[1].splice(removeIndex, 1);
}

arr[2].reverse();

arr.forEach(row => console.log(row));
