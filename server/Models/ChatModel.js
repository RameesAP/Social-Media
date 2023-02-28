import mongoose from 'mongoose'

const ChatScheema = mongoose.Schema({
    members: {
        type: Array,
    },
},
    {
        timestamps: true,
    }
);

const ChatModel = mongoose.Schema("Chat",ChatModel)

export default ChatModel