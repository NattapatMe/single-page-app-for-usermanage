function getuser (){
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
};

export default {
    getuser
};
