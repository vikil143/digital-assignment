const plugins = [
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            root: ["."],
            "extensions": [".ios.js", ".android.js", ".js", ".json", ".tsx", ".ts"],
            alias: {
                "^@myapp/(.+)": "./src/\\1",
            }
        }

    ]

];