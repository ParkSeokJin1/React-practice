export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "박석진" }), 2000);
  });
};
