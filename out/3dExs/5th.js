"use strict";
class Message {
    send() {
        return 'Sending message...';
    }
}
class EmailMessage extends Message {
    send() {
        return 'Sending email...';
    }
}
class SMSMessage extends Message {
    send() {
        return 'Sending sms...';
    }
}
const messages = [new Message(),
    new EmailMessage(), new SMSMessage()];
messages.forEach((msg) => {
    console.log(msg.send());
});
//# sourceMappingURL=5th.js.map