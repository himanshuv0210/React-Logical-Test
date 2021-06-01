//import logo from './logo.svg';
import './App.css';

function App() {
  var obj = [ { id : 4, name : "abc" },
    {id : 10, name : "ab2" },
    {id : 5, name : "abc3" },
    {id : 6, name : "abc5"}
    ];
  	
//Q5. Sort the dictionary object by id (displayed in Console)
    obj.sort(function (a, b) {
      return a.id - b.id;
    });
    console.log(("Sorted  dictionary  object  "))
    console.log(obj); 

  var nums = [1,2,3,4,5,6,7,8,9,10];
  var evens = [];
  var odds = [];
  const barr = [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1];
  var arr = [1, 2, 3, 3, 4, 5];
  var n = arr.length;


// Q1 Show the even number in array using for loop
  for (var i = 0; i < nums.length; i++) 
  {

    if ((nums[i] % 2) === 0) {
        evens.push(nums[i]);
            //console.log(evens);
    }
    else {
        odds.push(nums[i]);
            //console.log(odds);
    }

}

// Q2. Find the maximum consecutive 1's in an array of 0's and 1's.
const findMax = () => {
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < barr.length) {
      if (barr[right] === 0) {
          if (right - left > max) {
              max = right - left
          };
          right++;
          left = right;
      } else {
          right++
      };
 };
 return right - left > max ? right - left : max;
}

//Q3. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
const findrepeat = (arr, low, high) => {
  if (low > high) return -1;
 
        var mid = parseInt((low + high) / 2);

        if (arr[mid] !== mid + 1)
        {
          if (mid > 0 && arr[mid] === arr[mid - 1]) return mid;
          return findrepeat(arr, low, mid - 1);
        }
 
        return findrepeat(arr, mid + 1, high);
}
var index = findrepeat(arr, 0, n - 1);
  return (
    <div className="App">
         <h1>Q1. Random Array : {nums.join(", ")}</h1>
         <h1>Even numbers :  {evens.join(", ")} </h1>
         <hr></hr>
         <h1>Q2. Binary array : {barr.join(", ")}</h1>
         <h1> Consecutive numbers : {findMax()} </h1>  
         <hr></hr>
         <h1>Q3. Sorted Array - {arr.join(", ")} </h1>
         <h1>Repeated no. is {index}</h1>
       <hr></hr>
    </div>
  );

}

export default App;

