cordova.define("@pkg/cordova-plugin-info.Info", function(require, exports, module) {
const { Utils, BASE_REPL } = require("./utils-cordova-plugin");

const ERROR = ({
    /** The provided schema name is not part of provided schema. */
    SCHEMA_NOT_FOUND: 200,
    /** The operation system provided is not supported. */
    SCHEMA_OS_INVALID: 201,
});

const RESPONSE = ({});

const OS_NAME = ({
    ANDROID: "Android",
    IOS: "iOS",
});

class Plugin extends Utils {
    constructor() {
        const R = BASE_REPL;
        super({
            NAME: "Info",
            ACTION: {
                GET: "get",
                IS_SCHEMA_AVAILABLE: "isSchemaAvailable",
            },
            ERROR,
            ERROR_MESSAGE: {
                [ERROR.SCHEMA_NOT_FOUND]: `Schema '${R}' not found.`,
                [ERROR.SCHEMA_OS_INVALID]: `Schema '${R} does not have declaration for OS '${R}'.`,
            },
            RESPONSE,
        });

        this.OS_NAME = OS_NAME;
    }

    /**
     * Gets information about the current device.
     */
    get() {
        return new Promise((resolve, reject) => {
            try {
                window.cordova.exec(
                    /** @param {PluginResponse<ResponseGet>} res - succesful response */
                    (res) => resolve(res.data || res),
                    /** @param {CodeError} err - Error code */
                    (err) => {
                        throw this.getError(err);
                    },
                    this.NAME,
                    this.ACTION.GET,
                    this.getParam()
                );
            } catch (/** @type {Error | ErrorCordova} */ err) {
                if (err instanceof Error) reject(this.getError(this.ERROR.UNKNOWN, err.message));
                else reject(err);
            }
        });
    }

    /**
     * Determines if given schema (application) is installed on the device.
     * @param schemas - A schema dictionary.
     * @param name - The schema to be resolved (must be in dictionary).
     * @return Promise<ResponseIsSchema> - Whether the schema was found on the device or not.
     */
    isSchemaAvailable(schemas, name) {
        return new Promise((resolve, reject) => {
            try {
                if (!schemas[name]) throw this.getError(this.ERROR.SCHEMA_NOT_FOUND, name);
                this.get().then((info) => {
                    const { osName } = info;
                    const schema = schemas[name][osName];
                    if (!schema) throw this.getError(this.ERROR.SCHEMA_OS_INVALID, name, osName);
                    // TODO: iOS responses should be the same on iOS and Android.
                    window.cordova.exec(
                        /** @param res - succesful response */
                        (res) => resolve(Boolean(osName === this.OS_NAME.IOS ? res : res.data)),
                        /** @param err - erroneos response */
                        (err) => {
                            throw this.getError(err);
                        },
                        this.NAME,
                        this.ACTION.IS_SCHEMA_AVAILABLE,
                        this.getParam({ schema })
                    );
                });
            } catch (err) {
                if (err instanceof Error) reject(this.getError(this.ERROR.UNKNOWN, err.message));
                else reject(err);
            }
        });
    }
}

exports.info = new Plugin();

});
