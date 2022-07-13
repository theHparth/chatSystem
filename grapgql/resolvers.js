module.exports = {
  Query: {
    getUsers: () => {
      const users = [
        {
          username: "Parth",
          email: "z@gmail.com",
        },
        {
          username: "Ujas",
          email: "x@gmail.com",
        },
      ];
      return users;
    },
  },
};
