# Angular Code Quality Enforcer

## Project Description

This Angular project integrates ESLint and Prettier to enforce code quality and consistency across the codebase. It includes configurations to lint TypeScript and HTML files and format code using Prettier. The project demonstrates best practices for maintaining high code quality and consistent style.

## ESLint Configuration

### Configuration Overview

- **Base Configuration**: Extended from recommended Angular and ESLint configurations to cover common linting rules and best practices.
- **Custom Rules**: Added specific rules to enforce consistent code style and prevent common mistakes.
  - **`semi`**: Enforces the use of semicolons at the end of statements.
  - **`no-console`**: Warns about console statements to avoid leaving debug logs in production code.

### .eslintrc.json

The `.eslintrc.json` file has been configured to extend Angular's recommended settings and include custom rules. Below is an example configuration:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@angular-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "semi": ["error", "always"],
    "no-console": "warn"
  }
}
```
