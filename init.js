const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//sample data for project at initialization

let allchats = [
    {
        from: "Sami",
        to: "Kartik",
        msg: "what you doing?",
        created_at: new Date,
    },
    {
        from: "kush",
        to: "sami",
        msg: "kya hai bey",
        created_at: new Date,
    },
    {
        from: "arjun",
        to: "kush",
        msg: "sab chalegi",
        created_at: new Date,
    },
    {
        from: "Kartik",
        to: "ayush",
        msg: "bhai party dede",
        created_at: new Date,
    },
    {
        from: "chikki",
        to: "kush",
        msg: "we go jim",
        created_at: new Date,
    },
];

Chat.insertMany(allchats);