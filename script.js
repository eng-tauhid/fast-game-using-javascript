'use strict'
let randomNum = Math.trunc(Math.random()*20)+1;
let totalSocre= 20;
let userHighscore = 0;
const message= function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.score').textContent='Total helth '+ totalSocre;
document.querySelector('.chack').addEventListener('click',function(){
    const userData = Number(document.querySelector('.inputBox').value);
    console.log(typeof userData);
    if(userData<randomNum){
        if(totalSocre>1){
        // document.querySelector('.message').textContent=`too low `;
        message('too low')
        totalSocre--
        document.querySelector('.score').textContent='Total helth '+ totalSocre;
        }
        else{
            document.querySelector('.score').textContent='Total helth 0';
            // document.querySelector('.message').textContent=`lost the game `;
            message('lost the game')
        }
    }
    else if (userData>randomNum){
        if(totalSocre>1){
            document.querySelector('.message').textContent=`too high `;
            totalSocre--
            document.querySelector('.score').textContent='Total helth '+ totalSocre;
            }
            else{
                document.querySelector('.score').textContent='Total helth 0';
                document.querySelector('.message').textContent=`lost the game `;
            }
    }
    else if(randomNum==userData){
        document.querySelector('.secretNum').textContent= randomNum;
        document.querySelector('.message').textContent=`correct Number`;
        document.querySelector('.table').style.backgroundColor='rgb(68, 236, 124)';
        if(userHighscore<totalSocre){
            userHighscore=totalSocre;
            document.querySelector('.highScore').textContent='High sore is '+ userHighscore;
        }
    }
})
document.querySelector('.again').addEventListener('click',function(){
    totalSocre=20;
    document.querySelector('.score').textContent='Total helth '+ totalSocre;
    document.querySelector('.secretNum').textContent= '?';
        document.querySelector('.message').textContent=`Message Box`;
        document.querySelector('.inputBox').value='';
        randomNum = Math.trunc(Math.random()*20)+1;
        document.querySelector('.table').style.backgroundColor='rgb(238, 91, 206)';
        console.log(randomNum);
})