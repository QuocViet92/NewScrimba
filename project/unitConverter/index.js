

const convervalue = document.getElementById('inner-result')
const metterFeet = document.getElementById('metter-feet')
const litGalon = document.getElementById('lit-galon')
const kiloPound = document.getElementById('kilo-pound') 
const darkmode = document.getElementById('mode')

function conver(a,b,name,nameConver){
    let convera = a*b
    let converb = a/b
    return `${a} ${name}  =  ${convera.toFixed(3) } ${nameConver} | ${a} ${nameConver}  =  ${converb.toFixed(3)} ${name}`
}

function renderConver(){
    metterFeet.textContent = conver(convervalue.value,3.281,"metters","feet")
    litGalon.textContent = conver(convervalue.value,0.264,"liters","gallons")
    kiloPound.textContent = conver(convervalue.value,2.204,"kilos",'pounds')
}

darkmode.addEventListener('click',function(){
    if(darkmode.checked){
        document.getElementById('result').style.background = '#1F2937'
        logic('boxResult',"h3","#CCC1FF")
        logic('boxResult',"p",'white')
        document.querySelectorAll('div.boxResult').forEach(div => {
            div.style.backgroundColor = '#273549';
          })
          document.getElementById('textMode').textContent ="Light Mode"

    }
        else{
            document.getElementById('result').style.background = '#F4F4F4'
            logic('boxResult',"h3","#5A537B")
            logic('boxResult',"p",'black')
            document.querySelectorAll('div.boxResult').forEach(div => {
                div.style.backgroundColor = 'white';
              })
            document.getElementById('textMode').textContent ="Dark Mode"
        }
})

function logic(className,tag,color){
const divsWithHelloClass = document.querySelectorAll(`div.${className}`);
divsWithHelloClass.forEach(div => {
  const h3Element = div.querySelector(tag);
  if (h3Element) {
    h3Element.style.color = color; 
  }
});
}
