import cookie from 'cookie';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies.loggedIn === "true";
}

const randomId = () => {
  return Math.floor(Math.random() * 1000000);
}

const state = {
  user: 
    {
    username: "admin",
    password: "admin@12345",
    isLoggedIn: checkAuth(),
    },

  listings: [
    {
      id: randomId(),
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
      id: randomId(),
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
      id: randomId(),
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
      id: randomId(),
      name: "Waterloo Records",
      description:
        "Iconic independent record store selling new and used vinyl, CDs, and more.",
      address: "600A N Lamar Blvd, Austin, TX 78703",
      hours: "10:00am - 10:00pm",
      city: "Austin",
      state: "TX",
      zip: "78703",
    },
  ],
};

export default state;