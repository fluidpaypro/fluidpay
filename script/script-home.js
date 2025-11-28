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

document.addEventListener("DOMContentLoaded", () => {
    const heroEl = document.getElementById("titleMessages");
    if (!heroEl) return;

    const durations = [
        3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 4000
    ]

    let index = 0;

    function showtitleMessages(){
        heroEl.classList.remove("fade-in-up");
        void heroEl.offsetWidth;

        heroEl.textContent=titleMessages[index];

        heroEl.classList.add("fade-in-up");
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