const EventEmitter = require('events');

class ChatApp extends EventEmitter {
    /**
     * @param {String} title
     */
    constructor(title) {
        super();

        this.title = title;

        // ÐŸÐ¾ÑÑ‹Ð»Ð°Ñ‚ÑŒ ÐºÐ°Ð¶Ð´ÑƒÑŽ ÑÐµÐºÑƒÐ½Ð´Ñƒ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ
        setInterval(() => {
            this.emit('message', `${this.title}: ping-pong`);
    }, 1000);
    }

    close() {
        this.emit('close');
    }
}

module.exports = ChatApp;
