var Config = {
    ENVIRONMENT: "LOCAL",
    ENVIRONMENTS: {
        LOCAL: {
            API_URL: "https://########",
            GOOGLE_GEOCODING_API_KEY: "AIzaSyB6VeOPCxpQ9oGUNOSIRMlEuNhXrtS9YAM"
        },
        DEVELOPMENT: {
            GOOGLE_GEOCODING_API_KEY: "AIzaSyB6VeOPCxpQ9oGUNOSIRMlEuNhXrtS9YAM"
        },
        STAGING: {
            GOOGLE_GEOCODING_API_KEY: "AIzaSyB6VeOPCxpQ9oGUNOSIRMlEuNhXrtS9YAM"
        },
        PRODUCTION: {
            GOOGLE_GEOCODING_API_KEY: "AIzaSyB6VeOPCxpQ9oGUNOSIRMlEuNhXrtS9YAM"
        }
    }
};
Config.env = () => {
    return Config.ENVIRONMENTS[Config.ENVIRONMENT];
};
export default Config;
