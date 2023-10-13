const pizzaData = [
  { name: "Margherita Pizza", price: "₹150" },
  { name: "Paneer Chatpata Pizza", price: "₹120" },
  { name: "Veg Maharaja Pizza", price: "₹100" },
  { name: "Double Layered paneer Stuffed Pizza", price: "₹250" },
  { name: "Mexican Delight Pizza", price: "₹120" },
  { name: "Spicy Treat Pizza", price: "₹125" },
  { name: "Manchurian Pizza", price: "₹80" },
  { name: "Mushroom Pizza ", price: "₹100" },
  { name: "Chicken Delight(Non-veg)", price: "₹120" },
  { name: "kukdu ku pizza (Non-veg)", price: "₹200" },
  { name: "Double Layered Chicken Stuffed Pizza(Non-veg)", price: "₹250" },
  { name: "Heritage Special (veg)", price: "₹270" },
  { name: "Heritage Special (Non-veg)", price: "₹270" },
];

const burgerData = [
  { name: "Classic Burger", price: "₹50" },
  { name: "Cheeseburger", price: "₹60" },
  { name: "Bacon Burger", price: "₹70" },
  { name: "Peri Peri Burger", price: "₹80" },
  { name: "Veg Dynamite Burger", price: "₹70" },
  { name: "classic Chicken Burger(Non-veg)", price: "₹60" },
  { name: "Double patties Chicken Burger(Non-veg)", price: "₹70" },
  { name: " Chicken Dynamite Burger(Non-veg)", price: "₹80" },
];
const sandwitchData = [
  { name: "Cheese Sandwitch", price: "₹50" },
  { name: "peri peri paneer Sandwitch", price: "₹70" },
  { name: "corn Sandwitch", price: "₹60" },
  { name: "Tandoori Teared Chicken ", price: "₹50" },
  { name: "Mexi Max Chicken Sandwitch", price: "₹50" },
  { name: "Double Decker Sandwitch", price: "₹50" },
];
const noodlesData = [
  { name: "Hakka Noodles", price: "₹50" },
  { name: "Shezwan noodles", price: "₹60" },
  { name: "Chicken Noodles", price: "₹70" },
  { name: "Mix Noodles", price: "₹70" },
];

const shakesData = [
  { name: "Apple shake", price: "₹40" },
  { name: "Strawberry Shake", price: "₹40" },
  { name: "Blackcurrent Shake", price: "₹40" },
  { name: "Vanilla Shake", price: "₹40" },
  { name: "Butter Scotch Shake", price: "₹40" },
  { name: "Oreo Shake", price: "₹50" },
  { name: "Mix Shake", price: "₹80" },
  { name: "Crunch Peanuts Shake", price: "₹90" },
  { name: "Dark Chocolates", price: "₹120" },
  { name: "Fresh Mint Clear mojito ", price: "₹80" },
  { name: "Blue Crush Curaco ", price: "₹80" },
  { name: "Green Apple ", price: "₹80" },
];

const beveragesData = [
  { name: "Coke", price: "₹30" },
  { name: "Sprite", price: "₹30" },
  { name: "Iced Tea", price: "₹30" },
  { name: "Normal Tea", price: "₹20" },
  { name: "vanilla Tea", price: "₹30" },
  { name: "Kadak Tea", price: "₹30" },
  { name: "Kulhad Tea", price: "₹30" },
  { name: "Normal Cofee", price: "₹20" },
  { name: "Cold cofee", price: "₹70" },
  { name: "kulhad cofee", price: "₹35" },
  { name: "hard cofee", price: "₹39" },
  { name: "Capuchinno", price: "₹50" },
];
const comboData = [
  { name: "Chicken Burger + Garlic Bread + coke(500ml)", price: "₹230" },
  { name: "Paneer Pizza + French Fries + ButterScotch shake", price: "₹260" },
  { name: "Hakka Noodles + Manchurian + Cold Coffee", price: "₹200" },
  { name: "Butter Naan(2 nos) +Butter Chicken(full plate)", price: "₹200" },
];
const pizzaButton = document.getElementById("Pizza-button");
const burgerButton = document.getElementById("Burger-button");
const sandwitchButton = document.getElementById("sandwitch-button");
const noodlesButton = document.getElementById("noodles-button");
const shakesButton = document.getElementById("shakes-button");
const beveragesButton = document.getElementById("beverages-button");
const comboButton = document.getElementById("combo-button");
const vegButton = document.getElementById("veg-button");
const NonvegButton = document.getElementById("nonveg-button");

const menuContainer = document.getElementById("menu-Container");
const menuTitle = document.getElementById("menu-title");
const menuList = document.getElementById("menu-list");

//   add event listener
displayMenu("Pizza", pizzaData);
function displayMenu(category, data) {
  menuTitle.textContent = `${category}`;
  menuList.innerHTML = "";

  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ${item.price}`;
    menuList.appendChild(listItem);
  });

  menuContainer.style.display = "block";
}
pizzaButton.addEventListener("click", () => {
  displayMenu("Pizza", pizzaData);
});

burgerButton.addEventListener("click", () => {
  displayMenu("Burger", burgerData);
});

sandwitchButton.addEventListener("click", () => {
  displayMenu("Sandwitch", sandwitchData);
});
noodlesButton.addEventListener("click", () => {
  displayMenu("Noodles", noodlesData);
});

shakesButton.addEventListener("click", () => {
  displayMenu("Shakes", shakesData);
});
beveragesButton.addEventListener("click", () => {
  displayMenu("Beverages", beveragesData);
});

comboButton.addEventListener("click", () => {
  displayMenu("Combos", comboData);
});
vegButton.addEventListener("click", () => {
  displayMenu("Veg Items", vegData);
});

NonvegButton.addEventListener("click", () => {
  displayMenu("Non-Veg Items", nonvegData);
});
