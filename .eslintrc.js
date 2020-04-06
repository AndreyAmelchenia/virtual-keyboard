module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    //"extends": "eslint:recommended",
    "extends": "airbnb-base/legacy",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
         "space-before-blocks": "off",
         "indent": "off",
         "linebreak-style" : "off",
         "key-spacing" : "off"

        // "semi": ["warn", "always"],
        //"quotes": ["error", "double"]
    }
};