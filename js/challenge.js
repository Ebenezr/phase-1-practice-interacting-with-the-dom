//start timer on load
document.addEventListener("DOMContentLoaded", () => {
    setInterval(startTimer, 1000);
})
// Set the timer interval
let startTime = 0;


// Function to set the timer interval
const startTimer = () => {
    startTime += 1
    counter.innerHTML = startTime;   
}

const pause =document.getElementById("pause");
const minus =document.getElementById("minus");
const plus =document.getElementById("plus");
const heart =document.getElementById("heart");
const submit =document.getElementById("submit");
const commentInput =document.getElementById("comment-input");
let counter =document.getElementById("counter");
let likes =document.querySelector(".likes");
const commentContainer = document.querySelector("#list");
const form = document.querySelector("form");

//pause button function
pause.addEventListener("click", function(){
    currentvalue =document.getElementById("pause").innerText;
    (currentvalue === "pause")?(
        this.innerText = "resume",
        minus.disabled = true,
        plus.disabled = true,
        heart.disabled = true,
        submit.disabled = true
):(
        this.innerText = "pause",
        minus.disabled = false,
        plus.disabled = false,
        heart.disabled = false,
        submit.disabled = false
)
})
//plus button function
plus.addEventListener("click", function(){
 
    counter.innerText =  startTime += 1; 

});
//minus button function
minus.addEventListener("click", function(){
    
    (startTime >0)?(counter.innerText =  startTime -= 1):( startTime = 0);

});
//heart button function
heart.addEventListener("click", () => {
    const likesList = document.createElement("li");
    likesList.innerHTML = `${counterElement.innerHTML} has been liked `;
    likes.append(likesList);
})


//submit button function

const onSubmit = (e) => {
    e.preventDefault();
   
    const inputValue = e.target["comment-input"].value;
    const commentContainer = document.querySelector("#list");
    const comment = document.createElement("p");
    comment.textContent = inputValue;
    commentContainer.appendChild(comment)
    form.reset()
}

submit.addEventListener("submit", onSubmit);
  
