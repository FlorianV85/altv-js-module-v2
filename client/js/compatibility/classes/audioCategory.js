/// <reference path="../../../../types/shared/index.d.ts" />
/// <reference path="../../../../types/client/index.d.ts" />
// import * as alt from "@altv/client";

class AudioCategory extends alt.AudioCategory {
    constructor(...args) {
        // NOTE (xLuxy): This prevents the infinite loop caused by alt.*.create
        if (!args.length) return super();

        return alt.AudioCategory.get(args[0]);
    }

    static getForName(name) {
        return alt.AudioCategory.get(name);
    }
}

cppBindings.registerCompatibilityExport("AudioCategory", AudioCategory);
