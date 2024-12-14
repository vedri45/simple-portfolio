const mongoose = require('mongoose');
const { Skill } = require('../../src/models/Skills'); // Adjust the path as necessary

exports.handler = async (event, context) => {
    // Connect to MongoDB
    const uri = process.env.MONGODB_URI; // Ensure this is set in your Netlify environment variables
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        const skills = await Skill.find();
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(skills),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: error.message }),
        };
    } finally {
        mongoose.connection.close();
    }
};