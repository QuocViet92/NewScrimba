import {data} from './data.js'
console.log(data)

const getHtml = document.getElementById('innerSection')
const btn =  document.getElementById('btnViewMore')
const btnNav = document.getElementById('btnNav')
const navEl = document.getElementById('navtitle')
let scout = 0
let idInner = ''

document.addEventListener('click',function(e){
    if(e.target.dataset.id){
        console.log(e.target.dataset.id)
    }   
})

btnNav.addEventListener('click',function(){
    navEl.classList.toggle('hidden')
})
btn.addEventListener('click',function(){
    render(2)
})

function render(a){
    console.log(a)
    let html =""
    
    let sum = scout +a
for(let i = scout ; i <= sum ; i++){
    if(scout < data.length){

html +=`
 <section >
<img  data-id=${data[i].id}  class="img-body" src=${data[i].img} alt="">
<div class='content-body'>
<p class="date-body">${data[i].date}</p>
<h3>${data[i].title}</h3>
<p class="info-body">${data[i].text}.</p>
</section>
`
    }

scout = scout + 1
if(scout >= data.length){
    btn.style.display= 'none'
}
console.log(scout)
}
getHtml.innerHTML += html
    }

    render(2)
    


