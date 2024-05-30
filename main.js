document.addEventListener('DOMContentLoaded', () => {
  const navLinks = [
      { name: 'Home', href: '#' },
      { name: 'Products', href: '#' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#' },
  ];

  const products = [
      { 
        id: 1, 
        name: 'Advan 360 Stylus', 
        description: [
            'Layar 14.1\'\' FHD 1920*1080 IPS Touchscreen: G+FF 10 points, goodix IC GT7387P, support active pen',
            'Prosesor Intel Core i3 -1115G4',
            'Graphic Card Intel UHD',
            'RAM 8 GB onboard',
            'Storage PCIE 256 GB SSD upgradable',
            'Konektivitas WIFI Intel AC 9461 802.11 a/b/g/n/ac Bluetooth V5.1',
            'Port 1x Type C 3.0 full Function,  1x Micro SD,  1x USB 3.0,  1x DC Port,  1x Jack Earphone 3.5mm',
            'Baterai Polymer 11.4V 4500mAH'
        ],
        price: 'Rp.5.900.000', 
        image: 'images/product1.webp' 
      },
      { 
          id: 2, 
          name: 'Product 2', 
          description: [
              'Morbi commodo nulla id velit fringilla, nec posuere felis commodo.',
              'Sed non elit ac purus dignissim elementum.',
              'Etiam finibus eros at nisi venenatis, id scelerisque mi sagittis.',
              'Nullam tincidunt ligula nec justo luctus, eget maximus ante suscipit.'
          ],
          price: '$20', 
          image: 'images/product2.jpg' 
      },
      // Tambahkan produk lainnya...
  ];

  // Inject CSS styles
  const style = document.createElement('style');
  style.textContent = `
      body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      header {
          background-color: #333;
          color: white;
          padding: 10px 20px;
          text-align: center;
      }

      nav ul {
          list-style-type: none;
          padding: 0;
      }

      nav ul li {
          display: inline;
          margin: 0 10px;
      }

      nav ul li a {
          color: white;
          text-decoration: none;
      }

      main {
          padding: 20px;
      }

      .product {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left; /* Ubah menjadi kiri */
    }

    .product img {
      width: 200px;
      margin-bottom: 10px;
  }

    .product-description {
        margin-top: 10px;
        padding-left: 0; /* Hapus padding */
        list-style: none; /* Hapus bullet points */
    }

    .product-description li {
        margin-bottom: 5px; /* Beri sedikit spasi antar item */
    }
    
      footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 10px 0;
          position: fixed;
          width: 100%;
          bottom: 0;
      }

      #about {
          padding: 20px;
          background-color: #f9f9f9;
          border: 1px solid #ccc;
          margin: 10px 0;
      }
  `;
  document.head.appendChild(style);

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
