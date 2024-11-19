document.getElementById('pregnancyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const weeks = parseInt(document.getElementById('weeks').value);
    const babyWeight = parseInt(document.getElementById('babyWeight').value);
    const medicalCondition = document.getElementById('medicalCondition').value;
    const recommendations = generateRecommendations(weeks, babyWeight, medicalCondition);

    //result
    displayRecommendations(name, recommendations);
});

function generateRecommendations(weeks, babyWeight, medicalCondition) {
    let diet = '';
    let exercise = '';
    let calories = '';
    let protein = '';
    let iron = '';
    let calcium = '';
    let foodMeals = '';
    let medical = '';

    // Nutritional requirements
    let nutritionalReq = {};

    if (weeks >= 1 && weeks <= 12) {
        nutritionalReq = {
            calories: 1800,
            protein: 60,
            iron: 27,
            calcium: 1000
        };
        foodMeals = "Focus on protein-rich foods like eggs, lean meats, tofu, and beans. Include iron-rich foods like spinach and lentils.";
        exercise = "Try light walking or swimming, and do some pelvic floor exercises.";
    }
    else if (weeks >= 13 && weeks <= 26) {
        nutritionalReq = {
            calories: 2000,
            protein: 70,
            iron: 30,
            calcium: 1100
        };
        foodMeals = "Increase iron-rich foods like red meat, spinach, and beans. Include foods rich in healthy fats like avocado and olive oil.";
        exercise = "Low-impact activities like walking, prenatal yoga, and light stretching.";
    }
    else if (weeks >= 27 && weeks <= 40) {
        nutritionalReq = {
            calories: 2200,
            protein: 80,
            iron: 35,
            calcium: 1200
        };
        foodMeals = "Include high-protein foods like lean meats, dairy, nuts, and beans. Increase calcium-rich foods like yogurt and cheese.";
        exercise = "Gentle stretching, walking, and squats to prepare your body for labor.";
    }

    // medical condition
    if (medicalCondition === 'diabetes') {
        medical = "For gestational diabetes, focus on foods with a low glycemic index such as whole grains, leafy greens, and lean proteins.";
    } else if (medicalCondition === 'hypertension') {
        medical = "For high blood pressure, reduce sodium intake and focus on potassium-rich foods like bananas and spinach.";
    } else if (medicalCondition === 'hypotension') {
        medical = "For low blood pressure, eat iron-rich foods like spinach and red meat, and increase salt intake as advised by your doctor.";
    } else if (medicalCondition === 'cholesterol') {
        medical = "For high cholesterol, focus on healthy fats like avocado, olive oil, and nuts. Avoid fried foods.";
    } else if (medicalCondition === 'thyroid') {
        medical = "For thyroid issues, eat iodine-rich foods like seaweed and ensure adequate selenium intake from Brazil nuts.";
    }

    return { nutritionalReq, foodMeals, exercise, medical };
}

function displayRecommendations(name, recommendations) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = `
        <h2>Hi ${name}, here are your personalized recommendations:</h2>
        
        <div class="section calories">
            <h3>Recommended Calories:</h3>
            <ul>
                <li>${recommendations.nutritionalReq.calories} kcal</li>
            </ul>
            <h4>Foods to Include for Calories:</h4>
            <ul>
                <li>Whole grains (brown rice, oats)</li>
                <li>Lean meats (chicken, turkey)</li>
                <li>Eggs and tofu</li>
                <li>Avocados</li>
                <li>Healthy snacks like nuts and seeds</li>
            </ul>
        </div>

        <div class="section-protein">
            <h3>Recommended Protein:</h3>
            <ul>
                <li>${recommendations.nutritionalReq.protein} grams per day</li>
            </ul>
            <h4>Foods to Include for Protein:</h4>
            <ul>
                <li>Lean meats (chicken, turkey, lean beef)</li>
                <li>Eggs, tofu, and legumes (beans, lentils)</li>
                <li>Nuts and seeds</li>
                <li>Greek yogurt and cottage cheese</li>
            </ul>
        </div>

        <div class="section-iron">
            <h3>Recommended Iron:</h3>
            <ul>
                <li>${recommendations.nutritionalReq.iron} mg per day</li>
            </ul>
            <h4>Foods to Include for Iron:</h4>
            <ul>
                <li>Leafy greens (spinach, kale)</li>
                <li>Red meat, chicken, and turkey</li>
                <li>Lentils, beans, and chickpeas</li>
                <li>Fortified cereals</li>
            </ul>
        </div>

        <div class="section-calcium">
            <h3>Recommended Calcium:</h3>
            <ul>
                <li>${recommendations.nutritionalReq.calcium} mg per day</li>
            </ul>
            <h4>Foods to Include for Calcium:</h4>
            <ul>
                <li>Yogurt, cheese, and milk</li>
                <li>Leafy greens (collard greens, broccoli)</li>
                <li>Fortified plant-based milks (almond, soy, oat)</li>
                <li>Sardines and salmon (with bones)</li>
            </ul>
        </div>

        <div class="section">
            <h3>Exercise Recommendations:</h3>
            <ul>
                <li>${recommendations.exercise}</li>
            </ul>
        </div>

        <div class="section">
            <h3>Medical Considerations:</h3>
            <ul>
                <li>${recommendations.medical}</li>
            </ul>
        </div>
    `;
    recommendationsDiv.style.display = 'block';
}
