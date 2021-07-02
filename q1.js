
function greaterThan(arr,num){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
      count++;
    }

  }
console.log(count);
}
greaterThan([4,2,3,1],3);
greaterThan([2,8,-1],0);