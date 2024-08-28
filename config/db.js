const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect("mongodb+srv://kuldeepgupta:Kg13101996@cluster0.htgjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB Connected");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
};

module.exports = connectDB;
