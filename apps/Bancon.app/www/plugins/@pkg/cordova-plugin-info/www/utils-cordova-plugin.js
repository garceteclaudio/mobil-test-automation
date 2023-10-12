cordova.define("@pkg/cordova-plugin-info.utils-cordova-plugin", function(require, exports, module) {
const BASE_ERROR = ({
    /** Error thrown in internal process. */
    INTERNAL: 999,
    /** Error catched by internal process of unknown nature. */
    UNKNOWN: 666,
    /** Error thrown inside the native logic, given action is not avialable. */
    INVALID_ACTION: 777,
    /** Error thrown inside the native logic, given arguments were of incorrect type. */
    INVALID_ARGS: 555,
});

const BASE_RESPONSE = ({
    /** The response is generic and valid */
    OK: 1,
});

const BASE_REPL = (exports.BASE_REPL = ("%"));

exports.Utils = class Utils {
    constructor({ NAME, ERROR, ERROR_MESSAGE, RESPONSE, ACTION, REPL = BASE_REPL }) {
        Object.values(ACTION).forEach((action) => {
            if (!Reflect.has(this, action)) throw new Error(`Invalid action: ${action}`);
        });

        const BASE_ERROR_MESSAGE = ({
            [BASE_ERROR.INTERNAL]: `[Internal Error] ${REPL}`,
            [BASE_ERROR.UNKNOWN]: `[Unknown Error] ${REPL}`,
        });

        this.NAME = NAME;
        this.RESPONSE = Object.assign(BASE_RESPONSE, RESPONSE);
        this.ERROR = Object.assign(BASE_ERROR, ERROR);
        this.REPL = REPL;
        this.ACTION = ACTION;
        this.ERROR_MESSAGE = Object.assign(BASE_ERROR_MESSAGE, ERROR_MESSAGE);
    }

    /**
     * Shorthand utility to return ErrorObjects
     *
     * @param code - The error code to work with.
     * @param replacements - In case the error needs replacements, put them here.
     * @return code: number, message: string
     */
    getError(code, ...replacements) {
        if (typeof code !== "number") {
            return {
                code: this.ERROR.INTERNAL,
                message: "Expecting a valid error code",
            };
        }
        const message = replacements
            .reduce(
                (msg, arg) => msg.replace("%", arg),
                this.ERROR_MESSAGE[code]
            )
            // remove remaining replacements (if any)
            .replace(this.REPL, "");
        return { code, message };
    }

    /**
     * Manages what is being sent to cordova as arguments.
     *
     * @protected
     * @param args
     */
    getParam(args = {}) {
        if (!args || typeof args !== "object" || Array.isArray(args)) {
            throw new TypeError("Expecting an args object");
        }
        return [
            {
                NAME: this.NAME,
                ERROR: this.ERROR,
                RESPONSE: this.RESPONSE,
                ACTION: this.ACTION,
            },
            args,
        ];
    }
};

});
