# PLUGINS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains Javascript plugins that you want to run before mounting the root Vue.js application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).

# Modernizr

- I went to the download section of their web - https://modernizr.com/download?setclasses
- I selected all the items I wanted Modernizr to test and then proceeded to download the Command Line Config file (modernizr-config.json)
- npm i -g modernizr
- modernizr -c modernizr-config.json
- I took all the code from the newly generated modernizr.js file
- I created modernizr-plugin.js file in my plugins folder and pasted the code there.
- nuxt.config.js - I imported the modernizr-plugin.js here like every other plugin in NUXT. Docs for this: https://nuxtjs.org/api/configuration-plugins
