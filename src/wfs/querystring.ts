export const querystring = {
  stringify: (query) =>
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&'),
};
