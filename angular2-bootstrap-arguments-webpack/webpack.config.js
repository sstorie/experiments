// An attempt at a very simple webpack config file that shows
//  the minimum required to "compile" an angular app 
//

module.exports = {
    // Define the entry points for our application so webpack knows what to 
    //  use as inputs
    //
    entry: {
        app: ["./app/main"]
    },

    // Define where the resulting file should go
    //
    output: {
        filename: "assets/[name].bundle.js"
    },

    // Define the extensions that we want webpack to resolve (we need to 
    //  override the default to ensure .ts files are included)
    //
    resolve: {
        extensions: ["", ".ts", ".js"]
    },

    module: {
        loaders: [
            // Process any typescript or typescript-jsx files using the ts-loader
            //
            {
                test: /\.tsx?$/,
                loaders: ["ts-loader"]
            }
        ]
    }
}