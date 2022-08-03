module.exports = {
    root: true,
    overrides: [
      {
        files: ["*.ts"],
        parserOptions: {
          project: [
            "tsconfig.*?.json",
          ],
          createDefaultProgram: true
        },
        extends: [
          "plugin:@angular-eslint/recommended",
          "prettier",
          "plugin:@angular-eslint/template/process-inline-templates",
          "eslint:recommended",
          "plugin:@typescript-eslint/recommended",
          "plugin:@typescript-eslint/recommended-requiring-type-checking"
        ],
        rules: {
          "@typescript-eslint/unbound-method": "off", 
          "@typescript-eslint/no-unsafe-call": "off",
          "@typescript-eslint/no-unsafe-member-access": "off"
        }
      },
      {
        files: ["*.component.html"],
        extends: [
            "plugin:@angular-eslint/template/recommended"
            ],
        rules: {
          "max-len": ["error", { "code": 140 }]
        }
      },
      {
        files: ["*.component.ts"],
        extends: ["plugin:@angular-eslint/template/process-inline-templates"]
      }
    ]
  }