const A = [50,107, 'jack', 83, 'killer', 'son', true];

// 1. Just show the strings in a new array.
const result =A.filter(nam => typeof nam === 'string');
console.log(result);
// output:[ 'jack', 'killer', 'son' ]


// 2. Create a new array from numbers and sort them.
const result2 =A.filter(nam => typeof nam === 'number');
function compareNumbers(a, b) {
    return a - b;
  }
result2.sort(compareNumbers);
console.log(result2);
//output: [ 50, 83, 107 ] small to bigger number.



// 3. Make the string array reverse.['jack', 'killer','son']
console.log(result.reverse());
// output:[ 'son', 'killer', 'jack' ]


// 4. Combine both array of numbers and strings.
const result3 = result.concat(result2); 
console.log(result3);
// output:[ 'jack', 'killer', 'son', 50, 83, 107 ]


// 5. Delete 3 items from the 6th item from the combined array.
result3.push('hello','world','bd','nice','country');
result3.splice(6, 3);
console.log(result3);
// output: ['son',  'killer', 'jack', 50, 83, 107,'nice', 'country']
  

//   6. Show elements from A which are less than 100.
  for (var i = 0; i < result2.length; i++) {
    if (result2[i] < 100 ) {
        largest = result2[i];
       // console.log(largest);
      }
  }
// output:50 83


// 7. From string array remove the last letter and add word 'str' before each of them
console.log(result.map(item => item.slice(0, -1) + 'str'));

// output:[ 'sostr', 'killestr', 'jacstr' ]