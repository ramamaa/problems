// pwd - print working directory
// ls = list directory contents
// cd - change directory
// mkdir - make directory
// touch - create file

let numbers = [2,7,11,15];
// 1
for (i=0;i<numbers.length; i++){
    console.log(numbers[i]);
    
}
//2
for (i=0;i<numbers.length; i++){
    console.log(numbers[0]+numbers[i]);
    
}

//3
const twoSum = (numbers, target) => {
for (i=0;i<numbers.length;i++) {
    for(j=i+1;j<numbers.length;j++) {
            if (numbers[i]+numbers[j]===target) {
        console.log([i,j]);  }
    }
        
}
}
console.log(twoSum(numbers,9));



