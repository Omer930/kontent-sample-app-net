const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "59384bd5d9fec07bc34d8fd1520dab0593cf8709",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
