/// <reference path="../../../../types/shared/index.d.ts" />
/// <reference path="../../../../types/client/index.d.ts" />
// import * as alt from "@altv/client";

requireBinding("shared/entity.js");

const { SharedBlip } = requireBinding("shared/compatibility/classes/sharedBlip.js");
const { BaseObject } = requireBinding("client/compatibility/classes/baseObject.js");

const { extendAltEntityClass } = requireBinding("shared/compatibility/utils/classes.js");

class RadiusBlip {
    constructor(x, y, z, radius) {
        const instance = alt.RadiusBlip.create({
            pos: { x, y, z },
            radius
        });

        return extendAltEntityClass(instance, SharedBlip, BaseObject);
    }
}

cppBindings.registerCompatibilityExport("RadiusBlip", RadiusBlip);
