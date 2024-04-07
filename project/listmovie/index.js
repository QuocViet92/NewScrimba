

const btn =document.getElementById('search-btn')
const inputEl = document.getElementById('movie-input')
const listEl = document.getElementById('list')
let myLeads = []
let arrList = [] 
const myWachList = document.getElementById('myWacthList')
const inputFiel =document.getElementById('inputSecrch')

if(JSON.parse(localStorage.getItem("myLeads"))){
myLeads =JSON.parse(localStorage.getItem("myLeads"))
}

function renderMyWacthList(lead){
  if(myLeads == 0){
    listEl.innerHTML =  `<div class="textmwl">
    <h5>Your watchlist is looking a little empty...</h5>
    <a href="index.html">Let’s add some movies!</a>
</div>`
  }else{
    listEl.innerHTML = ""
          lead.forEach(item => {
          fetch(`http://www.omdbapi.com/?apikey=3f9608a5&i=${item}`)
          .then(res => res.json())
          .then(info =>{
              listEl.innerHTML += `<div class="boxmovie">
              <img src=${info.Poster} alt="">
              <div class="infomovie">
                <h1>${info.Title}</h1>
                <div class="timemovie">
                  <p>${info.Runtime}</p>
                  <p>${info.Genre}</p>
                  <a data-detele=${item} id=${item}>- Watchlist</a>
                </div>
                <p class='textColor'>${info.Plot}</p>
              </div>
            </div>
             
            `
          })
      })
    }
  }

  const btnswap =document.getElementById('searchList')
  if(btnswap){
  btnswap.addEventListener('click',function(){
    renderMyWacthList(myLeads)
    listEl.innerHTML = ''
    
  })
  inputFiel.style.display= "none"
  renderMyWacthList(myLeads)

  
}
 

console.log(myLeads)

btn.addEventListener('click',async function(){
 
    listEl.innerHTML =''
    const res = await   fetch(`http://www.omdbapi.com/?apikey=3f9608a5&s=${inputEl.value}`)
    const data = await res.json()
        console.log(data.Response)
        
        if(data.Response !== undefined && data.Response !== 'False'){
            data.Search.forEach(item => {
              arrList.push({id:item.imdbID,save:false})
            })
            
            renderList(arrList)
            
        }else{
            listEl.innerHTML =`<div class="textmwl">
            <p>Unable to find what you’re looking for. Please try another search.</p>
            </div>`
        }
        
    
})

function renderList(arr){
    if(myLeads){
  for(let i of arr){
    for(let j of myLeads){
      if(i.id == j){
        i.save = !i.save
      }
    }
  }
}
    listEl.innerHTML = ""
        arr.forEach(item => {
        fetch(`http://www.omdbapi.com/?apikey=3f9608a5&i=${item.id}`)
        .then(res => res.json())
        .then(info =>{
          let save = item.save ? '-' : "+"
            listEl.innerHTML += `<div class="boxmovie">
            <img src=${info.Poster} alt="">
            <div class="infomovie">
              <h1>${info.Title}</h1>
              <div class="timemovie">
                <p>${info.Runtime}</p>
                <p>${info.Genre}</p>
                <a data-save=${item.id} id=${item.id}>${save}Watchlist</a>
              </div>
              <p class='textColor'>${info.Plot}</p>
            </div>
          </div>
           
          `
        })
    })
}

document.addEventListener('click',function(e){
  if(e.target.dataset.save){
    saveList(e.target.dataset.save)
  }else if(e.target.dataset.detele){
    console.log(e.target.dataset.detele)
    handleDeleteMyList(e.target.dataset.detele)
  }
})

function handleDeleteMyList(item){
   myLeads = myLeads.filter(items => items !==item)
   localStorage.setItem("myLeads",JSON.stringify(myLeads))
   renderMyWacthList(myLeads)
}

function saveList(item){
  console.log(item)
  console.log(arrList)

  const current = arrList.filter(items =>  items.id == item)[0]
  current.save = !current.save
  
  if(current.save){
    document.getElementById(`${item}`).innerHTML = '- Watchlist'
    myLeads.push(item)
    console.log(current.save)
  }else{
    document.getElementById(`${item}`).innerHTML = '+ Watchlist'
   myLeads   = myLeads.filter(items => items !== item )
  }
  
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  console.log(myLeads)
  
}