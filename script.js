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
              'Layar: 14.1\'\' FHD 1920*1080 IPS Touchscreen: G+FF 10 points, goodix IC GT7387P, support active pen',
              'Prosesor: Intel Core i3 -1115G4',
              'Graphic: Card Intel UHD',
              'RAM: 8 GB onboard',
              'Storage: PCIE 256 GB SSD upgradable',
              'Konektivitas: WIFI Intel AC 9461 802.11 a/b/g/n/ac Bluetooth V5.1',
              'Port: 1x Type C 3.0 full Function,  1x Micro SD,  1x USB 3.0,  1x DC Port,  1x Jack Earphone 3.5mm',
              'Baterai: Polymer 11.4V 4500mAH'
          ],
          price: 'Rp.5.900.000', 
          image: 'images/product1.webp' 
        },
        { 
            id: 2, 
            name: 'HP 245 G10', 
            description: [
                'Layar: 35.6 cm (14") diagonal, HD (1366 x 768), narrow bezel, anti-glare, 250 nits, 45% NTSC',
                'Prosesor: AMD Ryzen™ 3 7320U (up to 4.1 GHz max boost clock, 4 MB L3 cache, 4 cores, 8 threads)',
                'Graphic: Card AMD Radeon™ Graphics vega 7',
                'RAM: 8 GB DDR4-3200 MHz RAM (onboard)',
                'Storage: 256 GB PCIe® NVMe™ SSD',
                'Konektivitas: Realtek Wi-Fi 6 (2x2) and Bluetooth®️ 5.3 wireless card',
                'Port: 1 USB Type-C® 5Gbps signaling rate; 2 USB Type-A 5Gbps signaling rate; 1 AC power; 1 HDMI 1.4b; 1 stereo headphone/microphone combo jack',
                'Baterai: HP Long Life 3-cell, 41 Wh Li-ion'
            ],
            price: 'Rp.5.400.000', 
            image: 'images/product2.webp' 
        },
        { 
            id: 3, 
            name: 'Acer Aspire 3 Slim A314', 
            description: [
                'Layar: 14″ HD 1366 x 768 resolution Acer ComfyView™ LED-backlit TFT LCD',
                'Prosesor: AMD Ryzen™ 3 7320U Quad Core processor (2.4GHz; Up To 4.1GHz)',
                'Graphic: AMD Radeon Graphics',
                'RAM: 8GB LPDDR5 (Dual Channel, Onboard)',
                'Storage: 512 GB SSD NVMe Gen3',
                'Konektivitas: Wireless 802.11ac + Bluetooth 5.0',
                'Port: 2x USB 3.2 Gen 1, 1x USB Type-C (Full Function : DC-In, Charge, Data,',
                'Baterai: 2-cell Lithium Ion (Li-Ion) 38 WH, 45 W'
            ],
            price: 'Rp.5.900.000', 
            image: 'images/product3.webp' 
        },
        { 
            id: 4, 
            name: 'Lenovo IdeaPad Slim 1 Ryzen 3 7320U', 
            description: [
                'Layar: 14" FHD (1920x1080) TN 220nits Anti-glare',
                'Prosesor: AMD Ryzen 3 7320U (4C / 8T, 2.4 / 4.1GHz, 2MB L2 / 4MB L3)',
                'Graphic: Integrated AMD Radeon 610M Graphics',
                'RAM: 8GB Soldered LPDDR5-5500',
                'Storage: 256GB SSD M.2 2242 PCIe 4.0x4 NVMe',
                'Konektivitas: Wi-Fi 6 11ax, 2x2 + BT5.1',
                'Port: 1x USB 2.0, 1x USB 3.2 Gen 1, 1x USB-C 3.2 Gen 1 (support data transfer only), 1x HDMI 1.4b, 1x Card reader, 1x Headphone / microphone combo jack (3.5mm), 1x Power connector',
                'Baterai: Integrated 42Wh'
            ],
            price: 'Rp.5.600.000', 
            image: 'images/product4.webp' 
        },
        { 
            id: 5, 
            name: 'HP 245 G9', 
            description: [
                'Layar: 14" diagonal, HD (1366 x 768), narrow bezel, anti-glare, 250 nits, 45% NTSC',
                'Prosesor: AMD Ryzen™ 3 7320 (2.7 GHz base clock, up to 4.1 GHz max boost clock, 8 MB L3 cache, 4 cores, 8 threads)',
                'Graphic: Integrated AMD Radeon™ Graphics',
                'RAM: 8GB DDR4-3200 MHz RAM',
                'Storage: 256GB/512GB PCIe® NVMe™ SSD',
                'Konektivitas: Realtek Wi-Fi 6 (2x2) and Bluetooth®️ 5.3 wireless card',
                'Port: 1 USB Type-C® 5Gbps signaling rate; 2 USB Type-A 5Gbps signaling rate; 1 AC power; 1 HDMI 1.4b; 1 stereo headphone/microphone combo jack',
                'Baterai: HP Long Life 3-cell, 41 Wh Li-ion'
            ],
            price: 'Rp.5.400.000', 
            image: 'images/product5.webp' 
        },
        { 
            id: 6, 
            name: ' Lenovo V14 G3 Intel Core i3-1215U', 
            description: [
                'Layar: 14" FHD (1920x1080) TN 250nits Anti-glare',
                'Prosesor: Intel Core i3-1215U, 6C (2P + 4E) / 8T, P-core 1.2 / 4.4GHz, E-core 0.9 / 3.3GHz,',
                'Graphic: Intel UHD',
                'RAM: 8GB DDR4 (4 GB onboard, 4 GB SODIMM)',
                'Storage: 256 GB SSD M.2 NVMe, slot kosong SATA 2,5 inci',
                'Konektivitas: WiFi 6, Bluetooth 5.1',
                'Port: 1x Headphone / microphone combo jack (3.5mm), 1x USB 2.0, 1x Power connector, 1x Ethernet (RJ-45), 1x USB 3.2 Gen 1, 1x HDMI 1.4b, 1x USB-C 3.2 Gen 1 (support data transfer, Power Delivery 3.0 and DisplayPort 1.2)',
                'Baterai: 38 Wh'
            ],
            price: 'Rp.5.900.000', 
            image: 'images/product6.webp' 
        },
        { 
            id: 7, 
            name: ' INFINIX X2 - Intel® Core™ i3-1115G4', 
            description: [
                'Layar: 14" FHD (1920 x 1080) IPS 300 nits, Colour Gamut100% sRGB',
                'Prosesor: Intel Core i3-1115G4 (2 core 4 thread, up to 4.1 GHz)',
                'Graphic: Intel UHD',
                'RAM: 8 GB DDR4 dual channel (onboard)',
                'Storage: 256 GB M.2 NVMe PCIe 3.0',
                'Konektivitas: WiFi 5, Bluetooth 5.1',
                'Port: 1x USB-C (Data, Charging and DisplayPort), 1x USB-C (Data), 2x USB 3.0, 1x HDMI 1.4, 1x SD card slot, 1x 3.5 mm Headset and Microphone Jack',
                'Baterai: 50 Wh'
            ],
            price: 'Rp.5.500.000', 
            image: 'images/product7.webp' 
        },
        { 
            id: 8, 
            name: ' ASUS ExpertBook P1412CEA', 
            description: [
                'Layar: 14.0-inch, FHD (1920 x 1080) 16:9, TN, Anti-glare display, LED Backlit, 220nits, NTSC: 45%, Screen-to-body ratio:82 %',
                'Prosesor: Intel Core i3-1115G4 Processor 3.0 GHz (6M Cache, up to 4.1 GHz, 2 cores)',
                'Graphic: Intel UHD graphics',
                'RAM: 4GB DDR4',
                'Storage: 512GB SSD, 1x STD 2.5” SATA HDD',
                'Konektivitas: Wi-Fi 5(802.11ac) (Dual band) 2*2 + Bluetooth 4.2',
                'Port: 1x USB 3.2 Gen 1 Type-A, 1x USB 3.2 Gen 1 Type-C, 2x USB 2.0 Type-A, 1x HDMI 1.4, 1x 3.5mm Combo Audio Jack, 1x DC-in',
                'Baterai: 37WHrs, 2S1P, 2-cell Li-ion'
            ],
            price: 'Rp.5.700.000', 
            image: 'images/product8.webp' 
        },
        { 
            id: 9, 
            name: 'MSI Modern 14 C11M', 
            description: [
                'Layar: 14" FHD (1920*1080), IPS-Level',
                'Prosesor: Tiger lake i3-1115G4',
                'Graphic: UHD Graphics',
                'RAM: Onboard DDR IV 8GB (3200MHz)',
                'Storage: 512GB NVMe PCIe Gen3x4 SSD',
                'Konektivitas: Intel Wi-Fi 6 AX201(2*2 ax) + BT5.2',
                'Port: 1x Type-C USB3.2 Gen2 with PD charging, 1x Type-A USB3.2 Gen2, 1x (4K @ 30Hz) HDMI, 1x Micro SD Card Reader, 2x Type-A USB2.0, 1x Audio Combo Jack',
                'Baterai: 3 cell, 39.3Whr'
            ],
            price: 'Rp.5.700.000', 
            image: 'images/product9.webp' 
        },
        { 
            id: 10, 
            name: 'HP 240 G8', 
            description: [
                'Layar: 14" diagonal HD SVA eDP anti-glare WLED-backlit, 220 cd/m², 67% sRGB (1366 x 768)',
                'Prosesor: Intel® Core™ i3-1115G4 Processor 3.0 GHz (6M Cache, up to 4.1 GHz, 2 cores)',
                'Graphic: Intel UHD Graphics',
                'RAM: 4GB DDR4',
                'Storage: 256GB SSD',
                'Konektivitas: Wireless LAN, Bluetooth 4.0',
                'Port: 2 Super Speed USB Type-A; 1 SuperSpeed USB Type-C; 1 RJ-45; 1 headphone/microphonecombo; 1 HDMI 1.4b; 1 AC power',
                'Baterai: 3 Cell Li-on'
            ],
            price: 'Rp.5.400.000', 
            image: 'images/product10.webp' 
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
  