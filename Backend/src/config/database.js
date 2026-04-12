const mongoose = require("mongoose")

async function connectToDB() {
    const connect = async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                serverSelectionTimeoutMS: 10000,
                socketTimeoutMS: 45000,
            })
            console.log("✅ Connected to Database")
        } catch (err) {
            console.error("❌ DB Connection Error:", err.message)
            console.log("🔄 Retrying database connection in 5 seconds...")
            setTimeout(connect, 5000)
        }
    }
    connect()
}

module.exports = connectToDB