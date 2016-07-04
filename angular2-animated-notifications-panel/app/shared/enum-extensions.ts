// Pulled from http://stackoverflow.com/a/21294925/571237
//

export class EnumEx {
    static getNamesAndValues(e: any) {
        return this.getNames(e).map(n => { return { name: n, value: e[n] as number }; });
    }

    static getNames(e: any) {
        return this.getObjValues(e).filter(v => typeof v === "string") as string[];
    }

    static getValues(e: any) {
        return this.getObjValues(e).filter(v => typeof v === "number") as number[];
    }

    private static getObjValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }
}