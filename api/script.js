fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
            const list = document.querySelector('ul');
            let output = "";
            for(let data of json){
                  output += '<li>$(data.name)</li>';
            }
            list.innerHTML = output;
      })




// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
// const json = response.json();
// console.log(json);