//Q8

function search(){
    //Input: nums = [4, 9, 2, 7], target = 2
    let arr = [4, 9, 2, 7];
    let target = 2;
    let left = 0;
    let right = arr.length-1;
    while (left < right){
        if(arr[left]==right){
            if((arr[left]==target)){
                console.log(left);
            }
            if(arr[right]==target){
                console.log(right)
            }

            left++, right--;
        }
        console.log(arr);
    }
}
search()