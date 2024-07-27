// Inner Text 

var  a= document.querySelector('h1').innerText;

console.log(a);

console.log('------------------------------');

// and Text Content

var  a= document.querySelector('h1').textContent;

console.log(a);

// inner html

var a= document.querySelector('.hero');
a.innerHTML='<b>Hello</b>'

console.log(a);


//outer html

var a= document.querySelector('.hero');
a.outerHTML='<b>Hello</b>'

console.log(a);

// get and set attributes

let hero= document.querySelector('#hero');

console.log(hero.getAttribute('about'))


hero.setAttribute('example', 123)

console.log(hero.outerHTML);


for(let att of hero.attributes){
    console.log(att.name, att.value);
}