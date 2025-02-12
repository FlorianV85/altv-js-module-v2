/// <reference path="../../../../types/shared/index.d.ts" />
/// <reference path="../../../../types/server/index.d.ts" />
// import * as alt from "@altv/server";

requireBinding("shared/entity.js");

const { SharedBlip } = requireBinding("shared/compatibility/classes/sharedBlip.js");
const { BaseObject } = requireBinding("server/compatibility/classes/baseObject.js");
const { WorldObject } = requireBinding("server/compatibility/classes/worldObject.js");

const { extendAltEntityClass } = requireBinding("shared/compatibility/utils/classes.js");

class RadiusBlip {
    constructor(x, y, z, radius, global) {
        const instance = alt.RadiusBlip.create({
            pos: { x, y, z },
            radius,
            global
        });

        return extendAltEntityClass(instance, SharedBlip, WorldObject, BaseObject);
    }
}

cppBindings.registerCompatibilityExport("RadiusBlip", RadiusBlip);
