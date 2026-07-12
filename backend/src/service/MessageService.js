const Message = require("../models/Message");

const createMessage = async (messageData) => {
    const message = await Message.create(messageData);
    return message;
};

const getMessage = async () =>{
    return await Message.find().sort({timestamp: 1});
};

module.exports = {
    createMessage,
    getMessage
};