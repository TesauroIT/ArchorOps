module.exports = {
  apps: [
    {
      name: "archon-ops",
      script: "npm",
      args: "run start",
      env: {
        PORT: 3000,
      },
    },
  ],
};
