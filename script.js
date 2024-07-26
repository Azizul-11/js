// getElementByTagName()

// var a = document.getElementsByTagName('li');

// console.log(a);

// getElementsByClassName()

// var a = document.getElementsByClassName('hero');

// console.log(a);

// getElementById()

// var a = document.getElementById('hero');

// console.log(a);


// querySelector()

// var a = document.querySelector('.hero');

// console.log(a);


// querySelectorAll()

// var a = document.querySelectorAll('.hero');

// console.log(a);


// parentElement()

// var parent= document.querySelector('div');
// var p=parent.parentElement;
// console.log(p);


// Siblings()

// var a = document.querySelectorAll('.hero');
// if(a.previousElementSibling == null)
// {
//     console.log('Siblings not present');
// }
// else{

//     console.log(a.previousElementSibling);
// }


// a.forEach((ele)=>{
//     console.log(ele.previousElementSibling);
// })


//appendChild()

// const ul=document.querySelector('ul');

// const li=document.createElement('li');

// li.textContent='New Hero';

// ul.appendChild(li);


// remove

// const ul=document.querySelector('ul');
// ul.remove();


//replace Child

// const list= document.querySelector('ul');

// const childToChange=list.children[1];

// const newLi=document.createElement('li');

// newLi.textContent='Changed Hero';

// list.replaceChild(newLi, childToChange);


