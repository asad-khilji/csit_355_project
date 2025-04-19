const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
        <header>
            <a href="index.html"><h1>Everything Chrysanthemum</h1></a>
        </header>
    `;
}

createHeader();

const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
        <nav>
            <a href="index.html">Home</a>
            <a href="category.html">Products</a>
            <a href="account.html">Account</a>
            <a href="receipt.html">Receipt</a>
            <a href="cart.html">Shopping Cart</a>
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