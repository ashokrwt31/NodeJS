/**
    Write a function which returns a provided number asynchronously in at least 
    500ms and then call this function for each value of this array [1, 2, 3, 4, 5] 
    and console.log the value.
*/


function setAsyncTimeout(num, timeout = 0) {
  return new Promise(resolve => {
    setTimeout(() => resolve(num), timeout);
  });
}

async function callTimeout(num, delay) {
    let result = await setAsyncTimeout(num,delay);
    console.log(result);       	
}

const numArray = [1,2,3,4,5];

numArray.forEach((num, idx) => {
    callTimeout(num, (idx + 1) * 500);
});
