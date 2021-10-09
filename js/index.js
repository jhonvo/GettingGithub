function fetchuser(){
    let URL =  `https://api.github.com/users/${username}`;
    let settings = {
        method : 'GET'
    };

    fetch(URL, settings)
        .then ( response => {
            console.log (response);
            if (response.ok){
                return response.json();
            }
            throw Error (response.statusText)
        })
        .then ( data => {
            console.log ("This is data", data.avatar_url);
            let resutls = document.querySelector('.userResults');
            resutls.innerHTML = `
            <img src="${data.avatar_url}">
            `

            
        })
        .catch (error =>{
            console.log(error);
            let results = document.querySelector('.userResults');
            results.innerHTML = error;

        });

}

let username = "jhonvo"
let loadUserButton = document.querySelector('.loadUser');
loadUserButton.addEventListener('click', fetchuser);