import ChatModel from "../Models/ChatModel.js";


export const createChat = async (req, res) => {
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId]
    })
}
