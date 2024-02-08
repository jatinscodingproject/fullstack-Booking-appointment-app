document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const name = document.querySelector('#name');
    const emailid = document.querySelector('#email');
    const phoneno = document.querySelector('#phone');

    form.addEventListener('submit', showOutput);

    function showDetails(appointments){
        const newDiv = document.getElementById('appointments')
            const newul = document.createElement('ul');
            appointments.forEach(appointment => {
                const newli = document.createElement('li');
                const delbtn = document.createElement('button');
                const editbtn = document.createElement('button');

                delbtn.className = 'btn btn-danger';
                editbtn.className = 'btn btn-success';

                delbtn.textContent = 'delete';
                editbtn.textContent = 'edit';
                delbtn.id = appointment.id
                editbtn.id = appointment.id

                newli.textContent = `${appointment.name}-${appointment.emailid}-${appointment.phoneno}`;

                newli.appendChild(delbtn);
                newli.appendChild(editbtn);
                newul.appendChild(newli);

                delbtn.addEventListener('click', async function(){
                    const dId = delbtn.id
                    console.log(dId)
                    try{
                        await axios.get(`http://localhost:8000/appointments/delete/${dId}`)
                        refresh()
                    }catch(err){
                        console.log(err)
                    }
                })

                editbtn.addEventListener('click', async function(){
                    const eId = editbtn.id
                    try{
                        let response = await axios.get(`http://localhost:8000/appointments/edit/${eId}`)
                        const UserDetails = {
                            name:response.data.name,
                            emailid:response.data.emailid,
                            phoneno:response.data.phoneno
                        }
                        name.value = UserDetails.name
                        emailid.value = UserDetails.emailid
                        phoneno.value = UserDetails.phoneno
                        await axios.get(`http://localhost:8000/appointments/delete/${eId}`)
                        refresh()
                    }catch(err){
                        console.log(err)
                    }
                })

            });
            newDiv.appendChild(newul);
        }

    async function showOutput(e){
        e.preventDefault();
        const User = {
            name: name.value,
            emailid: emailid.value,
            phoneno: phoneno.value
        };
        try {
            const response = await axios.post('http://localhost:8000/appointments', User);
            console.log(response.data)
            let arr = []
            arr.push(response.data)
            showDetails(arr)
        } catch (err) {
            console.log(err);
        }
    }

    async function refresh(){
        try {
            const response = await axios.get('http://localhost:8000/appointments/data');
            showDetails(response.data)
        } catch (err) {
            console.log(err);
        }
    }
    refresh()
});
