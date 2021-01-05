
import _ from 'lodash';
import anotherModule from "./another-module";  

function component() {
    console.log("componaasdasaent")
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
 
    btn.innerHTML = 'Click me and check the console!';
   

    element.appendChild(btn);


    return element;
}

 


document.body.appendChild(component()); 