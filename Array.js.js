const A = [50,107, 'jack', 83, 'killer', 'son', true];

// 1. Just show the strings in a new array.
const result =A.filter(nam => typeof nam === 'string');
console.log(result);
// ans:[ 'jack', 'killer', 'son' ]


// 2. Create a new array from numbers and sort them.
const result2 =A.filter(nam => typeof nam === 'number');
function compareNumbers(a, b) {
    return a - b;
  }
result2.sort(compareNumbers);
console.log(result2);
//ans: [ 50, 83, 107 ] small to bigger number.



// 3. Make the string array reverse.['jack', 'killer','son']
console.log(result.reverse());
// ans:[ 'son', 'killer', 'jack' ]


// 4. Combine both array of numbers and strings.
const result3 = result.concat(result2); 
console.log(result3);
// ans:[ 'jack', 'killer', 'son', 50, 83, 107 ]


// 5. Delete 3 items from the 6th item from the combined array.
result3.push('hello','world','bd');
var i=result3.length;
while (i--) {
  if(i>=6){
    result3.splice(i, 1);
  }
  }
  console.log(result3);
// ans: [ 'jack', 'killer', 'son', 50, 83, 107 ]
  

//   6. Show elements from A which are less than 100.
  for (var i = 0; i < result2.length; i++) {
    if (result2[i] < 100 ) {
        largest = result2[i];
       // console.log(largest);
      }
  }
// ans:50 83
  
