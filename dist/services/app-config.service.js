"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var AppConfigService = /** @class */ (function () {
    function AppConfigService(platformId) {
        this.platformId = platformId;
    }
    AppConfigService.prototype.isPlatformServer = function () {
        return common_1.isPlatformServer(this.platformId);
    };
    AppConfigService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AppConfigService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    return AppConfigService;
}());
exports.AppConfigService = AppConfigService;
//# sourceMappingURL=app-config.service.js.map