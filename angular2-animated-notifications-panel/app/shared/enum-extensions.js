// Pulled from http://stackoverflow.com/a/21294925/571237
//
"use strict";
var EnumEx = (function () {
    function EnumEx() {
    }
    EnumEx.getNamesAndValues = function (e) {
        return this.getNames(e).map(function (n) { return { name: n, value: e[n] }; });
    };
    EnumEx.getNames = function (e) {
        return this.getObjValues(e).filter(function (v) { return typeof v === "string"; });
    };
    EnumEx.getValues = function (e) {
        return this.getObjValues(e).filter(function (v) { return typeof v === "number"; });
    };
    EnumEx.getObjValues = function (e) {
        return Object.keys(e).map(function (k) { return e[k]; });
    };
    return EnumEx;
}());
exports.EnumEx = EnumEx;
