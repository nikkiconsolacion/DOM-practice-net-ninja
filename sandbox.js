const paras = document.querySelectorAll('p');
console.log(paras); // NodeList [p,p,p,p,p,p,p,p]

/* write a function that adds a class="success" to paragraphs containing 'success',
or class="error" to paragraphs containing 'error' */

function addClass(arr) {
  // loop through all elements
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];

    if (elem.innerText.includes('success')) {
      elem.classList.add('success');
    }
    if (elem.innerText.includes('error')) {
      elem.classList.add('error');
    }
  }
}
addClass(paras);
// const firstP = document.querySelector('p');
// console.log('firstP', firstP)
// console.log(firstP.innerHTML.includes('error'));
// // function isSuccess(elem) {
// //   if (elem.classList){

// //   }
// // }
