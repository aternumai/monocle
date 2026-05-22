import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", "src-tauri/target"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
);
