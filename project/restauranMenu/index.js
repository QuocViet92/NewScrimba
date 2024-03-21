import {menuArray} from'./data.js'
const closeCard = document.getElementById('closeCard')
const cardDetail =document.getElementById('cardDetail')

closeCard.addEventListener('click',function(){
    cardDetail.classList.add('hidden')
})

document.addEventListener('click',function(e){
    if(e.target.dataset.tang){
        handleClickTang(e.target.dataset.tang)
    }
    else if(e.target.dataset.giam){
        handleClickGiam(e.target.dataset.giam)
    }else if(e.target.dataset.remove){
        handleClickRemove(e.target.dataset.remove)
    }else if(e.target.dataset.pay){
        cardDetail.classList.remove('hidden')
    }
})

document.addEventListener('change',function(e){
    if(e.target.dataset.nhap){
        handleChangeInput(e.target.dataset.nhap)
    }
})


function handleClickRemove(id){
    const targetTweetObj = menuArray.filter(item => item.id == id)[0]
    targetTweetObj.quality = 0
    render()
    console.log(targetTweetObj)
}

function handleChangeInput(id){
    const targetTweetObj = menuArray.filter(item => item.id == id)[0]
    const inputValue = document.getElementById(`id-${id}`)
    if(inputValue.value < 0){
        inputValue.value = 0
        
    }  
    targetTweetObj.quality = inputValue.value
    render()
}

function handleClickTang(id){
    const targetTweetObj = menuArray.filter(item => item.id == id)[0]
    targetTweetObj.quality++
    render()
    
}

function handleClickGiam(id){
    const targetTweetObj = menuArray.filter(item => item.id == id)[0]
    if(targetTweetObj.quality > 0){
    targetTweetObj.quality--
    }
    render()
    console.log(targetTweetObj)
}
function getHtmlMenu(arr){
   return  arr.map(item => {
    let ingredient = item.ingredients.join(", ")
    let classHidden = item.quality == 0 ? 'hidden' : ""
    
return `<div class="food">
<h2>${item.emoji}</h2>
<div class="info">
<h4>${item.name}</h4>
<p>${ingredient}</p>
<h4>$${item.price}</h4>
</div>
    <div class="btn-icr">
    <button class="centerClass ${classHidden}" data-giam=${item.id}>-</button>
    <input type="number" id="id-${item.id}" data-nhap=${item.id} value=${item.quality}>
    <button data-tang=${item.id}>+</button>
</div>
</div>`
   }).join(" ") 
}

function getBill(arr){

    return arr.map(item => {
        if(item.quality > 0){
            let totalPrince = item.price * item.quality
        return ` <div class="billFoobs">
        <h4>${item.name} <span data-remove=${item.id}>remove</span></h4>
        <h4 class="aglinLeft" >$${totalPrince}</h4>
    </div>
    `
        }
    }).join('')
    
}


function getTotalBill(){
    const innerBillTotal = document.getElementById('total-btn')
    let total = menuArray.reduce((tong , current)=>{
        return tong +(current.price * current.quality)
    },0)
    if(total > 0){
    innerBillTotal.innerHTML = ` 
    <div class="total">
    <h4>total</h4>
    <h4 class="aglinLeft">${total}</h4>
    </div>
    <button class="pay" data-pay="payoder">Complete order</button>
    
    `
    }else{
        innerBillTotal.innerHTML =''
    }
    
}
function renderBill(){
    const innerBill = document.getElementById('getbill')
    innerBill.innerHTML = getBill(menuArray)
}
function render(){
    const foods = document.getElementById('foods')
    foods.innerHTML = getHtmlMenu(menuArray)
    renderBill(menuArray)
    getTotalBill()

}
render()
