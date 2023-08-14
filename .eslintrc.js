/*
 * ---------------------------------------------
 * Author: Jay Christopher A Anacio
 * Date:   Saturday August 12th 2023
 * Last Modified by: Jay Christopher A Anacio - <jcaanacio@gmail.com>
 * Last Modified time: August 12th 2023, 3:11:34 am
 * ---------------------------------------------
 */

// eslint-disable-next-line no-undef
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "angular"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // Define your custom linting rules here
  },
  settings: {
    angular: {
      version: "16.1.0", // Specify your Angular version here
    },
  },
};
