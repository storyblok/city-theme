# About

This is one of the themes for Storyblok - the cms as a service platform.

It's using gulp and browsersync to proxy the requests to Storyblok so you can edit the theme live.

Checkout the [theme documentation](https://www.storyblok.com/docs/Rendering-Service/Theme-Documentation) to know more about the template syntax.

## Getting started

1. Clone the repository ```git clone https://github.com/storyblok/city-theme```
2. Rename ```_token.js``` to ```token.js``` and insert your theme token. You can find your theme token in the space settings of the [Storyblok app](https://app.storyblok.com).
3. Replace INSERT_SPACE_ID with your space id and INSERT_YOUR_DOMAIN with your domain in ```config.js```. You can find your space id and domain in the space settings.
4. Run ```npm install```
5. Run ```gulp```
6. Ready! You can now edit the templates in ```views``` or defining css in the ```source``` folder.
