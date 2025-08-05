function appendValue(value)
{
    document.getElementById('result').value+=value;
    playClickSound();
    changeButttonColors();
}

function clearResult()
{
    document.getElementById('result').value="";
    playClickSound();
    changeButttonColors();

}

function calculateResult()
{
    let resultBox = document.getElementById('result');
    let expression = resultBox.value;
    try{
        resultBox.value = eval(expression);
        flashDisplay();
    }
    catch{
        resultBox.value = "Error";
        flashDisplay();
    }
     playClickSound();
    changeButttonColors();
}

//play button click sound
function playClickSound(){
    const sound = document.getElementById("clickSound");
    if(sound){
    
    
    sound.currentTime = 0;
    sound.play();
    }
}

//Change button colors randmoly
function changeButttonColors()
{
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button =>
    {
        button.style.backgroundColor = getRandomColor();
    });
}

//Generate random hex color
function getRandomColor()
{
    return "#" + Math.floor(Math.random()* 16777215).toString(16);
}

// Flash effect on  result display
function flashDisplay()
{
    let resultBox = document.getElementById('result');
    resultBox.classList.add('flash');
    setTimeout(() => resultBox.classList.remove('flash'), 200);
}






