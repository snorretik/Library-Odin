let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.read}`;
    }
    this.toggleRead = function() {
        this.read ? this.read = false : this.read = true;
    }
}

function addBookToLibrary(boek) {
    myLibrary.push(boek)
}

const btn = document.querySelector('#addButton');
btn.addEventListener('click', () => {
    addNewBook();
});

function addNewBook() {
    addToArray();
    buttons();
}

function addToArray() {
    let title = prompt("Please enter the title:", "");
    let author = prompt("Please enter the author:", "");
    let pages = parseInt(prompt("Please enter the number of pages", ""));
    let readStr = prompt("Have you read it yet? yes or no:");
    let read = false;
    while ((readStr !== "yes") || (readStr !== "no")) {
        if (readStr == "yes") {
            read = true;
            break
        } else if (readStr == "no") {
            read = false;
            break
        } else {
            readStr = prompt("Have you read it yet? yes or no:")
        }
    }

    const boekAdd = new Book(title, author, pages, read);
    addBookToLibrary(boekAdd);
    updateLib(boekAdd);
}

function buttons() {
    const containerDiv = document.querySelector('#container')
    const buttonAdd = document.querySelector('#addButton')

    const div = document.createElement('div');
    const pBookTitle = document.createElement('p');
    const pBookAuthor = document.createElement('p');
    const pBookPages = document.createElement('p');
    const pBookRead = document.createElement('p');
    const btn = document.createElement('button');
    const toggle = document.createElement('button');
    // const br = document.createElement('br');

    const lengLib = myLibrary.length;
        
    div.setAttribute('id', `divNmb${lengLib}`);
    div.setAttribute('style', 'margin: 20px; background-color: purple; text-align: center; border-color: black; border-width: 2px; border-style: solid; border-radius: 20px;')
    // div.textContent = `${myLibrary[lengLib - 1].title}`;
    pBookTitle.setAttribute('id', `p1Nmb${lengLib}`);
    pBookTitle.setAttribute('style', 'color: white;');
    pBookTitle.textContent = `${myLibrary[lengLib - 1].title}`;
    pBookAuthor.setAttribute('id', `p2Nmb${lengLib}`);
    pBookAuthor.setAttribute('style', 'color: white;');
    pBookAuthor.textContent = `${myLibrary[lengLib - 1].author}`;
    pBookPages.setAttribute('id', `p3Nmb${lengLib}`);
    pBookPages.setAttribute('style', 'color: white;');
    pBookPages.textContent = `${myLibrary[lengLib - 1].pages}`;
    pBookRead.setAttribute('id', `p4Nmb${lengLib}`);
    pBookRead.setAttribute('style', 'color: white;');
    pBookRead.textContent = naamFunc(`${myLibrary[lengLib - 1].read}`);
    btn.setAttribute('id', `delNmb${lengLib}`);
    btn.textContent = "Delete";
    toggle.setAttribute('id', `toggleNmb${lengLib}`);
    toggle.textContent = "Toggle read";
    // br.setAttribute('id', `brNmb${lengLib}`);

    div.appendChild(pBookTitle);
    div.appendChild(pBookAuthor);
    div.appendChild(pBookPages);
    div.appendChild(pBookRead);
    div.appendChild(btn);
    div.appendChild(toggle);
    containerDiv.insertBefore(div, buttonAdd);

    // containerDiv.appendChild(div);
    // containerDiv.appendChild(btn);
    // containerDiv.appendChild(toggle);
    // containerDiv.appendChild(br);

    btn.addEventListener('click', () => {
        myLibrary.splice(lengLib - 1, 1);

        div.removeChild(pBookTitle);
        div.removeChild(pBookAuthor);
        div.removeChild(pBookPages);
        div.removeChild(pBookRead);
        div.removeChild(btn);
        div.removeChild(toggle);
        containerDiv.removeChild(div);

        // containerDiv.removeChild(div);
        // containerDiv.removeChild(btn);
        // containerDiv.removeChild(toggle);
        // containerDiv.removeChild(br);
    })

    toggle.addEventListener('click', () => {
        myLibrary[lengLib - 1].toggleRead();
        pBookRead.textContent = naamFunc(`${myLibrary[lengLib - 1].read}`);
    })

    function naamFunc(stringRead) {
        if (stringRead == "true") {
            return "Have Read";
        } else if (stringRead == "false") {
            return "Not Read";
        } else {
            console.log(stringRead);
        }
    }
}