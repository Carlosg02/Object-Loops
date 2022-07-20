// given the recipes bellow put them all on the HTML page using loops

let recipes = [
    {
        title: "Green Thai Curry",
        time: 30,
        calories:750,
        ingredients: ["350g Chicken Thigh", "1 cup (250ml) chicken or vegetable broth", "14oz coconut milk", "1 - 3 tsp fish sauce", "1 - 3 tsp white sugar ", "1/8 tsp salt", "2 Japanese eggplants or Zuccini", "2 Yukon Potato"]
    },
    {
        title: "Baccon Mac & Cheese",
        time: 40,
        calories: 500,
        ingredients: ["12oz baccon", "2 tablespoons flour", "2 1/2 cups water", "4 cups milk", "16oz short uncooked pasta", "1/2 teaspoon salt", "1/4 teaspoon","garlic powder" ,"1/4 teaspoon onion powder" ,"1/2 teaspoon smoked paprika" ,"1/4 teaspoon pepper" ,"4 cups shredded cheddar cheese" ,"1 tablespoon chopped parsley"]
    },
    {
        title: "Broccoli Pesto Pasta",
        time: 40,
        calories: 690,
        ingredients:["1 lb cooked pasta", "4 cups broccoli florets", "2 cups basil leaves, lightly packed", "2 garlic cloves", "1/4 cup pine nuts", "1 cup extra virgin olive oil", "1/2 tbsp salt", "1 cup Parmigiano-Reggiano, grated"]
    } ,
    {
        title: "Sesame Garlic Ramen Noodles",
        time: 25,
        calories: 380,
        ingredients:["3 Packs instant ramen noodles, flavor packets discarded", "1/4 cup low sodium soy sauce", "1/4 cup oyster sauce", "1 tbsp rice vinegar", "1 tbsp brown sugar, optional", "1/2-1 cup chili sauce", "1/4 cup water", "2 tbsp toasted sesame oil", "3 cloves garlic, minced", "1tbsp freshly grated ginger", "4-6 green onions, thinly sliced", "1 tbsp sesame seeds" ]
    }
]

// Your code goes here:

// Each recipe should be in its own div, that can be recCont. We are declaring it here since we will want to change its value with each itteration of the loop.

let recCont;
let recipeDiv = document.querySelector('.recipes');

for(let i = 0; i<recipes.length; i++){
    recCont = document.createElement('div');
    let titleEl = document.createElement('h2');
    let timeEl = document.createElement('h3');
    let calEl = document.createElement('h3');
    let ingreEl = document.createElement('h3');
    let titleText = document.createTextNode(`Name: ${recipes[i].title}`);
    let timeText = document.createTextNode(`Time to cook: ${recipes[i].time} min`);
    let calText = document.createTextNode(`Calories: ${recipes[i].calories}`);
    let ingreText = document.createTextNode(`Ingredients:`);
    
    titleEl.appendChild(titleText);
    timeEl.appendChild(timeText);
    calEl.appendChild(calText);
    ingreEl.appendChild(ingreText);
    recCont.appendChild(titleEl);
    recCont.appendChild(timeEl);
    recCont.appendChild(calEl);
    recCont.appendChild(ingreEl);
    let ingreList = document.createElement('ul');
    recipes[i].ingredients.map(function(item){
        let ingreListItem = document.createElement('li');
        let indIngreText = document.createTextNode(`${item}`);
        ingreListItem.appendChild(indIngreText)
        ingreList.appendChild(ingreListItem);    
    })
    recCont.appendChild(ingreList);
    recipeDiv.appendChild(recCont);
}
// HINT: Using .map will be very helpful when itterating through the ingredients array.
