# React three fiber and physics starter

## Tools

| Packages            | Description                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| @react-three/fiber  | React-three-fiber is a React renderer for three.js.                                                                    |
| @react-three/drei   | A growing collection of useful helpers and fully functional, ready-made abstractions for @react-three/fiber            |
| @react-three/cannon | physics based hooks for @react-three/fiber                                                                             |
| Vite                | Next generation frontend tooling. It's fast!                                                                           |
| Typescript          | TypeScript speeds up your development experience by catching errors and providing fixes before you even run your code. |

## !! IMPORTANT !!

```
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};

```

because of type mismatch with cannon and three.js ref

```
'@typescript-eslint/ban-ts-comment': 'off',
```

Ban-ts-comment is made off and you can use @ts-ignore whenever you encounter type mismatch of cannon and three.js
