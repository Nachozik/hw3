const showUsers = document.getElementById('showUsers');
const url = "https://jsonplaceholder.typicode.com/users";

let arr = fetch(url)
    .then(response => {
        if (response.ok)
            return response.json();
        else throw Error('error')
    })
    .then(data => {
        arr = data;
        console.log(arr);
        arr.forEach(user => {
            showUsers.innerHTML+=`<div data-id${user.id}>
        <h4>${user.name}</h4>
        <h4>${user.username}</h4>
        <p>${user.email}</p>
        <div class="address">
            <p>
                street:${user.address.street}
                suite:${user.address.suite}
                city:${user.address.city}
                zipcode:${user.address.zipcode}
            </p>
            <div class="geo">
                <p>
                    geo: lat:${user.address.geo.lat}, lng:${user.address.geo.lng}
                </p>
            </div>
            <a href="tel:+${user.phone}">phone:+${user.phone}</a>
            <a href="${user.website}">website:${user.website}</a>
            <div class="company">
                <h2>${user.company.name}</h2>
                <h3>${user.company.catchPhrase}</h3>
                <h4>${user.company.bs}</h4>
            </div>
        </div>
    </div>`
        })
    })
    .catch(error => console.log(error));

const sureNameInput = document.getElementById('sureNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const sendPostButton = document.getElementById('sendPostButton');

sendPostButton.onclick = () => {
    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: sureNameInput.value+ " "+ lastNameInput.value})
})
    .then(response => response.json())
    .then(post => console.log(post))
;
};