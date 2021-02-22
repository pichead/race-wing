let userList = document.querySelector('#user');

function rederUser(doc){
    let div = document.createElement('div');
    let name = document.createElement('span');
    let tel = document.createElement('span');
    let email = document.createElement('span');
    
    div.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    tel.textContent = doc.data().tel;
    email.textContent = doc.data().email;

    div.appendChild(name);
    div.appendChild(tel);
    div.appendChild(email);
    userList.appendChild(div);
}

db.collection('users').get().then(user => {
    user.docs.forEach(doc => {
        console.log(doc.data())
        rederUser(doc);
    })
});