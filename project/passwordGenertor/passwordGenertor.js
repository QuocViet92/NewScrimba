
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const number =  ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const renderPassFist = document.getElementById('renderfist')
const renderPassSecond = document.getElementById('rederSecond')


function radomPassword(){
const passwordLength = document.getElementById('password-length').value
const checkedNumber = document.getElementById('checkNumber').checked
const checkedSymbols = document.getElementById('checkSymbols').checked
let password1=''
let password2= ''
let passwordArr = []
    passwordArr.push(...characters)
if(checkedNumber  && checkedSymbols){
passwordArr.push(...number)
passwordArr.push(...symbols)
}
    else if(!checkedNumber && checkedSymbols){
        passwordArr.push(...symbols)
    }
        else if(checkedNumber && !checkedSymbols){
            passwordArr.push(...number)
        }

    for(let i = 0; i <passwordLength; i++){
        const numberRadom1 = Math.floor(Math.random()*passwordArr.length)
        const numberRadom2 = Math.floor(Math.random()*passwordArr.length)
        password1 +=passwordArr[numberRadom1]
        password2 +=passwordArr[numberRadom2]
    }
    renderPassFist.textContent = password1
    renderPassSecond.textContent = password2   
    
}

function copyText(){

    navigator.clipboard.writeText(renderPassFist.innerText)
        .then(() => {
            alert('Nội dung đã được sao chép thành công');
        })
        .catch((error) => {
            console.error('Lỗi khi sao chép nội dung:', error);
        });

}

const Mode = document.getElementById('darkMode')
const container = document.getElementById('containerForm')
const title = document.getElementById('textTitle')
const textInput = document.getElementById('textInput')
const textH2 = document.getElementById('textH2')

document.getElementById('darkMode').addEventListener('change',()=>{
    if(Mode.checked){
        containerForm.style.background = "#ECFDF5";
        title.style.color = '#111827';
        textH2.style.color ='#D5D4D8';
        textInput.textContent ='Dark Mode'
        textInput.style.color = "black" 
    }
        else{
            containerForm.style.background = "#1F2937";
            title.style.color = "white";
            textH2.style.color ='#6B7280';
            textInput.textContent ='Light Mode'
            textInput.style.color = "white"
        }
})
