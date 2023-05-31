const root =  document.querySelector("#root")
const btn = document.querySelectorAll("button")

const url = 'https://swapi.dev/api'

const endpoints = {
    star:"/starships",
    planet:"/planets",
    peop:"/people"
    
}

async function render() {
    const req = await fetch(url+endpoints.star)
    const data = await req.json()
    console.log("data: ", data.results);
    show(data.results)
}


btn[0].onclick=()=>{
    render()
}

function show(users) {
    root.innerHTML=''

    for (const tit of users) {
        root.innerHTML+=`
        <div class='planet'>
        <h1>name: ${tit.name}</h1>
        <h1>class: ${tit.starship_class}</h1>
        <h1>consumables: ${tit.consumables}</h1>

        </div>
    `
    }
    
}



async function starsh() {
    const wer = await fetch(url+endpoints.planet)
    const dat = await wer.json()
    console.log("dat: ", dat.results);
    strr(dat.results)
}


btn[1].onclick=()=>{
    starsh()
}

function strr(perr){
    root.innerHTML=''

    for (const item of perr) {
        root.innerHTML+=`
        <div class='planet'>
    <h1>name: ${item.name}</h1>
    <h1>created: ${item.created}</h1>
    <h1>population: ${item.population}</h1>
</div>
        `
    }
}


async function  people() {
    const wek = await fetch(url+endpoints.peop)
    const san = await wek.json()
    console.log("san: ", san.results);
    showPeople(san.results)

}



function showPeople(peo) {
    root.innerHTML=''
    for (const peol of peo) {
        root.innerHTML+=`
        <div class='planet'>
        <h1>name: ${peol.name}</h1>
        <h1>height: ${peol.height}</h1>
        <h1>mass: ${peol.mass}</h1>
        <h1>gender: ${peol.gender}</h1>
        </div>
        `
    }
}

btn[2].onclick=()=>{
    people()
}