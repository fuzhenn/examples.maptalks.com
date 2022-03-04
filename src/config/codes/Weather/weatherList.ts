//weather
import { fogWeatherCodes } from "./fog-weather";
import { rainWeatherCodes } from "./rain-weather";
import { snowWeatherCodes } from "./snow-weather";



const weatherList =
{
    title: "天气系统示例",
    children: [
        {
            title: '1.1 雾',
            html: fogWeatherCodes.html,
            css: fogWeatherCodes.css,
            js: fogWeatherCodes.js,
        },
        {
            title: '1.2 雨',
            html: rainWeatherCodes.html,
            css: rainWeatherCodes.css,
            js: rainWeatherCodes.js,
        },
        {
            title: '1.3 雪',
            html: snowWeatherCodes.html,
            css: snowWeatherCodes.css,
            js: snowWeatherCodes.js,
        }
    ],
};

export { weatherList };
