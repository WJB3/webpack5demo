import _ from 'lodash';
import "./index.css";
import Csr from './csr.png';

function component(){

    const element=document.createElement("div");
    element.innerHTML=_.join(["Hello",'webpack']);
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Csr;
  
    element.appendChild(myIcon);

    return element;

}

document.body.appendChild(component());