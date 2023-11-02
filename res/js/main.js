const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const reset = document.getElementById("reset");
const upgrade = document.getElementById("upgrade");
const autoclickerUpgrade = document.getElementById("autoclicker");

let numberOfCookies = 0;
let cookieIncrease = 1;
let clickUpgradePrice=50;
let autoclickerInterval;
let autoclickerCookieIncreaseNumber = 0;

cookie.onclick = () => {
    numberOfCookies += cookieIncrease;
counter.innerText = ( "BALL "+ numberOfCookies);

}

reset.onclick = () => {
    numberOfCookies = 0;
    counter.innerText = ( "BALL "+ 0);
}

upgrade.onclick = () =>{
    if(numberOfCookies >= 40) {
        numberOfCookies -= 40;
        cookieIncrease += 1;
        counter.innerText = ( "BALL "+ numberOfCookies);
    }
}

autoclickerUpgrade.onclick = () => {
    if (numberOfCookies >= 100) {
      
      numberOfCookies -= 100;
      
      counter.innerText = "Kuřátka:" + numberOfCookies;
      autoclickerCookieIncreaseNumber++;
      
      clearInterval(autoclickerInterval);
      
      autoclickerInterval = setInterval(() => {
        numberOfCookies += autoclickerCookieIncreaseNumber;
        counter.innerText = "Kuřátka:" + numberOfCookies;
      }, 1000);
    }
  };
