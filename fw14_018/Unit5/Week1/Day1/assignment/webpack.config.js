const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output : {
        path : path.join(__dirname, "build"),
        filename: "bundle.js",
    },

    module :{
        rules:[
             {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
             },
             {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    }
                  },
                ],
               type: 'javascript/auto'
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ],
    },
        
};