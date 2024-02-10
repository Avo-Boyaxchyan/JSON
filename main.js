let data = localStorage.getItem('myList');
let myList = [];

if(data !== '' && data !== null) {
    myList = JSON.parse(data);
}



const createNewMsg = (obj) => {
    const list = document.createElement('div');
    list.classList.add('my-list');
    document.getElementById('top-btn').appendChild(list);
    
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = obj.name;

    const pgf = document.createElement('p');
    pgf.classList.add('pgf');
    pgf.textContent = obj.msg;

    const del = document.createElement('button');
    del.classList.add('del');
    del.textContent = 'Удалить';

    del.addEventListener('click', (event) => {
        const index = myList.indexOf(obj);
        if (index !== -1) {
            myList.splice(index, 1);
           
            localStorage.setItem('myList', JSON.stringify(myList));
            
            list.remove();
        }   
    })

   
    list.append(title);
    list.append(pgf);
    list.append(del);

}

for(const msg of myList) {
    createNewMsg(msg);
}

document.querySelector('.add-btn').addEventListener('click', (event) => {
    event.preventDefault();

    let userName = document.querySelector('.add-inp').value;
    let msg = document.querySelector('.add-text').value;

    const msgObj = {
        name: userName,
        msg: msg,
    }
    

   
    myList.push(msgObj);
    localStorage.setItem('myList', JSON.stringify(myList));

    createNewMsg(msgObj);

    document.querySelector('.add-inp').value = '';
    document.querySelector('.add-text').value = '';
})

