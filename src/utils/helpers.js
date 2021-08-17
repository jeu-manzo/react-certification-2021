export function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export const makeFetchResponse = (mockData) => ({
  json: () => Promise.resolve(mockData),
});
