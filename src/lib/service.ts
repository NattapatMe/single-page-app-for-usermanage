function getuser (){
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
};

export default {
    getuser
};
