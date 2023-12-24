function solution(arr){
    let result = [];
    result.push(arr[0]);
    
    arr.forEach((item, index) => {
        const lengthOfResult = result.length;
        if(index > 0 && result[lengthOfResult - 1] !== item){
            result.push(item)
        }
    })
    return result
    
}
