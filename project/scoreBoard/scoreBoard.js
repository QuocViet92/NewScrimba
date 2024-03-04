let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')
let homeScore = 0
let guestScore = 0

function homeScoreadd1Point(){
    homeScore++
    homeScoreEl.textContent = homeScore
}
function homeScoreadd2Point(){
    homeScore = homeScore + 2
    homeScoreEl.textContent = homeScore
}
function homeScoreadd3Point(){
    homeScore = homeScore + 3
    homeScoreEl.textContent = homeScore
} 
 
function guestadd1Point(){
    guestScore++
    guestScoreEl.textContent = guestScore
}
function guestadd2Point(){
    guestScore = guestScore + 2
    guestScoreEl.textContent = guestScore
}
function guestadd3Point(){
    guestScore = guestScore + 3
    guestScoreEl.textContent = guestScore
} 
