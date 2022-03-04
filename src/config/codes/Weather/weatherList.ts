//weather
import { fogWeatherCodes } from "./fog-weather";
import { rainWeatherCodes } from "./rain-weather";
import { snowWeatherCodes } from "./snow-weather";



const weatherList =
{
  title: "天气系统示例",
  children: [
    {
      title: '雾',
      html: fogWeatherCodes.html,
      css: fogWeatherCodes.css,
      js: fogWeatherCodes.js,
    },
    {
      title: '雨',
      html: rainWeatherCodes.html,
      css: rainWeatherCodes.css,
      js: rainWeatherCodes.js,
    },
    {
      title: '雪',
      html: snowWeatherCodes.html,
      css: snowWeatherCodes.css,
      js: snowWeatherCodes.js,
    }
  ],
};

export { weatherList };
