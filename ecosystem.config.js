module.exports = {
    apps: [
      {
        name: "echo bot ", // Name of your bot
        script: "index.js", // Path to your bot's main file
        instances: 1, // Number of instances to run
        autorestart: true, // Automatically restart the bot if it crashes
        watch: false, // Set to true to watch for file changes
        max_memory_restart: "1G", // Restart if memory usage exceeds 1GB
        env: {
          NODE_ENV: "development", // Environment variables for development
        },
        env_production: {
          NODE_ENV: "production", // Environment variables for production
        },
      },
    ],
  };