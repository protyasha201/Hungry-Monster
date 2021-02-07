const searchNow = document.getElementById("searchNow");
searchNow.addEventListener("click", () => {
    const searchMeal = document.getElementById("searchMeal");
    const url = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + searchMeal.value + '')
        .then(res => res.json())
        .then(data => {
            const foodList = data.meals;
            foodList.forEach(food => {
                const foodNames = food.strMeal;
                const foodImages = food.strMealThumb;
                const foodsContainer = document.getElementById("foodsContainer");
                const searchedFor = document.getElementById("searchedFor");
                const foodDiv = document.createElement("div");
                foodDiv.className = "food-items";

                const foodInfo = `
                <div onclick="display('${foodNames}')">
                <div class="image">
                    <img src="${foodImages}">
                </div>
                <div>${foodNames}</div>
                </div>
                `;

                foodDiv.innerHTML = foodInfo;
                foodsContainer.appendChild(foodDiv);
            });
        })
})

function display(name){
    console.log(name);
}