
const form = document.getElementById("weatherForm");
const locationInput = document.getElementById("locationInput");
const locationName = document.getElementById("locationName");
const temperature = document.getElementById("temperature");
const weatherDisplay = document.getElementById("weatherDisplay");
const errorMsg = document.getElementById("error");

const apiKey = "51a8ae24545a404da6932934250508";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = locationInput.value.trim();
  if (!location) return;

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Invalid response");

    const data = await response.json();

    locationName.textContent = `${data.location.name}, ${data.location.country}`;
    temperature.textContent = data.current.temp_c;

    weatherDisplay.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  } catch (error) {
    weatherDisplay.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
