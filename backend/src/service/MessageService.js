const message = require("../models/Message");

const createMessage = async (messageData) => {
    const message = await message.create(messageData);
    return message;
};

const getMessage = async () =>{
    return await message.find().sort({timestamp: 1});
};

module.exports = {
    createMessage,
    getMessage
};