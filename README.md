![Rannum App Logo](https://raw.githubusercontent.com/damiangornik8/random-number-generator-js/master/logo.png)

# About Rannum 


[Live Demo](https://lucid-dijkstra-e02834.netlify.app/)

<br />

`Rannum` is a random number generator tool. It generates a random number within a predefined range and displays it afterwards. <br />

- Built on the top of vanilla `JavaScript (ES6 Standard)` and `CSS3`
- Modular to fit different use cases: from the private person working with `small sets` to business professionals operating on the `million of numbers`
- Modern and mobile responsive design


<br />

# Features 
<br />

### Generates a random number using a predefined range, and stores it in a variable 
<br />


```javascript

const generateBtn = document.getElementById('generateNumBtn');

generateBtn.addEventListener('click', () => {

  let minNum = parseInt(document.getElementById('minNum').value);
  let maxNum = parseInt(document.getElementById('maxNum').value);

  let randomNumber = Math.floor(Math.random() * ((maxNum-minNum) + 1 ) + minNum);
}, false);

```
<br />

### Checks if the same number was generated twice in a row, and if did, then generates a random number once again
<br />

```javascript

const generateBtn = document.getElementById('generateNumBtn');

generateBtn.addEventListener('click', () => {

  let minNum = parseInt(document.getElementById('minNum').value);
  let maxNum = parseInt(document.getElementById('maxNum').value);

  let randomNumber = Math.floor(Math.random() * ((maxNum-minNum) + 1) + minNum);

  if (lastNumber === randomNumber) {
    let randomNumber = Math.floor(Math.random() * ((maxNum-minNum) + 1) + minNum);
  }
}, false);


```
<br />

## Contact Us
---
### Have any questions? We’d love to hear from you! 
<br />

## `rannumsoftware@gmail.com`
