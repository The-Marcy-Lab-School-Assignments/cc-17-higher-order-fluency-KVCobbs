//write your code here
function pluralize (words) {
  // map
  return words.map((words) => {return `$words}s`})
}

function uppercase (words) {
    //map 
    
    return words.map((word) => {return word[0].toUpperCase() + word.substring[1]})
    /*
    let str = str.split('')
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt[0].toUpperCase() + arr[i].slice(i)
    }
    
   const str2 = arr.join(" ")
   return str2
   */
}

function longWords (words) {
    //filter 
    return words.fitler((words => {return words.length > 3}))
    
    /*
    return words.filter(function(words) {
        console.log(words.length)
        return words.length < 3;
    });
    */
}

function shortWords(words) {
    //filter 
    return words.filter(word => word.length < 5)
    /*
    return arr.filter(function(arr){
        return arr.length < 5;
    })
    */
}


function oddLength (words) {
    //filter 
    
    return words.filter(word => word.length % 2 === 1)
}

function longToShort(words){
    // sort 
    return words.sort((a,b) => {return b.length - a.length})
    
  //  return arr1.length - arr2.length
}

function sum(numbers){
    //reduce
    return numbers.reduce((prev, curr) => return prev + curr)
    
    /*
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total 
    */
}