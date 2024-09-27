import cookie from 'cookie';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies.loggedIn === "true";
}

const state = {
  user: {
    username: "admin",
    password: "admin@12345",
    isLoggedIn: checkAuth(),
  },

  listings: [
    {
      id: 1,
      name: "Mozart's Coffee Roasters",
      description:
        "Lakeside cafe offering coffee, teas, and delicious desserts with a view.",
      address: "3825 Lake Austin Blvd, Austin, TX 78703",
      hours: "7:00am - 12:00am",
      city: "Austin",
      state: "TX",
      zip: "78703",
    },
    {
      id: 2,
      name: "BookPeople",
      description:
        "Austin's largest independent bookstore, offering a great selection of books and gifts.",
      address: "603 N Lamar Blvd, Austin, TX 78703",
      hours: "9:00am - 9:00pm",
      city: "Austin",
      state: "TX",
      zip: "78703",
    },
    {
      id: 3,
      name: "Antonelli's Cheese Shop",
      description:
        "A gourmet cheese shop offering tastings, classes, and a wide selection of artisanal cheeses.",
      address: "4220 Duval St, Austin, TX 78751",
      hours: "11:00am - 7:00pm",
      city: "Austin",
      state: "TX",
      zip: "78751",
    },
    {
      id: 4,
      name: "Waterloo Records",
      description:
        "Iconic independent record store selling new and used vinyl, CDs, and more.",
      address: "600A N Lamar Blvd, Austin, TX 78703",
      hours: "10:00am - 10:00pm",
      city: "Austin",
      state: "TX",
      zip: "78703",
    },
    {
      id: 5,
      name: "The Soup Peddler",
      description:
        "A neighborhood favorite for fresh juices, soups, and smoothies made from scratch.",
      address: "501 W Mary St, Austin, TX 78704",
      hours: "10:00am - 8:00pm",
      city: "Austin",
      state: "TX",
      zip: "78704",
    },
    {
      id: 6,
      name: "Tiny Pies",
      description:
        "Family-owned bakery specializing in handmade mini pies with natural ingredients.",
      address: "5035 Burnet Rd, Austin, TX 78756",
      hours: "10:00am - 6:00pm",
      city: "Austin",
      state: "TX",
      zip: "78756",
    },
    {
      id: 7,
      name: "Allens Boots",
      description:
        "Iconic store offering a vast selection of Western wear, including cowboy boots and hats.",
      address: "1522 S Congress Ave, Austin, TX 78704",
      hours: "10:00am - 7:00pm",
      city: "Austin",
      state: "TX",
      zip: "78704",
    },
    {
        id: 8,
      name: "Tiff's Treats",
      description:
        "Warm cookie delivery service offering a variety of freshly baked cookies and treats.",
      address: "1806 Nueces St, Austin, TX 78701",
      hours: "9:00am - 11:00pm",
      city: "Austin",
      state: "TX",
      zip: "78701",
    },
    {
      id: 9,
      name: "Zilker Brewing Company",
      description:
        "Local craft brewery serving house-made beers in a laid-back taproom.",
      address: "1701 E 6th St, Austin, TX 78702",
      hours: "12:00pm - 10:00pm",
      city: "Austin",
      state: "TX",
      zip: "78702",
    },
  ],
};

export default state;