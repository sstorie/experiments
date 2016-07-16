
// Using the chance.js library to create random message strings
//
declare var Chance: any;

export enum NotificationType {
    Comment = 0,
    Alert = 1,
    Code = 2,
    Payment = 3
}

export class Notification {
    id: string;
    type: NotificationType;
    date: Date;
    message: string;

    constructor() {
        this.id = this.generateUUID();
        this.date = new Date();
        
        let chance = new Chance();
        this.message = chance.sentence({words: 5});
    }

    /**
     * A simple method to generate a GUID-like value that is (for our
     * purposes) unique every time.
     */
    private generateUUID(): string {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
}