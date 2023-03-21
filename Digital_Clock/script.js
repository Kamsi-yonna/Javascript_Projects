//We need to manipulate the four ids - hours, minutes, seconds and am/pm

const hourE1 = document.getElementById('hour')
const minuteE1 = document.getElementById('minutes')
const secondE1 = document.getElementById('seconds')
const ampmE1 = document.getElementById('ampm')

//We create a function to get the data from our computer
function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let ampm = 'AM'
    if (h > 12) {
        h == h - 12; //If the hour is greater than 12, then minus is by 12. so from 13, you will get 13 - 12 = 1
        ampm = "PM"; 
    }

    // h = h < 10 ? "0" + h : h; ternary method of writing ifelse
    // m = m < 10 ? "0" + m : m; ternary method of writing ifelse
    // s = s < 10 ? "0" + s : s; ternary method of writing ifelse
    //if h/m/s is less than 10 then add a "0" to it to make it 01-09

    if (h < 10) {
       h = '0' + h;
    } else {
        h = h;
    }

    if (m < 10) {
        m = '0' + m;
     } else {
         m = m;
     }
     
     if (s < 10) {
         s = '0' + s;
      } else {
          s = s;
      }

    //Just to check the results
    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;

    //We can call out the seconds function to activate every second using the timeout function
    setTimeout(() => {
        updateClock()
    }, 1000);

}
updateClock()
