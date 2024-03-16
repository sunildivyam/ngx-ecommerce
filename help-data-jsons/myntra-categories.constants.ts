/* Function extract Myntera menu



function getItems(items) {
    const mainCats = [];

    for (let item of items) {
        const cat = {
            text: item.querySelector('a')?.textContent || '',
            children: []
        };

        const children = item.querySelectorAll('.desktop-navBlock');
        for (let catEl of children) {
            const subCat = {
                text: catEl.querySelector('.desktop-categoryName')?.textContent || '',
                tagName: catEl.tagName,
                children: (() => {
                    const subCats = catEl.querySelectorAll('.desktop-categoryLink');
                    const subCatsChs = [];
                    for (let subCatItem of subCats) {
                        subCatsChs.push({
                            tagName: subCatItem.tagName,
                            text: subCatItem.textContent
                        })
                    }
                    return subCatsChs;
                })(),
            }
            cat.children.push(subCat);
        }
        mainCats.push(cat);
    }
    return mainCats;
}

let categories = getItems($0.querySelectorAll('.desktop-navLink'));


*/

export const MYNTRA_CATEGORIES = [
  {
    text: 'Men',
    children: [
      {
        text: 'Topwear',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'T-Shirts',
          },
          {
            tagName: 'A',
            text: 'Casual Shirts',
          },
          {
            tagName: 'A',
            text: 'Formal Shirts',
          },
          {
            tagName: 'A',
            text: 'Sweatshirts',
          },
          {
            tagName: 'A',
            text: 'Sweaters',
          },
          {
            tagName: 'A',
            text: 'Jackets',
          },
          {
            tagName: 'A',
            text: 'Blazers & Coats',
          },
          {
            tagName: 'A',
            text: 'Suits',
          },
          {
            tagName: 'A',
            text: 'Rain Jackets',
          },
          {
            tagName: 'A',
            text: 'Kurtas & Kurta Sets',
          },
          {
            tagName: 'A',
            text: 'Sherwanis',
          },
          {
            tagName: 'A',
            text: 'Nehru Jackets',
          },
          {
            tagName: 'A',
            text: 'Dhotis',
          },
        ],
      },
      {
        text: 'Bottomwear',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Jeans',
          },
          {
            tagName: 'A',
            text: 'Casual Trousers',
          },
          {
            tagName: 'A',
            text: 'Formal Trousers',
          },
          {
            tagName: 'A',
            text: 'Shorts',
          },
          {
            tagName: 'A',
            text: 'Track Pants & Joggers',
          },
          {
            tagName: 'A',
            text: 'Briefs & Trunks',
          },
          {
            tagName: 'A',
            text: 'Boxers',
          },
          {
            tagName: 'A',
            text: 'Vests',
          },
          {
            tagName: 'A',
            text: 'Sleepwear & Loungewear',
          },
          {
            tagName: 'A',
            text: 'Thermals',
          },
        ],
      },
      {
        text: 'Footwear',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Casual Shoes',
          },
          {
            tagName: 'A',
            text: 'Sports Shoes',
          },
          {
            tagName: 'A',
            text: 'Formal Shoes',
          },
          {
            tagName: 'A',
            text: 'Sneakers',
          },
          {
            tagName: 'A',
            text: 'Sandals & Floaters',
          },
          {
            tagName: 'A',
            text: 'Flip Flops',
          },
          {
            tagName: 'A',
            text: 'Socks',
          },
        ],
      },
      {
        text: 'Sports & Active Wear',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Sports Shoes',
          },
          {
            tagName: 'A',
            text: 'Sports Sandals',
          },
          {
            tagName: 'A',
            text: 'Active T-Shirts',
          },
          {
            tagName: 'A',
            text: 'Track Pants & Shorts',
          },
          {
            tagName: 'A',
            text: 'Tracksuits',
          },
          {
            tagName: 'A',
            text: 'Jackets & Sweatshirts',
          },
          {
            tagName: 'A',
            text: 'Sports Accessories',
          },
          {
            tagName: 'A',
            text: 'Swimwear',
          },
          {
            tagName: 'A',
            text: 'Smart Wearables',
          },
          {
            tagName: 'A',
            text: 'Fitness Gadgets',
          },
          {
            tagName: 'A',
            text: 'Headphones',
          },
          {
            tagName: 'A',
            text: 'Speakers',
          },
        ],
      },
      {
        text: 'Fashion Accessories',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Wallets',
          },
          {
            tagName: 'A',
            text: 'Belts',
          },
          {
            tagName: 'A',
            text: 'Perfumes & Body Mists',
          },
          {
            tagName: 'A',
            text: 'Trimmers',
          },
          {
            tagName: 'A',
            text: 'Deodorants',
          },
          {
            tagName: 'A',
            text: 'Ties, Cufflinks & Pocket Squares',
          },
          {
            tagName: 'A',
            text: 'Accessory Gift Sets',
          },
          {
            tagName: 'A',
            text: 'Caps & Hats',
          },
          {
            tagName: 'A',
            text: 'Mufflers, Scarves & Gloves',
          },
          {
            tagName: 'A',
            text: 'Phone Cases',
          },
          {
            tagName: 'A',
            text: 'Rings & Wristwear',
          },
          {
            tagName: 'A',
            text: 'Helmets',
          },
        ],
      },
    ],
  },
  {
    text: 'Women',
    children: [
      {
        text: 'Indian & Fusion Wear',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Kurtas & Suits',
          },
          {
            tagName: 'A',
            text: 'Kurtis, Tunics & Tops',
          },
          {
            tagName: 'A',
            text: 'Sarees',
          },
          {
            tagName: 'A',
            text: 'Ethnic Wear',
          },
          {
            tagName: 'A',
            text: 'Leggings, Salwars & Churidars',
          },
          {
            tagName: 'A',
            text: 'Skirts & Palazzos',
          },
          {
            tagName: 'A',
            text: 'Dress Materials',
          },
          {
            tagName: 'A',
            text: 'Lehenga Cholis',
          },
          {
            tagName: 'A',
            text: 'Dupattas & Shawls',
          },
          {
            tagName: 'A',
            text: 'Jackets',
          },
        ],
      },
      {
        text: 'Western Wear',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Dresses',
          },
          {
            tagName: 'A',
            text: 'Tops',
          },
          {
            tagName: 'A',
            text: 'Tshirts',
          },
          {
            tagName: 'A',
            text: 'Jeans',
          },
          {
            tagName: 'A',
            text: 'Trousers & Capris',
          },
          {
            tagName: 'A',
            text: 'Shorts & Skirts',
          },
          {
            tagName: 'A',
            text: 'Co-ords',
          },
          {
            tagName: 'A',
            text: 'Playsuits',
          },
          {
            tagName: 'A',
            text: 'Jumpsuits',
          },
          {
            tagName: 'A',
            text: 'Shrugs',
          },
          {
            tagName: 'A',
            text: 'Sweaters & Sweatshirts',
          },
          {
            tagName: 'A',
            text: 'Jackets & Coats',
          },
          {
            tagName: 'A',
            text: 'Blazers & Waistcoats',
          },
        ],
      },
      {
        text: 'Maternity',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Flats',
          },
          {
            tagName: 'A',
            text: 'Casual Shoes',
          },
          {
            tagName: 'A',
            text: 'Heels',
          },
          {
            tagName: 'A',
            text: 'Boots',
          },
          {
            tagName: 'A',
            text: 'Sports Shoes & Floaters',
          },
          {
            tagName: 'A',
            text: 'Clothing',
          },
          {
            tagName: 'A',
            text: 'Footwear',
          },
          {
            tagName: 'A',
            text: 'Sports Accessories',
          },
          {
            tagName: 'A',
            text: 'Sports Equipment',
          },
        ],
      },
      {
        text: 'Lingerie & Sleepwear',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Bra',
          },
          {
            tagName: 'A',
            text: 'Briefs',
          },
          {
            tagName: 'A',
            text: 'Shapewear',
          },
          {
            tagName: 'A',
            text: 'Sleepwear & Loungewear',
          },
          {
            tagName: 'A',
            text: 'Swimwear',
          },
          {
            tagName: 'A',
            text: 'Camisoles & Thermals',
          },
          {
            tagName: 'A',
            text: 'Makeup',
          },
          {
            tagName: 'A',
            text: 'Skincare',
          },
          {
            tagName: 'A',
            text: 'Premium Beauty',
          },
          {
            tagName: 'A',
            text: 'Lipsticks',
          },
          {
            tagName: 'A',
            text: 'Fragrances',
          },
        ],
      },
      {
        text: 'Gadgets',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Smart Wearables',
          },
          {
            tagName: 'A',
            text: 'Fitness Gadgets',
          },
          {
            tagName: 'A',
            text: 'Headphones',
          },
          {
            tagName: 'A',
            text: 'Speakers',
          },
          {
            tagName: 'A',
            text: 'Fashion Jewellery',
          },
          {
            tagName: 'A',
            text: 'Fine Jewellery',
          },
          {
            tagName: 'A',
            text: 'Earrings',
          },
        ],
      },
    ],
  },
  {
    text: 'Kids',
    children: [
      {
        text: 'Boys Clothing',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'T-Shirts',
          },
          {
            tagName: 'A',
            text: 'Shirts',
          },
          {
            tagName: 'A',
            text: 'Shorts',
          },
          {
            tagName: 'A',
            text: 'Jeans',
          },
          {
            tagName: 'A',
            text: 'Trousers',
          },
          {
            tagName: 'A',
            text: 'Clothing Sets',
          },
          {
            tagName: 'A',
            text: 'Ethnic Wear',
          },
          {
            tagName: 'A',
            text: 'Track Pants & Pyjamas',
          },
          {
            tagName: 'A',
            text: 'Jacket, Sweater & Sweatshirts',
          },
          {
            tagName: 'A',
            text: 'Party Wear',
          },
          {
            tagName: 'A',
            text: 'Innerwear & Thermals',
          },
          {
            tagName: 'A',
            text: 'Nightwear & Loungewear',
          },
          {
            tagName: 'A',
            text: 'Value Packs',
          },
        ],
      },
      {
        text: 'Girls Clothing',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Dresses',
          },
          {
            tagName: 'A',
            text: 'Tops',
          },
          {
            tagName: 'A',
            text: 'Tshirts',
          },
          {
            tagName: 'A',
            text: 'Clothing Sets',
          },
          {
            tagName: 'A',
            text: 'Lehenga choli',
          },
          {
            tagName: 'A',
            text: 'Kurta Sets',
          },
          {
            tagName: 'A',
            text: 'Party wear',
          },
          {
            tagName: 'A',
            text: 'Dungarees & Jumpsuits',
          },
          {
            tagName: 'A',
            text: 'Skirts & shorts',
          },
          {
            tagName: 'A',
            text: 'Tights & Leggings',
          },
          {
            tagName: 'A',
            text: 'Jeans, Trousers & Capris',
          },
          {
            tagName: 'A',
            text: 'Jacket, Sweater & Sweatshirts',
          },
          {
            tagName: 'A',
            text: 'Innerwear & Thermals',
          },
          {
            tagName: 'A',
            text: 'Nightwear & Loungewear',
          },
          {
            tagName: 'A',
            text: 'Value Packs',
          },
        ],
      },
      {
        text: 'Footwear',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Casual Shoes',
          },
          {
            tagName: 'A',
            text: 'Flipflops',
          },
          {
            tagName: 'A',
            text: 'Sports Shoes',
          },
          {
            tagName: 'A',
            text: 'Flats',
          },
          {
            tagName: 'A',
            text: 'Sandals',
          },
          {
            tagName: 'A',
            text: 'Heels',
          },
          {
            tagName: 'A',
            text: 'School Shoes',
          },
          {
            tagName: 'A',
            text: 'Socks',
          },
          {
            tagName: 'A',
            text: 'Learning & Development',
          },
          {
            tagName: 'A',
            text: 'Activity Toys',
          },
          {
            tagName: 'A',
            text: 'Soft Toys',
          },
          {
            tagName: 'A',
            text: 'Action Figure / Play set',
          },
        ],
      },
      {
        text: 'Infants',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Bodysuits',
          },
          {
            tagName: 'A',
            text: 'Rompers & Sleepsuits',
          },
          {
            tagName: 'A',
            text: 'Clothing Sets',
          },
          {
            tagName: 'A',
            text: 'Tshirts & Tops',
          },
          {
            tagName: 'A',
            text: 'Dresses',
          },
          {
            tagName: 'A',
            text: 'Bottom wear',
          },
          {
            tagName: 'A',
            text: 'Winter Wear',
          },
          {
            tagName: 'A',
            text: 'Innerwear & Sleepwear',
          },
          {
            tagName: 'A',
            text: 'Infant Care',
          },
        ],
      },
      {
        text: 'Kids Accessories',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Bags & Backpacks',
          },
          {
            tagName: 'A',
            text: 'Watches',
          },
          {
            tagName: 'A',
            text: 'Jewellery & Hair accessory',
          },
          {
            tagName: 'A',
            text: 'Sunglasses',
          },
          {
            tagName: 'A',
            text: 'Masks & Protective Gears',
          },
          {
            tagName: 'A',
            text: 'Caps & Hats',
          },
          {
            tagName: 'A',
            text: 'H&M',
          },
          {
            tagName: 'A',
            text: 'Max Kids',
          },
          {
            tagName: 'A',
            text: 'Pantaloons',
          },
          {
            tagName: 'A',
            text: 'United Colors Of Benetton Kids',
          },
          {
            tagName: 'A',
            text: 'YK',
          },
          {
            tagName: 'A',
            text: 'U.S. Polo Assn. Kids',
          },
          {
            tagName: 'A',
            text: 'Mothercare',
          },
          {
            tagName: 'A',
            text: 'HRX',
          },
        ],
      },
    ],
  },
  {
    text: 'Home & Living',
    children: [
      {
        text: 'Bed Linen & Furnishing',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Bed Runners',
          },
          {
            tagName: 'A',
            text: 'Mattress Protectors',
          },
          {
            tagName: 'A',
            text: 'Bedsheets',
          },
          {
            tagName: 'A',
            text: 'Bedding Sets',
          },
          {
            tagName: 'A',
            text: 'Blankets, Quilts & Dohars',
          },
          {
            tagName: 'A',
            text: 'Pillows & Pillow Covers',
          },
          {
            tagName: 'A',
            text: 'Bed Covers',
          },
          {
            tagName: 'A',
            text: 'Diwan Sets',
          },
          {
            tagName: 'A',
            text: 'Chair Pads & Covers',
          },
          {
            tagName: 'A',
            text: 'Sofa Covers',
          },
          {
            tagName: 'A',
            text: 'Floor Runners',
          },
          {
            tagName: 'A',
            text: 'Carpets',
          },
          {
            tagName: 'A',
            text: 'Floor Mats & Dhurries',
          },
          {
            tagName: 'A',
            text: 'Door Mats',
          },
        ],
      },
      {
        text: 'Bath',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Bath Towels',
          },
          {
            tagName: 'A',
            text: 'Hand & Face Towels',
          },
          {
            tagName: 'A',
            text: 'Beach Towels',
          },
          {
            tagName: 'A',
            text: 'Towels Set',
          },
          {
            tagName: 'A',
            text: 'Bath Rugs',
          },
          {
            tagName: 'A',
            text: 'Bath Robes',
          },
          {
            tagName: 'A',
            text: 'Bathroom Accessories',
          },
          {
            tagName: 'A',
            text: 'Shower Curtains',
          },
          {
            tagName: 'A',
            text: 'Floor Lamps',
          },
          {
            tagName: 'A',
            text: 'Ceiling Lamps',
          },
          {
            tagName: 'A',
            text: 'Table Lamps',
          },
          {
            tagName: 'A',
            text: 'Wall Lamps',
          },
          {
            tagName: 'A',
            text: 'Outdoor Lamps',
          },
          {
            tagName: 'A',
            text: 'String Lights',
          },
        ],
      },
      {
        text: 'Home Décor',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Plants & Planters',
          },
          {
            tagName: 'A',
            text: 'Aromas & Candles',
          },
          {
            tagName: 'A',
            text: 'Clocks',
          },
          {
            tagName: 'A',
            text: 'Mirrors',
          },
          {
            tagName: 'A',
            text: 'Wall Décor',
          },
          {
            tagName: 'A',
            text: 'Festive Decor',
          },
          {
            tagName: 'A',
            text: 'Pooja Essentials',
          },
          {
            tagName: 'A',
            text: 'Wall Shelves',
          },
          {
            tagName: 'A',
            text: 'Fountains',
          },
          {
            tagName: 'A',
            text: 'Showpieces & Vases',
          },
          {
            tagName: 'A',
            text: 'Ottoman',
          },
        ],
      },
      {
        text: 'Home Gift Sets',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Table Runners',
          },
          {
            tagName: 'A',
            text: 'Dinnerware & Serveware',
          },
          {
            tagName: 'A',
            text: 'Cups and Mugs',
          },
          {
            tagName: 'A',
            text: 'Bakeware & Cookware',
          },
          {
            tagName: 'A',
            text: 'Kitchen Storage & Tools',
          },
          {
            tagName: 'A',
            text: 'Bar & Drinkware',
          },
          {
            tagName: 'A',
            text: 'Table Covers & Furnishings',
          },
          {
            tagName: 'A',
            text: 'Bins',
          },
          {
            tagName: 'A',
            text: 'Hangers',
          },
          {
            tagName: 'A',
            text: 'Organisers',
          },
          {
            tagName: 'A',
            text: 'Hooks & Holders',
          },
          {
            tagName: 'A',
            text: 'Laundry Bags',
          },
        ],
      },
      {
        text: 'Brands',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'H&M',
          },
          {
            tagName: 'A',
            text: 'Marks & Spencer',
          },
          {
            tagName: 'A',
            text: 'Home Centre',
          },
          {
            tagName: 'A',
            text: 'Spaces',
          },
          {
            tagName: 'A',
            text: "D'Decor",
          },
          {
            tagName: 'A',
            text: 'Story@Home',
          },
          {
            tagName: 'A',
            text: 'Pure Home & Living',
          },
          {
            tagName: 'A',
            text: 'Swayam',
          },
          {
            tagName: 'A',
            text: 'Raymond Home',
          },
          {
            tagName: 'A',
            text: 'Maspar',
          },
          {
            tagName: 'A',
            text: 'My Trident',
          },
          {
            tagName: 'A',
            text: 'Cortina',
          },
          {
            tagName: 'A',
            text: 'Random',
          },
          {
            tagName: 'A',
            text: 'Ellementry',
          },
          {
            tagName: 'A',
            text: 'ROMEE',
          },
          {
            tagName: 'A',
            text: 'SEJ by Nisha Gupta',
          },
        ],
      },
    ],
  },
  {
    text: 'Beauty',
    children: [
      {
        text: 'Makeup',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Lipstick',
          },
          {
            tagName: 'A',
            text: 'Lip Gloss',
          },
          {
            tagName: 'A',
            text: 'Lip Liner',
          },
          {
            tagName: 'A',
            text: 'Mascara',
          },
          {
            tagName: 'A',
            text: 'Eyeliner',
          },
          {
            tagName: 'A',
            text: 'Kajal',
          },
          {
            tagName: 'A',
            text: 'Eyeshadow',
          },
          {
            tagName: 'A',
            text: 'Foundation',
          },
          {
            tagName: 'A',
            text: 'Primer',
          },
          {
            tagName: 'A',
            text: 'Concealer',
          },
          {
            tagName: 'A',
            text: 'Compact',
          },
          {
            tagName: 'A',
            text: 'Nail Polish',
          },
        ],
      },
      {
        text: 'Skincare, Bath & Body',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Face Moisturiser',
          },
          {
            tagName: 'A',
            text: 'Cleanser',
          },
          {
            tagName: 'A',
            text: 'Masks & Peel',
          },
          {
            tagName: 'A',
            text: 'Sunscreen',
          },
          {
            tagName: 'A',
            text: 'Serum',
          },
          {
            tagName: 'A',
            text: 'Face Wash',
          },
          {
            tagName: 'A',
            text: 'Eye Cream',
          },
          {
            tagName: 'A',
            text: 'Lip Balm',
          },
          {
            tagName: 'A',
            text: 'Body Lotion ',
          },
          {
            tagName: 'A',
            text: 'Body Wash',
          },
          {
            tagName: 'A',
            text: ' Body Scrub',
          },
          {
            tagName: 'A',
            text: 'Hand Cream ',
          },
        ],
      },
      {
        text: 'Haircare',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Shampoo',
          },
          {
            tagName: 'A',
            text: 'Conditioner',
          },
          {
            tagName: 'A',
            text: 'Hair Cream',
          },
          {
            tagName: 'A',
            text: 'Hair Oil',
          },
          {
            tagName: 'A',
            text: 'Hair Gel',
          },
          {
            tagName: 'A',
            text: 'Hair Color',
          },
          {
            tagName: 'A',
            text: 'Hair Serum',
          },
          {
            tagName: 'A',
            text: 'Hair Accessory',
          },
          {
            tagName: 'A',
            text: 'Perfume',
          },
          {
            tagName: 'A',
            text: 'Deodorant',
          },
          {
            tagName: 'A',
            text: 'Body Mist',
          },
        ],
      },
      {
        text: 'Appliances',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Hair Straightener',
          },
          {
            tagName: 'A',
            text: 'Hair Dryer',
          },
          {
            tagName: 'A',
            text: 'Epilator',
          },
          {
            tagName: 'A',
            text: 'Trimmers',
          },
          {
            tagName: 'A',
            text: 'Beard Oil',
          },
          {
            tagName: 'A',
            text: 'Hair Wax',
          },
          {
            tagName: 'A',
            text: 'Beauty Gift',
          },
          {
            tagName: 'A',
            text: 'Makeup Kit',
          },
        ],
      },
      {
        text: 'Top Brands',
        tagName: 'UL',
        children: [
          {
            tagName: 'A',
            text: 'Lakme',
          },
          {
            tagName: 'A',
            text: 'Maybelline',
          },
          {
            tagName: 'A',
            text: 'LOreal',
          },
          {
            tagName: 'A',
            text: 'Philips',
          },
          {
            tagName: 'A',
            text: 'Bath & Body Works',
          },
          {
            tagName: 'A',
            text: 'THE BODY SHOP',
          },
          {
            tagName: 'A',
            text: 'Biotique',
          },
          {
            tagName: 'A',
            text: 'Mamaearth',
          },
          {
            tagName: 'A',
            text: 'MCaffeine',
          },
          {
            tagName: 'A',
            text: 'Nivea',
          },
          {
            tagName: 'A',
            text: 'Lotus Herbals',
          },
          {
            tagName: 'A',
            text: 'LOreal Professionnel',
          },
          {
            tagName: 'A',
            text: 'KAMA AYURVEDA',
          },
          {
            tagName: 'A',
            text: 'M.A.C',
          },
          {
            tagName: 'A',
            text: 'Forest Essentials',
          },
        ],
      },
    ],
  },
  {
    text: 'Studio',
    children: [],
  },
];
