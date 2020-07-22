console.log("Question: 3");

// fetch data
console.log("fetch data===========");

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data));



    // fetch data and 
        
    const myPost = {
        title: 'A post about true facts',
        body: '42',
        userId: 2,
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(myPost),
        headers: {
        'Content-Type': 'application/json'
        }
    };
    
    fetch('https://jsonplaceholder.typicode.com/todos/', options)
    .then(res => {
        if (res.ok) {
        return res.json();
        }
         else {
        return Promise.reject({ status: res.status, statusText: res.statusText });
        }
    })
       .then(res => console.log(res))
    .catch(err => console.log('Error, with message:', err.statusText));

    
    // const completed = true;
    // if(completed = true){
    //     console.log(`${completed}`);
    // }
