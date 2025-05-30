class User2 {
    _username;
    constructor(username) {
        this.username = username;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        if (newUsername.length < 3) {
            throw new Error('Username must be atleast 3 characters!');
        }
        this._username = newUsername;
    }
}
export {};
//# sourceMappingURL=10th.js.map