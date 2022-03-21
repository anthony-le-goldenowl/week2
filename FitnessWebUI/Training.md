# Table of content
  |          Day          | Content                        |
  | --------------------- |:------------------------------:|
  | 3/15/2022             |[HTML,CSS](#315)                |
  | 3/17/2022             |[JS ES6, JQuery](#317)          |
  | 3/18/2022             |[JS Async, JS DOM APIs](#318)   |

### **HTML** (3/15/2022) <a name="315"></a>
  * Basic tags :white_check_mark:
  * Block tags (div...) and inline tags (span...) [Link](https://www.w3schools.com/htmL/html_blocks.asp) :white_check_mark:
### **CSS** (3/15/2022)
  * CSS precedence [Link](https://css-tricks.com/precedence-css-order-css-matters/) :white_check_mark:
  * Flex and Grid [Link](https://viblo.asia/p/tran-chien-css-giua-grid-va-flexbox-1Je5EjkYKnL) :white_check_mark:
  * Inline, internal, external [Link](https://www.w3schools.com/CSS/css_howto.asp) :white_check_mark:
  * SASS syntax [Link](https://www.w3schools.com/sass/sass_intro.php) :white_check_mark:
### **JavaScript** (Src: W3school) (3/17/2022) <a name="317"></a>
  * **JS ES6** [Link](https://www.w3schools.com/Js/js_es6.asp) :white_check_mark:
    * *Let:* 
      - Variables defined with let cannot be redeclared.
      - Variables declared inside a { } block cannot be accessed from outside the block (Block Scope).
    * *Const:*
      - Variables defined with const cannot be Redeclared.
      - ariables defined with const cannot be Reassigned.
      - Variables defined with const have Block Scope.
    * *Arrow Fuctions:*
      - Arrow functions do not have their own this. They are not well suited for defining object methods.
      - Arrow functions are not hoisted. They must be defined before they are used.
    * *The For/Of Loop:*
      ```js
      const cars = ["BMW", "Volvo", "Mini"];
        let text = "";

        for (let x of cars) {
          text += x + " ";
        }
      ```
    * *JavaScript Maps:*
       - Being able to use an Object as a key is an important Map feature.
    * *JavaScript Sets*
       - A JavaScript Set is a collection of unique values.
       - Each value can only occur once in a Set.
       - A Set can hold any value of any data type.
    * *JavaScript Classes:*
       - A Set can hold any value of any data type.
    * *JavaScript Promises:* [Link](https://toidicodedao.com/2016/07/05/javascript-promise/)
      ```js
      let myPromise = new Promise(function(myResolve, myReject) {
      // "Producing Code" (May take some time)

        myResolve(); // when successful
        myReject();  // when error
      });

      // "Consuming Code" (Must wait for a fulfilled Promise)
      myPromise.then(
        function(value) { /* code if successful */ },
        function(error) { /* code if some error */ }
      );
      ```
    * *Function Rest Parameter:*
       - The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.
     
  * **jQuery** ([Testing code](https://github.com/anthony-le-goldenowl/week1/tree/Demo/jQueryResearch)) :white_check_mark:
    * *jQuery Effects* (Fade, Slide, Animate, ...)
    * *jQuery HTML* (Get, Set, ...)
    * *jQuery Traversing*
  * **JavaScript Asynchronous:** [Link](https://www.w3schools.com/js//js_asynchronous.asp) (3/18/2022) <a name="318"></a> :white_check_mark:
  * **JavaScript DOM APIs:** [Link](https://web-fundamentals.dev/dom-api) :white_check_mark:
    * *Finding Elements*
    * *Access elements* (Element content, HTML attributes, CSS Style, Traversing,...)
    * *DOM node* 
    * *DOM event*
### Fitness Web UI Design 


### Updating... 
