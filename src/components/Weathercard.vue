<template>
  <div class="card">
    <div class="search">
      <input
        v-model="cityName"
        type="text"
        placeholder="Enter a city name"
        spellcheck="false"
      />
      <button @click="fetchWeatherData" class="btn">
        <img src="../../images/items from youtube/images/search.png" />
      </button>
    </div>
    <div v-if="error">
      <p>Invalid city name, please enter a correct city name</p>
    </div>
    <div class="weather" v-if="weatherData">
      <img :src="weatherIcon" class="weather-icon" />
      <h1 class="temp">{{ temp }}°C</h1>
      <h2 class="city">{{ formattedCityName }}</h2>
      <div class="details">
        <div class="col">
          <img src="../../images/items from youtube/images/humidity.png" />
          <div>
            <p class="humidity">{{ weatherData.main.humidity }}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="col">
          <img src="../../images/items from youtube/images/wind.png" />
          <div>
            <p class="wind">{{ weatherData.wind.speed }}km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clouds from "../../images/items from youtube/images/clouds.png";
import Clear from "../../images/items from youtube/images/clear.png";
import Drizzle from "../../images/items from youtube/images/drizzle.png";
import Mist from "../../images/items from youtube/images/mist.png";
import Rain from "../../images/items from youtube/images/rain.png";
import Snow from "../../images/items from youtube/images/snow.png";
const apiKey = "eefe897d70a69396fdab44e353d32e07";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export default {
  data() {
    return {
      cityName: "",
      error: false,
      weatherData: null,
      temp: null,
    };
  },
  computed: {
    formattedCityName() {
      if (this.weatherData) {
        if (this.weatherData.name === "Hangzhou") {
          return "Şevval的城市";
        } else if (this.weatherData.name === "Istanbul") {
          return "Şevval的家";
        }
        return this.weatherData.name;
      }
      return "";
    },
    weatherIcon() {
      if (this.weatherData) {
        switch (this.weatherData.weather[0].main) {
          case "Clouds":
            return Clouds;
          case "Clear":
            return Clear;
          case "Drizzle":
            return Drizzle;
          case "Mist":
            return Mist;
          case "Rain":
            return Rain;
          case "Snow":
            return Snow;
        }
      }
      return "";
    },
  },
  methods: {
    async fetchWeatherData() {
      try {
        const response = await fetch(
          apiUrl + this.cityName + `&appid=${apiKey}`
        );

        if (!response.ok) {
          this.error = true;
          this.weatherData = null;
          return;
        }
        this.error = false;
        this.weatherData = await response.json();
        this.temp = await Math.round(this.weatherData.main.temp);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        this.error = true;
        this.weatherData = null;
      }
    },
  },
};
</script>

<style>
/* Your component-specific styles if any */
</style>
