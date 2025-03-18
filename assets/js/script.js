const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
        <header>
            <a href="index.html"><h1>Site Name</h1></a>
        </header>
    `;
}

createHeader();

const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
        <nav>
            <a href="category.html">Category 1</a>
            <a href="category.html">Category 2</a>
            <a href="category.html">Category 3</a>
            <a href="category.html">Category 4</a>
            <a href="category.html">Category 1</a>
        </nav>
    `;
}

createNav();

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    
    `;
}

createFooter();