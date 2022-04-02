// // C.R.U.D.
// //     create read update delete
// //     post   get  put    delete
//
// const getBTN = document.getElementById('getBTN');
// const userID = document.getElementById('input');
// const url = "https://jsonplaceholder.typicode.com/posts";
//
// // fetch(url)
// //     .then(response => getBTN.onclick = () => {
// //     fetch(`${url}/${userID.value}`)
// //     .then(response => response.json())
// //     .then(data => console.log(data))
// //     .catch(Error => console.log(Error))
// // ;
// // })
// //     .catch(Error => console.log(Error))
// // ;
// const post = {
//     userId: 1,
//     test: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     testBody: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   };
//
function putFunc() {
    const id = userID.value;
    fetch(`${url}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
}
// getBTN.onclick = () => {
//     putFunc()
// };