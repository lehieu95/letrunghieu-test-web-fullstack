//1
const findOppositeNumber = (n, firstNum) => {
    if(firstNum < n/2 && firstNum < n && firstNum > 0){
        return firstNum + n/2
    }else if(firstNum && firstNum < n && firstNum > 0> n/2){
        return firstNum - n/2
    }else if(firstNum = n/2 && firstNum < n && firstNum > 0){
        return n/2
    }
}

console.log(findOppositeNumber(8,1))

//2
const merge2String = (a , b) => {
    let res = "";
    if( a.length < b.length){
        for( i = 0 ; i < b.length ; i++){
            res += a.slice(i, i+1) + b.slice(i,  i + 1)
        }
    }else if( a.length >= b.length) {
        for( i = 0 ; i < a.length ; i++){
            res += a.slice(i, i+1) + b.slice(i,  i + 1)
        }
    }
    return res
}

console.log(merge2String("abcd","xyz"))