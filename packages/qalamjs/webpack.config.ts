import path from "path";
import { Configuration } from "webpack";

module.exports = (): Configuration => {
  return {
    entry: "./src/qalam.ts",
    output: {
      filename: "qalam.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        name: "QalamJS",
        type: "umd",
      },
    },
    module: {
      rules: [
        {
          test: /\.ts/,
          use: ["ts-loader"],
        },
        {
          test: /\.css/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.svg/,
          type: "asset",
        },
      ],
    },
  };
};
