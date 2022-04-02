const input = document.getElementById('input');
const button = document.getElementById('button');

button.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?id='+input.value)
        .then(response => console.log(response))
        .catch(Error => console.log(Error))
};

const putButton = document.getElementById('put');
const myData = {
    title: 'test',
    body: 'test body'
};
putButton.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/2', {
        method: 'PUT',
        body: JSON.stringify(myData),
        headers: {
            'Content-Type': 'application/json'
                    }}
                    )
        .then(response => console.log(response))
};