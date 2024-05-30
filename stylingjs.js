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