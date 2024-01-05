import axios from 'axios'
const form = document.querySelector("#form");
const item = document.querySelector("#item");
const uname = document.querySelector("#name");
const uphone = document.querySelector("#phoneno")
const uemail = document.querySelector("#email");

form.addEventListener("submit", onsubmit);

// async function onsubmit(event) {
//     event.preventDefault();
//     const userdata = {
//         username: `${username.value}`,
//         userphoneno: `${userphoneno.value}`,
//         email: `${email.value}`,
//     }
//     console.log(JSON.stringify(userdata));
//     // localStorage.setItem(`${JSON.stringify(userdata)}`, `${userphoneno.value}`);

//     await axios
//         .post( `http://192.168.29.221:3000/user/appointment/data`)
//         .then(response => {
//             showOutputResponse(response.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     axios
//         .get( `http://192.168.29.221:3000/user/appointment/data`)
//         .then(response => {
//             showOutputResponse(response)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

function showOutputResponse(res) {
    // creating new element li
    const newli = document.createElement("li");
    newli.className = `litag`;
    newli.setAttribute = ('id', 'list');
    newli.innerText = `${uname.value} - ${uemail.value} - ${uphone.value}`

    // creating delete button
    const delbtn = document.createElement("button");
    delbtn.className = "btn btn-danger delbtn m-2";
    delbtn.setAttribute("type", "submit");
    //delbtn.setAttribute("id", `${userdatastring}`);
    delbtn.innerHTML = "delete"

    const editbtn = document.createElement("button");
    editbtn.className = "btn btn-success editbtn m-2";
    editbtn.setAttribute("type", "submit");
    //editbtn.setAttribute("id", `${userdatastring}`);
    editbtn.innerHTML = "edit"

    //append newlist to html
    newli.appendChild(editbtn)
    newli.appendChild(delbtn);
    item.append(newli);

    //reintializing to blank
    uname.value = ``;
    uemail.value = ``;
    uphone.value = ``

}

item.addEventListener("click", onClick);

async function onClick(event) {
    event.preventDefault();
    if (event.target.classList.contains("delbtn")) {
        const dId = e.target.id
        try{
            await axios
                .get(`http://localhost:3000/user/appointments/delete/$(dId)`);
                refresh()
        }
        catch(err){
            console.log(err)
        }
        event.target.parentElement.remove();
    }
    else if (event.target.classList.contains('editbtn')) {
        //remove from local storage
        e.preventDefault();
        const eId = e.target.id
        try{
            const response = await axios.get( `http://localhost:3000/user/appointments/edit/${eId}`);
            const {uname,uemail,uphone} = response.data;
            uname.value = uname;
            uemail.value = uemail;
            uphone.value = uphone;
            await axios.get( `http://localhost:3000/user/appointments/delete/${eId}`)
            refresh();
        }catch(err){
            console.log(err)
        }
    }
}

async function refresh(){
    try{
        const response = await axios.get( `http://192.168.29.221:3000/user/appointments/data`);
        showOutputResponse(response)
    }
    catch(err){
        console.log(err)
    }
}
refresh();

