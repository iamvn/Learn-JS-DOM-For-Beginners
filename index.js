const ages = [20,22,15,33];
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Papaya"];

function printUsingForLoop()
{
      for(let j=1; j<=10; j++)
      {
       console.log(j);
      }
} 
function addTwo(a,b)
{
    console.log(`Total of ${a} and ${b} is : ${a+b}`);
}

function loadList()
{   let loopQuestionStr = document.getElementById("loopQuestion");
     loopQuestionStr.innerHTML="";
    let i = 1;
    while(i<=10)
    {
     let data = document.createElement("li");
     const node = document.createTextNode(i);
     data.appendChild(node);
     loopQuestionStr.appendChild(data);
     console.log(i);
     i++;
    }
}

function toConvertArrayToJson()
{
    let convertedStr = document.getElementById("arrayToSting");
    convertedStr.innerHTML = `${fruits.toString()}`;
}
function getCurrentDate()
{
    let showDate = document.getElementById("showDate");
    showDate.innerHTML =  new Date().toISOString().slice(0, 10);
}
function printHelloWorld()
{
    let word = document.getElementsByTagName("p")[0];
    word.innerHTML = "Hello world";
}
function getAgesAbove18()
{
    let dynamicFieldAge = document.getElementsByClassName("dynamicFieldAge");
    dynamicFieldAge[0].innerHTML ="";
    let dynamicSecAge = document.getElementsByClassName("dynamic-sec-age");
    let filterdAgeLabel  = document.createElement("label");
    let filterdAge;
    filterdAge = ages.filter((val, index)=>{
        return val >= 18
    });
    filterdAgeLabel.innerHTML = filterdAge.toString();
    dynamicFieldAge[0].appendChild(filterdAgeLabel);
    dynamicSecAge[0].classList.remove("d-none");
}
function createAForm()
{
    let dynamicField = document.getElementsByClassName("dynamicField");
    dynamicField[0].innerHTML = "";
    let dynamicSec = document.getElementsByClassName("dynamic-sec");
    let inputName  = document.createElement("input");
    let labelName = document.createElement("label");
    let inputLastName  = document.createElement("input");
    let labelLastName = document.createElement("label");
    labelName.innerHTML = "Name";
    labelName.style.color ="#ffffff";
    labelName.style.marginRight ="5px";
    inputName.value = "Vinay";
    labelLastName.innerHTML = "Last Name";
    labelLastName.style.color ="#ffffff";
    labelLastName.style.margin ="0 5px";
    inputLastName.value = "Bharti";
    dynamicField[0].appendChild(labelName);
    dynamicField[0].appendChild(inputName);
    dynamicField[0].appendChild(labelLastName);
    dynamicField[0].appendChild(inputLastName);
    dynamicSec[0].classList.remove("d-none");
}
function handleFormSubmission()
{
    let firstName, lastName;
    firstName = document.getElementById("name").value;
    lastName = document.getElementById("lastName").value;
    displayName = document.getElementById("showEntredName");
    displayName.val ="";
    displayName.value = `${firstName} ${lastName}`;
}

function changePtagBgColor()
{
    let pTagArray = document.getElementsByTagName("p");
    [...pTagArray].forEach((val, index)=>{
        val.style.background = (val.style.background === 'green') ? "white" : "green";
        val.style.color = (val.style.color === 'white') ? "black" : "white";
    })
}