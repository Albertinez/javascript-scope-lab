
// GLOBAL VARIABLES
// =====================
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// =====================
// FUNCTION TO ADD BURGER
// =====================
function addBurger() {
    let newBurger = 'Flatburger'; // Function-scoped
    burgers.push(newBurger);
}

// =====================
// BLOCK-SCOPED VARIABLE INSIDE IF
// =====================
if (true) {
    let anotherNewBurger = 'Maple Bacon Burger'; // Block-scoped
    burgers.push(anotherNewBurger);

    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake';
    }

    changeFeaturedDrink();
}

// =====================
// TEST OUTPUT
// =====================
console.log('Burgers before addBurger():', burgers);
console.log('Featured Drink:', featuredDrink);

addBurger(); // Call function to add Flatburger
console.log('Burgers after addBurger():', burgers);
console.log('Featured Drink after addBurger():', featuredDrink);
