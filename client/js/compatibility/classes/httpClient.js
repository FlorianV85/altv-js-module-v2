/// <reference path="../../../../types/shared/index.d.ts" />
/// <reference path="../../../../types/client/index.d.ts" />
// import * as alt from "@altv/client";

class HttpClient extends alt.HttpClient {
    setExtraHeader(key, value) {
        super.extraHeaders[key] = value;
    }

    getExtraHeaders() {
        return super.extraHeaders;
    }
}

cppBindings.registerCompatibilityExport("HttpClient", HttpClient);
