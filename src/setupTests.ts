import "@testing-library/jest-dom";
// @ts-ignore
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);
