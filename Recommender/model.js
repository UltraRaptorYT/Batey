dish_attributes = {
    'Chicken_Rice': ['Chicken', 'Rice', 'High Fat', 'High Oil','Salty','Spicy'],
    "Yong_Tau_Foo": ['Fish', 'Vegetables', 'High Fat','Salty','Spicy','Noodles'],
    "Hokkien_Mee": ['Noodles', 'Shellfish', 'High Fat', 'High Oil','Salty','Spicy'],
    "Char_Kway_Tiao": ['Noodles', 'Chicken', 'Shellfish', 'High Oil','High Fat','Salty'],
    "Kaya_Toast": ['Sweet','Vegan'],
    "Laksa": ['Noodles', 'Fish', 'Vegetables', 'High Fat','Salty','Spicy','Lactose Intolerant'],
}

attributes = {
    'Sweet' : 0,
    'Spicy' : 0,
    'Salty' : 0,
    'Chicken' : 0,
    'Beef' : 0,
    'Halal' : 0,
    'Fish' : 0,
    'Shellfish' : 0,
    'High Fat' : 0,
    'High Oil' : 0,
    'Nuts' : 0,
    'Lactose Intolerant' : 0,
    'Rice' : 0,
    'Noodles' : 0,
    'Vegan' : 0,
    'Vegetables' : 0,
}

dish_score = {
    'Chicken_Rice': 0,
    "Yong_Tau_Foo": 0,
    "Hokkien_Mee": 0,
    "Char_Kway_Tiao": 0,
    "Kaya_Toast": 0,
}

function getDishAttributes(dish){
    return dish_attributes[dish];
}

function updateAttributes(dish){
    dish_attributes[dish].forEach(function(attribute){
        attributes[attribute] += 1;
    });
}
function resetAttributes(){
    for (var key in attributes) {
        attributes[key] = 0;
    }
}
function viewAttributes(){
    // Function returns values of attributes in one array
    var attribute_values = [];
    for (var key in attributes) {
        attribute_values.push(attributes[key]);
    }
    return attribute_values;
}

function calculateDishScore(){
    // Score is calculated by summing up the values of attributes for each dish, divided by the number of attributes
    for (var dish in dish_attributes){
        var score = 0;
        dish_attributes[dish].forEach(function(attribute){
            score += attributes[attribute];
        });
        dish_score[dish] = score/dish_attributes[dish].length;
        console.log(dish + " score: " + dish_score[dish]);
    }
}

updateAttributes('Chicken_Rice');
updateAttributes('Char_Kway_Tiao')
console.log(getDishAttributes("Chicken_Rice"))
console.log(viewAttributes())
calculateDishScore()
resetAttributes()
console.log(viewAttributes())
