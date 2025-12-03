//Java script created by John Selvin John for the home page//

//below shows the array of messages created to be circulated in the homepage as an overlay to the background video - https://www.w3schools.com/js/js_arrays.asp//
const titleMessages = ["In a world that moves faster than ever…", 
    "payments shouldn’t slow you down", 
    "Introducing FluidPay", 
    "the power to send, receive, and convert money… instantly.", 
    "Anywhere, Anytime, Any Currency", 
    "Secure, transparent, and lightning-fast", 
    "Driven by AI. Designed for agility", 
    "FluidPay adapts like liquid",
    "flowing wherever business takes you.",
    "Payments, Redefined."];


document.addEventListener("DOMContentLoaded",() => { //DOMContentLoaded is used to ensure that the event is triggered only after the content is fully loaded// 
    const heroEl = document.getElementById("titleMessages");

    const durations = [
        3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 4000 //to specify the timing for each of the message - https://www.w3schools.com/js/js_timing.asp//
    ]

    let index = 0;// to start with first message from titlemessages array

    function showtitleMessages(){
        heroEl.classList.remove("fade-in-up");//to clear the previous animation
        void heroEl.offsetWidth;

        heroEl.textContent=titleMessages[index];//helps to loop through the list of messages in the array

        heroEl.classList.add("fade-in-up");//loads the animation again
    }

    function scheduleNext(){
        const currentDuration = durations[index];
        setTimeout(()=>{
            index=(index+1)%titleMessages.length;
            showtitleMessages();
            scheduleNext();
        }, currentDuration);
    }
    showtitleMessages();
    scheduleNext();
});