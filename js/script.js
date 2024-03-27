// adding an event listener to dynamically add my student number and name once page is loaded
document.addEventListener('DOMContentLoaded', function() {
    let myStudentCredentials = document.getElementById('myCredentials');
    myStudentCredentials.textContent = "Student ID: 200553438, Name: Davinderjit Singh, Work: Assignment3";

    // grabbing the form
    const pizzaForm = document.getElementById('orderForm');

    // retreiving data from the form once it is submitted by the user
    pizzaForm.addEventListener('submit', function(event) {
        
        var size = document.getElementById('size').value;
        // creating an array for topping because of possible multiple input values
        var toppings = [];
        var toppingCheckboxes = document.querySelectorAll('input[name="topping"]:checked');
        toppingCheckboxes.forEach(function(checkbox) {
            // pushing all the selected values into the toppings array one by one 
            toppings.push(checkbox.value);
        });

        var bake = document.querySelector('input[name="bake"]:checked').value;
        var crust = document.querySelector('input[name="crust"]:checked').value;

        // creating a new pizza obj with the attributes retreived from the form
        const orderedPizza = new Pizza(size, toppings, bake, crust);
        displayPizza(orderedPizza);
    });

    // creating a Pizza class
    class Pizza {
        // creating a constructor for pizza class
        constructor(size, toppings, bake, crust) {
            this.size = size;
            this.toppings = toppings;
            this.bake = bake;
            this.crust = crust;
            
        }
    }

    function displayPizza(pizza) {
        var pizzaDescription = document.getElementById('description');

        // dynamically adding the description of ordered pizza contents
        pizzaDescription.innerHTML = `<h2>Your Pizza:</h2>
            <p>Size: ${pizza.size}</p>
            <p>Toppings: ${pizza.toppings.join(', ')}</p>
            <p>Bake: ${pizza.bake}</p>
            <p>Crust: ${pizza.crust}</p>`;
        console.log('Done');
    };
});
