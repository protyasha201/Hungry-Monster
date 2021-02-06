const searchNow = document.getElementById("searchNow");
searchNow.addEventListener("click", () => {
    const searchMeal = document.getElementById("searchMeal");
    const url = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + searchMeal.value + '')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.meals.length; i++) {
                const foodNames = data.meals[i].strMeal;
                const foods = document.getElementById("foods");
                const foodDiv = document.createElement("div");
                const image = document.createElement("img");
                foodDiv.className = "food-items";
                foodDiv.innerText = foodNames;
                foods.appendChild(foodDiv);
                // console.log(data.meals[i].strMeal);
            }
        });

})