//V2
const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);


function randomRest()
{
alert(random)
}

let rest = document.querySelector(".restsug")

rest.addEventListener('click', randomRest)



function showSkiing()
{
    let skiing = document.querySelector(".skiing")
    skiing.style.visibility = 'visible';

}
function showMainScr()
{
    let skiing = document.querySelector(".skiing")
    skiing.style.visibility = 'hidden';

}

let skin = document.querySelector(".id4")

skin.addEventListener('mouseover', showSkiing)
skin.addEventListener('mouseout', showMainScr)


function showDining()
{
    let dining = document.querySelector(".dining")
    dining.style.visibility = 'visible';

}
function showMainScrD()
{
    let dining = document.querySelector(".dining")
    dining.style.visibility = 'hidden';

}


let din = document.querySelector(".id2")


din.addEventListener('mouseover', showDining)
din.addEventListener('mouseout', showMainScrD)



function showRaceWay()
{
    let racing = document.querySelector(".raceway")
    racing.style.visibility = 'visible';

}
function showMainScrR()
{
    let racing = document.querySelector(".raceway")
    racing.style.visibility = 'hidden';

}


let rcn = document.querySelector(".id1")


rcn.addEventListener('mouseover', showRaceWay)
rcn.addEventListener('mouseout', showMainScrR)


function showNature()
{
    let nature = document.querySelector(".nature")
    nature.style.visibility = 'visible';

}
function showMainScrN()
{
    let nature = document.querySelector(".nature")
    nature.style.visibility = 'hidden';

}


let nat = document.querySelector(".withpicture")


nat.addEventListener('mouseover', showNature)
nat.addEventListener('mouseout', showMainScrN)


function showWtr()
{
    let bsh = document.querySelector(".bushkill")
    bsh.style.visibility = 'visible';

}
function showMainScrW()
{
    let bsh = document.querySelector(".bushkill")
    bsh.style.visibility = 'hidden';

}


let wtr = document.querySelector(".id3")


wtr.addEventListener('mouseover', showWtr)
wtr.addEventListener('mouseout', showMainScrW)

