var cowsay = require("cowsay");

var cow_say = function (req) {
    let text;

    text = req.query.text;

    if(text == undefined)
        text = "Hi please dont hack me!";

    return `<pre>${cowsay.say({ text })}</pre>`;
}

module.exports.cow_say = cow_say