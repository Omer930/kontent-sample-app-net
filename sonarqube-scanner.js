const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "f756582150263c993bd1b15f178dfe980064185c",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
