const messageService = require('../service/MessageService');

const sendMessage = async (req, res, next) => {
    try {
        const { username , text} = req.body;
        
        if(!username || !text){
            return res.status(400).json({
                    success : false,
                    message : "Username and text are required"
            });
        }

        const message = await messageService.createMessage({
            username,
            text,
            timestamp : new Date()
        });
        
        return res.status(201).json({
            success : true,
            data : message
        });


    }catch(error){
        next(error);
    }
};

const getMessages = async (req, res, next) => {
    try{
        const messages = await messageService.getMessage();

        return res.status(200).json({
            success : true,
            count : messages.length,
            data : messages
        });
    }catch(error){
        next(error);
    }    
};

module.exports = {
    sendMessage,
    getMessages
};