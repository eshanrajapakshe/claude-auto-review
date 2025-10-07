# Testing Guidelines for Claude

- Always **add new Jest test cases**, never remove or modify existing ones.
- Each new feature or edge case should be tested in a **separate `test()` block**.
- Do not merge existing test cases into one combined test.
- If new behavior is added (like handling strings in `sum()`), add a new test *below* the existing one.
- If an appropriate test file exists, append to it; if not, create a new file named `<filename>.extra.test.js`.
