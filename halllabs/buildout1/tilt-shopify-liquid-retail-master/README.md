# tilt-shopify-liquid-retail
Tilt Shopify theme for the retail website

This requires the Shopify nodejs tool Slate, version 0.14.0 or less. [The docs can be found here.](https://shopify.github.io/slate.shopify.com/docs/0.14.0/) This theme is based off the free *Debut* theme, and is not compatible with newer versions of Shopify Slate. The theme is written in Shopify's `.liquid` templating engine, and on filechange it uploads the whole project to shopify's servers for rendering, and hotreloads the browser. [You need the themeID](https://community.shopify.com/c/Shopify-Design/How-do-I-find-my-theme-id-While-setting-up-shopify-theme-gem/m-p/189434) and Shopify API keys to connect the local project to a specific shopify store and a specific theme. Add these to the `config.yml` in the root of the project. 

Once the local enviornment is configured, and the slate tool installed globally, run

`slate watch`

to start watching files for changes. When you are ready to deploy changes, run

`slate deploy -e ${enviornment}`

Where the `enviornment` is set in the config.yml; eg `slate deploy -e production`. 
