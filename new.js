// Populate navigation links
const navLinksContainer = document.getElementById('nav-links');
navLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.name;
    li.appendChild(a);
    navLinksContainer.appendChild(li);
});

// Populate product list
const productListContainer = document.getElementById('product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productInfo = document.createElement('div');

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    const descriptionList = document.createElement('ul');

    product.description.forEach(item => {
        const descriptionItem = document.createElement('li');
        descriptionItem.textContent = item;
        descriptionList.appendChild(descriptionItem);
    });

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;

    productInfo.appendChild(productName);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(descriptionList);
    productInfo.appendChild(productPrice);

    productDiv.appendChild(productImage);
    productDiv.appendChild(productInfo);

    productListContainer.appendChild(productDiv);
});

// Toggle About section
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        if (link.getAttribute('href') === '#about') {
            event.preventDefault();
            document.getElementById('product-list').style.display = 'none';
            document.getElementById('about').style.display = 'block';
        } else {
            document.getElementById('product-list').style.display = 'block';
            document.getElementById('about').style.display = 'none';
        }
    });
});
});
