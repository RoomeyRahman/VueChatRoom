// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "block-scoped-var":             ["error"],
    "callback-return":              ["error", ["done", "proceed", "next", "onwards", "callback", "cb"]],
    "camelcase":                    ["warn", {"properties":"always"}],
    "comma-style":                  ["warn", "last"],
    "curly":                        ["warn"],
    "eqeqeq":                       ["error", "always"],
    "eol-last":                     ["warn"],
    "handle-callback-err":          ["error"],
    "indent":                       ["warn", 4, {
      "SwitchCase": 1,
      "MemberExpression": "off",
      "FunctionDeclaration": {"body":1, "parameters":"off"},
      "FunctionExpression": {"body":1, "parameters":"off"},
      "CallExpression": {"arguments":"off"},
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ignoredNodes": ["ConditionalExpression"]
    }],
    "linebreak-style":  0,//            ["error", "unix"],
    "no-dupe-keys":                 ["error"],
    "no-duplicate-case":            ["error"],
    "no-extra-semi":                ["warn"],
    "no-labels":                    ["error"],
    "no-mixed-spaces-and-tabs":     [2, "smart-tabs"],
    "no-redeclare":                 ["warn"],
    "no-return-assign":             ["error", "always"],
    "no-sequences":                 ["error"],
    "no-trailing-spaces":           ["warn"],
    "no-undef":                     ["error"],
    "no-unexpected-multiline":      ["warn"],
    "no-unreachable":               ["warn"],
    "no-unused-vars":               ["warn", {"caughtErrors":"all", "caughtErrorsIgnorePattern": "^unused($|[A-Z].*$)", "argsIgnorePattern": "^unused($|[A-Z].*$)", "varsIgnorePattern": "^unused($|[A-Z].*$)" }],
    "no-use-before-define":         ["error", {"functions":false}],
    "one-var":                      ["warn", "never"],
    "prefer-arrow-callback":   0,//     ["warn", {"allowNamedFunctions":false}],
    "quotes":                       ["warn", "double", {"avoidEscape":false, "allowTemplateLiterals":true}],
    "semi":                         ["warn", "always"],
    "semi-spacing":                 ["warn", {"before":false, "after":true}],
    "semi-style":                   ["warn", "last"]
  }
}
