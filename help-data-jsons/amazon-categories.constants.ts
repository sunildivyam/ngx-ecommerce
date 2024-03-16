/* Function used to extract Main menu Categories->subCategories->subSubCategories

function getEl(el) {

    const text = el.textContent;
    const tagName = el.tagName;

    const children = [];
    for (let chEl of el.children) {
        children.push(getEl(chEl));
    }
    if (el.children.length) {
        return { tagName, children };
    } else {
        return { tagName, text};
    }

}

let categories = getEl($0);
*/

export const AMAZON_CATEGORIES = {
  tagName: 'DIV',
  children: [
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Trending',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Best Sellers',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'New Releases',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Movers and Shakers',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Digital Content and Devices',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'Echo & Alexa',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'Fire TV',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'Kindle E-Readers & eBooks',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'Audible Audiobooks',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'Amazon Prime Video',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'Amazon Prime Music',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Shop by Category',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'Mobiles, Computers',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'TV, Appliances, Electronics',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: "Men's Fashion",
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: "Women's Fashion",
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'UL',
          children: [
            {
              tagName: 'LI',
              text: '',
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  children: [
                    {
                      tagName: 'DIV',
                      text: 'Home, Kitchen, Pets',
                    },
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  children: [
                    {
                      tagName: 'DIV',
                      text: 'Beauty, Health, Grocery',
                    },
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  children: [
                    {
                      tagName: 'DIV',
                      text: 'Sports, Fitness, Bags, Luggage',
                    },
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  children: [
                    {
                      tagName: 'DIV',
                      text: "Toys, Baby Products, Kids' Fashion",
                    },
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  children: [
                    {
                      tagName: 'DIV',
                      text: 'Car, Motorbike, Industrial',
                    },
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  children: [
                    {
                      tagName: 'DIV',
                      text: 'Books',
                    },
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  children: [
                    {
                      tagName: 'DIV',
                      text: 'Movies, Music & Video Games',
                    },
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'See all',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'see less',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Programs & Features',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Pay',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'Gift Cards & Mobile Recharges',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Launchpad',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Handloom and Handicrafts',
            },
          ],
        },
        {
          tagName: 'UL',
          children: [
            {
              tagName: 'LI',
              text: '',
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  text: 'Amazon Saheli',
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  text: 'Amazon Custom',
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  text: 'Flight Tickets',
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  text: 'Buy more, Save more',
                },
              ],
            },
            {
              tagName: 'LI',
              children: [
                {
                  tagName: 'A',
                  text: 'Clearance store',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'See all',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  text: 'see less',
                },
                {
                  tagName: 'I',
                  text: '',
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Help & Settings',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Your Account',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Customer Service',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Sign Out',
            },
          ],
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Echo & Alexa',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'See all devices with Alexa',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Content & Resources',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Meet Alexa',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Alexa Skills',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Alexa App',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Alexa Smart Home',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Prime Music',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'DIV',
                  text: 'Fire TV',
                },
                {
                  tagName: 'A',
                  children: [
                    {
                      tagName: 'DIV',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Prime Video',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Fire TV Apps & Games',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'See all Fire TV devices',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Kindle E-readers',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All-new Kindle',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All-new Kindle Paperwhite',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Kindle Paperwhite Starter Pack',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All-New Kindle Oasis',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Refurbished & Open Box',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Kindle E-Reader Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'See all Kindle E-readers',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Kindle eBooks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Kindle eBooks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Prime Reading',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Kindle Unlimited',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Deals on Kindle eBooks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Kindle Exam Central',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Kindle eTextbooks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'eBook Bestsellers',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'eBooks in Indian Languages',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Hindi',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Tamil',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Audible Audiobooks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Audible Membership',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Audiobooks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Best Sellers',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'New Releases',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Hindi Audiobooks',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Amazon Prime Video',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Videos',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Store',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Categories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'My Stuff',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Amazon Prime Music',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Prime Music',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Open web player',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Voice controlled with Alexa',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Prime Music Apps',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'CDs and Vinyls',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Mobiles, Tablets & More',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Mobile Phones',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Mobile Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Cases & Covers',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Screen Protectors',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Power Banks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Refurbished & Open Box',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Tablets',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Wearable Devices',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Smart Home',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Office Supplies & Stationery',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: ' Software ',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Computers & Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: ' All Computers & Accessories ',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Laptops',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Drives & Storage',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Printers & Ink',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Networking Devices',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: ' Computer Accessories ',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Game Zone',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Monitors',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Desktops',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Components',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: ' All Electronics ',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'TV, Audio & Cameras',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Televisions',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Home Entertainment Systems',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Headphones',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Speakers',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Home Audio & Theater',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Cameras',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'DSLR Cameras',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Security Cameras',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Camera Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Musical Instruments & Professional Audio',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Gaming Consoles',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: ' All Electronics ',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Appliances',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Air Conditioners',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Refrigerators',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Washing Machines',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Kitchen & Home Appliances',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Heating & Cooling Appliances',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Appliances',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: "Men's Clothing",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Clothing',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'T-shirts & Polos',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Shirts',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Jeans',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Innerwear',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Watches',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Bags & Luggage',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Sunglasses',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Jewellery',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Wallets',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: "Men's Shoes",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Shoes',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Sports Shoes',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Formal Shoes',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Casual Shoes',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Stores',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Sportswear',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'The Designer Boutique',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: "Men's Fashion",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Fashion',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: "Men's Handlooms",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Fashion Sales & Deals',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: "Women's Clothing",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Clothing',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Western Wear',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Ethnic Wear',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Lingerie & Nightwear',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Top Brands',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Watches',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Handbags & Clutches',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Gold & Diamond Jewellery',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Fashion & Silver Jewellery',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Sunglasses',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: "Women's Shoes",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Shoes',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Fashion Sandals',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Ballerinas',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Stores',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'The Designer Boutique',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Handloom & Handicraft Store',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Sportswear',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: "Women's Fashion",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Fashion',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Fashion Sales & Deals',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Home & Kitchen ',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Explore Showroom',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Kitchen & Dining',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Kitchen Storage & Containers',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Furniture',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Fine Art',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Home Furnishing',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Bedroom Linen',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Home Décor\n',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Garden & Outdoors',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Home Storage',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Indoor Lighting',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Home Improvement',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Sewing & Craft Supplies',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Home & Kitchen',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Shop by Room',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Home & Kitchen Deals',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Pet Supplies',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Pet Supplies',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Dog supplies',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Home, Kitchen, Pets',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Refurbished & Open Box',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Beauty & Health',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Beauty & Grooming',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Luxury Beauty',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Make-up',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Health & Personal Care',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Pharmacy',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Household Supplies',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Personal Care Appliances',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: ' Diet & Nutrition',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Subscribe & Save',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Value Bazaar',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Grocery & Gourmet Foods',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Grocery & Gourmet Foods',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Coffee, Tea & Beverages',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Snack Foods',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Sports & Fitness',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Cricket',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Badminton',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Cycling',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Football',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Running',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Camping & Hiking',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Fitness Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Yoga',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Strength Training',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Cardio Equipment',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Sports Collectibles',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Refurbished & Open Box',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Exercise & Fitness',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Sports, Fitness & Outdoors',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Bags & Luggage',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Backpacks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Rucksacks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Suitcases & Trolley Bags',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Travel Duffles',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Travel Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Wallets',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Toys & Baby Products',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Toys & Games',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Baby Products',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Diapers',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Toys Gifting Store',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'STEM Toys Store',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'International Toy Store',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Baby Bath, Skin & Grooming',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Strollers & Prams',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Nursing & Feeding',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Subscribe & Save',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Pantry',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: "Kids' Fashion",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: "Kids' Clothing",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: "Kids' Shoes",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'School Bags',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: "Kids' Watches",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: "Kids' Fashion",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Baby Fashion',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Car & Motorbike',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Motorbike Accessories & Parts',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Car Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Car Electronics',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Car Parts',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Car & Bike Care',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Car & Motorbike Products',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Industrial Supplies',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Industrial & Scientific Supplies',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Test, Measure & Inspect',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Lab & Scientific',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Janitorial & Sanitation Supplies',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Books',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Books',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Fiction Books',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: "Editor's Corner",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'School Textbooks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: "Children's Books",
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Exam Central',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Textbooks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Indian Language Books',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Kindle eBooks',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Audible Audiobooks',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Audible Audiobooks & more',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Audible Membership',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: ' Movies & TV Shows',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Movies & TV Shows',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Blu-ray',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All English',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Hindi',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Entertainment Collectibles',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Video Games',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Gaming Consoles',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Latest Video Games',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Gaming Accessories',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: ' PC Games ',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Video Games Deals',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Video Games',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Music',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'All Music',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'International Music',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Film Songs',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Indian Classical',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Musical Instruments & Professional Audio',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Stream Music',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Open web player',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Amazon Prime Music',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
    {
      tagName: 'UL',
      children: [
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              children: [
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'I',
                      text: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Gift Cards',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: ' All Gift Cards',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Popular Gift Cards',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Gift Boxes, Gift Tags, Greeting Cards',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Popular Brand Gift Vouchers ',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Birthday Gift Cards',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Wedding & Anniversary ',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Best Wishes & Thank You',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Corporate Gift Cards',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'DIV',
              text: 'Recharges',
            },
          ],
        },
        {
          tagName: 'LI',
          children: [
            {
              tagName: 'A',
              text: 'Mobile Recharges',
            },
          ],
        },
        {
          tagName: 'LI',
          text: '',
        },
      ],
    },
  ],
};
