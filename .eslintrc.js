module.exports = {
    root: true,
    extends: "@react-native-community",
    "prettier/prettier": [
        "error",
        {
            arrowParens: "avoid",
            bracketSameLine: true,
            bracketSpacing: false,
            singleQuote: true,
            trailingComma: "all",
            tabWidth: 4,
        },
    ],
};
