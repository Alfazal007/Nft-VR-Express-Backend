import { genAI } from "../../constants.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const getAIResponse = asyncHandler(async (req, res) => {
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
            question + "tell me in a single para under 100 characters"
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

export { getAIResponse };
