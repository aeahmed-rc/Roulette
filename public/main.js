
// let colors=['red','black']
let colors=['Red','Black']
let box=document.querySelectorAll(".box")

let btn=document.querySelector('.button')
let bank=1000

let result=document.querySelector('.result')
let click=""
box.forEach(el=>{
el.addEventListener('click',()=>{
let amount=document.querySelector('.amount').value
  if(amount==''){
  alert( "Enter Bet")
  }else{
  let click=event.target.id
  console.log(click)
  logic(click)
  }


})
})

// btn.addEventListener('click',()=>{

function logic(click){
  let colorRandom=Math.floor(Math.random()*2)
  // let color=document.querySelector(".color").value
  // console.log(color)


  let amount=document.querySelector('.amount').value
  console.log(amount)
  let earnings
  let winText
  let won

if(click===colors[colorRandom]){
  earnings = (amount * 2);
  winText = "You Win"
  won = true;
} else{
  won = false;
  earnings = -amount;
  winText = "You Lose"
}

bank += earnings;
result.innerHTML = `${bank} ${winText}`;

fetch('userInput',{
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'won': won,
            'updateMoney': earnings
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          setTimeout(function(){
    window.location.reload();
},3000);
          // window.location.reload()
        })
}


      // });
