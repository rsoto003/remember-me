$(".flippable").click(function(){
    $(this).toggleClass("flipme");
  });

const eggsAndOmlettes = {
    "Served with":"hashbrowns and one slice of toast, 2 upon request. white, wheat, rye, sourdough, english muffin",
    "1, 2, or 3 eggs": {
        "ADD": "Bacon, Ham, or Sausage", 
        "ADD": "Homemade Corned Beef Hash or Homemade Sausage"
    },
    "Cheese Omlette": {
        "Contains": "Cheddar, Swiss, American or Muenster",
        "ADD": "Bacon, Ham, Sausage or Chorizo"
    },
    "Meatlovers": "Bacon, sausage, ham, and cheddar",
    "Denver": "Ham, green pepper and onions",
    "Garbage": "4 Eggs, bacon, sausage, ham, 3 cheeses, veggies",
    "Veggie": "mushroom, tomato, bell pepper, spinach, onion",
    "Spinach, tomato, feta": "Spinach, tomato, feta",
    "Irish": "Homemade corned beef hash and cheddar",
    "Nado": "Swiss, tomato topped with avocado",
    "Steak and Pepperjack": "red onions and roasted red peppers"
}

const scramblesAndBenedicts = {
    "veggie": "eggs, mushrooms, bell peppers, onions served with hashbrowns and toast",
    "chorizo": "eggs, chorizo, cheese served with beans and flour tortilla",
    "machaca": "eggs, machaca beef, cheese served with beans and a flour tortilla",
    "mexicana": "eggs, ham, cheese, tomato, onions and jalapenos served with beans and flour tortilla",
    "eggs benedict": "spinach, tomato and smoked bacon served with hashbrowns",
    "eggs florentine benedict": "spinach, tomato, and smoked bacon served with hashbrowns", 
    "country benedict": "spicy sausage, thick cut bacon, 2 poached eggs and country gravy on a toasted biscuit served with hashbrowns"
}

