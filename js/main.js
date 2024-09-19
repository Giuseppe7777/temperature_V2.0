
        function generateWeather() {
            let randomTemperature = Math.random() * (40 - (-5)) + (-5);
            let description = "";
            let imageUrl = "";

            // Weather description by temperature
            if (randomTemperature <= 0) {
                imageUrl = "https://cdn.pixabay.com/photo/2012/03/04/00/53/ice-22122_1280.jpg";
                description = "The weather is freezing.";
            } else if (randomTemperature > 0 && randomTemperature <= 10) {
                description = "The weather is cold.";
                imageUrl = "https://cdn.pixabay.com/photo/2016/01/08/06/13/woman-1127201_1280.jpg";
            } else if (randomTemperature > 10 && randomTemperature <= 20) {
                description = "The weather is moderate.";
                imageUrl = "https://cdn.pixabay.com/photo/2021/10/26/06/36/sea-6742760_1280.jpg";
            } else if (randomTemperature > 20 && randomTemperature <= 30) {
                description = "The weather is warm.";
                imageUrl = "https://cdn.pixabay.com/photo/2020/04/13/11/49/forest-5038025_1280.jpg";
            } else if (randomTemperature > 30 && randomTemperature <= 35) {
                description = "The weather is hot.";
                imageUrl = "https://www.kashtan.news/wp-content/uploads/2024/07/pohoda1-6.jpg";
            } else {
                description = "The weather is very hot.";
                imageUrl = "https://www.rbc.ua/static/img/_/k/_kiev_pogoda_1200x675.jpg";
            }

            // Data output to the page
            document.getElementById("temperature").textContent = "Temperature: " + randomTemperature.toFixed(1) + "°C";
            document.getElementById("description").textContent = description;
            document.getElementById("weatherImage").src = imageUrl;
        }

        // Call the function on page load
        window.onload = generateWeather;