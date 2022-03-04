// //Analysis
import { viewshedAnalysisCodes } from "./viewshed-analysis";
import { floodAnalysisCodes } from "./flood-analysis";
import { skylineAnalysisCodes } from "./skyline-analysis";



const analysisList =
{
  title: "空间分析示例",
  children: [
    {
      title: '1.1 可视域分析',
      html: viewshedAnalysisCodes.html,
      css: viewshedAnalysisCodes.css,
      js: viewshedAnalysisCodes.js,
    },
    {
      title: '1.2 水淹分析',
      html: floodAnalysisCodes.html,
      css: floodAnalysisCodes.css,
      js: floodAnalysisCodes.js,
    },
    {
      title: '1.3 天际线分析',
      html: skylineAnalysisCodes.html,
      css: skylineAnalysisCodes.css,
      js: skylineAnalysisCodes.js,
    }
  ],
};

export { analysisList };
