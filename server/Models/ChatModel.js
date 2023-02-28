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




const ChatModel = mongoose.model("Chat",ChatScheema)





export default ChatModel

