const ChatApp = require('./chat');

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

let chatOnMessage = (message) => {
    console.log(message);
};

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);


// Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ Ð²ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ðµ
setTimeout( ()=> {
    console.log('Ð—Ð°ÐºÑ€Ñ‹Ð²Ð°ÑŽ Ð²ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ðµ...');
    vkChat.removeListener('message', chatOnMessage);
}, 10000 );


// Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ Ñ„ÐµÐ¹ÑÐ±ÑƒÐº
setTimeout( ()=> {
    console.log('Ð—Ð°ÐºÑ€Ñ‹Ð²Ð°ÑŽ Ñ„ÐµÐ¹ÑÐ±ÑƒÐº, Ð²ÑÐµ Ð²Ð½Ð¸Ð¼Ð°Ð½Ð¸Ðµ â€” Ð²ÐµÐ±Ð¸Ð½Ð°Ñ€Ñƒ!');
    facebookChat.removeListener('message', chatOnMessage);
}, 15000 );

/**
 * Отсюда начинается ДЗ
 */

//Part 1

function message() {
    console.log('Готовлюсь к ответу');
}

webinarChat.on('message', message);

vkChat.setMaxListeners(2);

vkChat.on('message', message);

//Part 2

vkChat.on('close', () => {
    console.log('Чат вконтакте закрылся :(');
});

vkChat.close();

//Part 3
setTimeout( ()=> {
    console.log('Отписали chatOnMessage!');
    webinarChat.removeListener('message', chatOnMessage);
}, 30000 );
