// mock api call
const checkUsernameAndPassword = (
  username: string,
  password: string
): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(true);
    }, 500);
  });

export { checkUsernameAndPassword };
