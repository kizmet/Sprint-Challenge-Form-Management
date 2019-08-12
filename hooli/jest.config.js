module.exports = {
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "s@testing-library/jest-dom/extend-expect"
  ]
  // ... other options ...
};
