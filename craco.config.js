const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, "./src/" + p);

module.exports = {
    webpack: {
        alias: {
            "@components": resolvePath("components"),
            "@hooks": resolvePath("hooks"),
            "@declarations": resolvePath("declarations"),
            "@interfaces": resolvePath("interfaces"),
            "@pages": resolvePath("pages"),
            "@redux": resolvePath("redux"),
            "@styles": resolvePath("styles"),
            "@icons": resolvePath("assets/icons"),
            "@reducers": resolvePath("redux/reducers"),
        },
    },
};