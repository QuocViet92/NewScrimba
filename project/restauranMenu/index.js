import {menuArray} from'./data.js'
const closeCard = document.getElementById('closeCard')
const cardDetail =document.getElementById('cardDetail')
const darkThem = document.getElementById('darkLight')
const mainEL = document.getElementById('mainFood')
let isDark = false

darkThem.addEventListener('click',function(){
mainEL.classList.toggle('darkThem')
    isDark =!isDark
    render()
})

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
    }else if(e.target.dataset.opencomment){
        handleOpenComments(e.target.dataset.opencomment)
    }else if(e.target.dataset.closecomments){
        handleCloseComment(e.target.dataset.closecomments)
    }else if(e.target.dataset.sendcomment){
        handleClickSendComments(e.target.dataset.sendcomment)
    }
})

document.addEventListener('change',function(e){
    if(e.target.dataset.nhap){
        handleChangeInput(e.target.dataset.nhap)
    }
})

function handleClickSendComments(id){
    console.log(id)
    const targetTweetObj = menuArray.filter(item => item.id == id)[0]
    const inputComment = document.getElementById(`inputComment-${id}`)
    if(inputComment.value){
        targetTweetObj.rate.push({
               user:"My Post",
               comment: `${inputComment.value}` 
        })
        console.log(targetTweetObj)
        render()
    }
}

function handleCloseComment(id){
    const targetTweetObj = menuArray.filter(item => item.id == id)[0]
    document.getElementById(`comments-${targetTweetObj.id}`).style.display = "none"
   
}

function handleOpenComments(id){
    const targetTweetObj = menuArray.filter(item => item.id == id)[0]
    document.getElementById(`comments-${targetTweetObj.id}`).style.display = "flex"
    
}
function handleClickRemove(id){
    const targetTweetObj = menuArray.filter(item => item.id == id)[0]
    targetTweetObj.quality = 0
    render()
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
}

function getHtmlMenu(arr){
   return  arr.map(item => {
    let commentshtml = item.rate.map(commensts =>{
        return `
        <div>
            <p><span>${commensts.user}:</span>${commensts.comment}</p>
        </div>   
        `
    }).join(" ")
    let ingredient = item.ingredients.join(", ")
    let classHidden = item.quality == 0 ? 'hidden' : ""
    let classDark = isDark ? 'commentsDark':"commentsLight" 
    return `<div class="food">

    <div class="comments ${classDark}" id='comments-${item.id}'>
            <div class='nameitem'>
            <h6>${item.name}</h6>
            </div>
            <div class="comment">
              ${commentshtml}
            </div>
            <div class="controlReply">
            <input type="text" id='inputComment-${item.id}'>
            <button class="btnSend" data-sendcomment=${item.id}>Send</button>
        </div>
        <h5 class="closebtn" data-closecomments=${item.id}>X</h5>
        </div>
                <h2>${item.emoji}</h2>
                <div class="info">
                <h4>${item.name}</h4>
                <p>${ingredient}</p>
                <i class="fa-regular fa-comment" data-opencomment=${item.id}></i>
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
