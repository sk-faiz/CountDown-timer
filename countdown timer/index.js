const Cdays = document.getElementById('Cdays'); // (1)
const Chours = document.getElementById('Chours'); // (1)
const Cmins = document.getElementById('Cmins'); // (1)
const Cseconds = document.getElementById('Cseconds'); // (1)

// change the H1 in the HTML to change the event name

const NewYear = '1 January 2022'; // Change this date to the new event date   

function countdown() {  //(2)
    const newYear = new Date(NewYear);
    const currentDate = new Date();
    
    const totalseconds = (newYear - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds % 60); 
   
    Cdays.innerHTML = days; // don't forget to change the constant name here too
    Chours.innerHTML = hours; // don't forget to change the constant name here too
    Cmins.innerHTML = mins; // don't forget to change the constant name here too
    Cseconds.innerHTML = seconds; // don't forget to change the constant name here too
}

countdown();

setInterval(countdown,1000);



// If you want to add another timer then just copy paste the above thing
// change the function name of the new timer(2)
// change the constant name (1)
// Copy paste the same HTML code below the previous one 
// change the id of the <p> in HTML
// change the getElementById input and set that with the same id name from new time html code  (1)