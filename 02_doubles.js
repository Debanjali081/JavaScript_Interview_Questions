// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array.However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


let arr=[2,4,5,6,7,8,9,10,2]

let arr2=[]

for(let i=0 ; i<arr.length ; i++){
    if( i>0 && arr[i]===arr[i-1]){
        arr2.push(arr[i])
    }
    else{
        arr2.push(arr[i]*2)
    }
   

}
console.log(arr2)


    


