
let colors=['red','black']


let btn=document.querySelector('.button')
let bank=1000

let result=document.querySelector('.result')


btn.addEventListener('click',()=>{
alert('hi')

  let colorRandom=Math.floor(Math.random()*2)
  let color=document.querySelector(".color").value
  console.log(color)


  let amount=document.querySelector('.amount').value
  console.log(amount)
  let earnings
  let winText
  let won

if(color===colors[colorRandom]){
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
          window.location.reload(true)
        })
      });
let btn2=document.querySelector('.btn-default')
btn2.addEventListener('click',()=>{
  alert('hi')
  let hide=document.querySelector('.hide').style.display='none'
})
