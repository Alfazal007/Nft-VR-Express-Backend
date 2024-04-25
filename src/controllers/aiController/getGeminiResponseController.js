const { GoogleGenerativeAI } = require("@google/generative-ai");
const { ApiResponse } = require("../../utils/ApiResponse.js");
const { asyncHandler } = require("../../utils/asyncHandler.js");


const getAIResponse = asyncHandler(async (req, res) => {
    const geminiApiKey = process.env.GEMINI_API_KEY;
    genAI = new GoogleGenerativeAI(geminiApiKey);
    const { question } = req.body;
    if (!question || question.length < 2) {
        return res.status(200).json(
            new ApiResponse(200, "Invalid question", {
                message: "Give complete valid question with some context",
            })
        );
    }
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(
            question + ", tell me in under 100 characters only plain string no line spaces. Dont add any special characters please."
        );
        const response = await result.response;
        const text = response.text();
        return res.status(200).json(text);
    } catch (err) {
        console.log(err);
        return res
            .status(200)
            .json(new ApiResponse(500, "Issue at server", {}));
    }
});

module.exports = { getAIResponse };
