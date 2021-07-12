let Config = {
    PERSIST_SECRET_KEY: "ReactNativeBoilerPlate",
    ENVIRONMENT: "DEVELOPMENT",
    ENVIRONMENTS: {
        LOCAL: {
            API_URL: "http://localhost:3000", // Your backend API url goes here.
        },
        DEVELOPMENT: {
            API_URL: "http://localhost:3000",
        },
        PRODUCTION: {
            API_URL: "http://localhost:3000",
        }
    }
};

Config.env = () => {
    return Config.ENVIRONMENTS[Config.ENVIRONMENT];
};

export default Config;
