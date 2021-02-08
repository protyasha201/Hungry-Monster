// Search button click-handler

const searchNow = document.getElementById("searchNow");
searchNow.addEventListener("click", () => {
    const searchMeal = document.getElementById("searchMeal");
    const erasePrevious = document.getElementById("foodsContainer");
    const eraseDetail = document.getElementById("food-details");
    
    erasePrevious.innerText = "";
    eraseDetail.style.display = "none";
    
    const searchMealUppercase = searchMeal.value.toUpperCase();
    
    if(searchMealUppercase == "BEEF" || searchMealUppercase == "CHICKEN" || searchMealUppercase == "DESSERT" || searchMealUppercase == "LAMB" || searchMealUppercase == "MISCELLANEOUS" || searchMealUppercase == "PASTA" || searchMealUppercase == "PORK" || searchMealUppercase == "SEAFOOD" || searchMealUppercase == "SIDE" || searchMealUppercase == "STARTER" || searchMealUppercase == "VEGAN" || searchMealUppercase == "VEGETARIAN" || searchMealUppercase == "BREAKFAST" || searchMealUppercase == "GOAT"){
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + searchMeal.value + '')
        .then(res => res.json())
        .then(data => {
            const eraseCategoryList = document.getElementById("category-list");
            eraseCategoryList.style.display = "none";
            const foodList = data.meals;
            foodList.forEach(food => {
                const foodNames = food.strMeal;
                const foodImages = food.strMealThumb;
                const foodId = food.idMeal;
                const foodsContainer = document.getElementById("foodsContainer");
                const searchedFor = document.getElementById("searchedFor");
                const foodDiv = document.createElement("div");
                foodDiv.className = "food-items";

                const foodInfo = `
                <div class="container" onclick="display(${foodId}, '${foodImages}', '${foodNames}')">
                    <div class="image">
                        <img src="${foodImages}">
                    </div>
                    <div class="food-name">${foodNames}</div>
                </div>
                `;

                foodDiv.innerHTML = foodInfo;
                foodsContainer.appendChild(foodDiv);
            });
        })
    }
    else{
        alert("Sorry, Not Available!");
    }
})


//showing details

function display(id, images, foodName) {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id + '')
        .then(res => res.json())
        .then(data => {
            const foodDetails = document.getElementById("food-details");
            foodDetails.style.display = "block";
            const ingredients = data.meals[0];
            const measures = data.meals[0];
            const details = `
                <div class="detail-image">
                    <img src="${images}">
                </div>
                <h2>${foodName}</h2>
                <h3>Ingredients</h3>
                <ul class="ingredient-list">
                    <li>${measures.strMeasure1} ${ingredients.strIngredient1}</li>
                    <li>${measures.strMeasure2} ${ingredients.strIngredient2}</li>
                    <li>${measures.strMeasure3} ${ingredients.strIngredient3}</li>
                    <li>${measures.strMeasure4} ${ingredients.strIngredient4}</li>
                    <li>${measures.strMeasure5} ${ingredients.strIngredient5}</li>
                    <li>${measures.strMeasure6} ${ingredients.strIngredient6}</li>
                    <li>${measures.strMeasure7} ${ingredients.strIngredient7}</li>
                    <li>${measures.strMeasure8} ${ingredients.strIngredient8}</li>
                    <li>${measures.strMeasure9} ${ingredients.strIngredient9}</li>
                    <li>${measures.strMeasure10} ${ingredients.strIngredient10}</li>
                </ul>
            `;
            foodDetails.innerHTML = details;
        })
}


//home button click handler
const home = document.getElementById("home-link");
home.addEventListener("click", () => {
    document.getElementById("searchMeal").value = "";
    const showNav = document.querySelector(".navbar");
    const showSearch = document.querySelector(".search");
    const showCategory = document.querySelector("#category-list");
    const hideContainer = document.getElementById("foodsContainer");
    const hideDetails = document.getElementById("food-details");

    showNav.style.display = "block";
    showSearch.style.display = "block";
    showCategory.style.display = "block";
    hideContainer.style.display = "none";
    hideDetails.style.display = "none";
})