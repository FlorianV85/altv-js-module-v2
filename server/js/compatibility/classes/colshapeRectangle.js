/// <reference path="../../../../types/shared/index.d.ts" />
/// <reference path="../../../../types/server/index.d.ts" />
// import * as alt from "@altv/server";

const { WorldObject } = requireBinding("server/compatibility/classes/worldObject.js");
const { BaseObject } = requireBinding("server/compatibility/classes/baseObject.js");

const { extendAltEntityClass } = requireBinding("shared/compatibility/utils/classes.js");

class ColshapeRectangle extends alt.ColShape {
    constructor(...args) {
        const [x, y, x2, y2] = args;
        const instance = alt.ColShapeRectangle.create({
            pos1: { x, y },
            pos2: { x: x2, y: y2 }
        });

        return extendAltEntityClass(instance, WorldObject, BaseObject);
    }
}

cppBindings.registerCompatibilityExport("ColshapeRectangle", ColshapeRectangle);
