const { default: axios } = require("axios");

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const form = document.querySelector('.form');
const button = document.querySelector('#booking_btn');

form.addEventListener('onSubmit',refresh(e))

function showOutput(response){
    const ultag = document.querySelector('.appointment');
    const litag = document.createElement('li');
    const delbtn = document.createElement('button');
    const editbtn = document.createElement('button');

    delbtn.style.border = 0
    editbtn.style.border = 0
    delbtn.style.backgroundColor = red
    editbtn.style.backgroundColor = green

    response.data.forEach((ele) => {
        litag.innerText = ele
        litag.appendChild(delbtn)
        litag.appendChild(editbtn)
        ultag.appendChild(litag)
    })
}


async function refresh(e){
    e.preventdefault()
    try{
        const response = await axios.get("http://localhost:8000/")
        showOutput(response)
    }catch(err){
        console.log(err)
    }
}