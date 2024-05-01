const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultOutput = document.getElementById("result");


checkBtn.addEventListener("click", () => {
    const inputValue = userInput.value.trim();

    if(inputValue === ""){
        alert("Please input a value");
        return;
    }

    //here we are taking the words, splittting it, then reverseing it, then joining it back, and lowercasing it
    const isPalidrome = inputValue.toLowerCase() === inputValue.split('').reverse().join('').toLowerCase();

    if(inputValue.toLowerCase() === 'a'){
        resultOutput.textContent = "A is a palindrome";
        resultOutput.classList.remove('hidden');
    }else if (isPalidrome) {
        resultOutput.textContent = `${inputValue} is a palidrome`;
        resultOutput.classList.remove('hidden');
    } else {
        resultOutput.textContent = `${inputValue} is not a palidrome`;
        resultOutput.classList.remove('hidden');
    }

});
