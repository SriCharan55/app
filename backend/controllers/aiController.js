const { GoogleGenAI } = require("@google/genai");
const { conceptExplainPrompt, questionAnswerPrompt } = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });



/**
 * @desc    Generate interview questions and answers using Gemini
 * @route   POST /api/ai/generate-questions
 * @access  Private
 */
const generateInterviewQuestions = async (req, res) => {
    try {
        const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

        if (
            !role ||
            experience === undefined ||   // allow 0
            !topicsToFocus ||
            !numberOfQuestions
        ) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Role must always come from user (e.g., Frontend Developer)
        const safeRole = role.trim();

        // Experience → if 0 = Fresher
        const safeExperience = experience === 0 ? "Fresher" : `${experience} years`;

        const prompt = questionAnswerPrompt(safeRole, safeExperience, topicsToFocus, numberOfQuestions);

        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: prompt,
        });

        let rawText = response.text;

        // Clean it: Remove ```json and ``` from beginning and end
        const cleanedText = rawText
            .replace(/^```json\s*/, "")   // remove starting ```json
            .replace(/```$/, "")         // remove ending ```
            .trim();                     // remove extra spaces

        // Now safe to parse
        const data = JSON.parse(cleanedText);

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            message: "Failed to generate questions",
            error: error.message,
        });
    }
};

/**
 * @desc    Generate explains a interview question
 * @route   POST /api/ai/generate-explanation
 * @access  Private
 */
const generateConceptExplanation = async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const prompt = conceptExplainPrompt(question);

        const response = await ai.models.generateContent({
            model: "gemini-2.5-pro",
            contents: prompt,
        });
         let rawText = response.text;

        // Clean it: Remove ```json and ``` from beginning and end
        const cleanedText = rawText
            .replace(/^```json\s*/, "")   // remove starting ```json
            .replace(/```$/, "")         // remove ending ```
            .trim();                     // remove extra spaces

        // Now safe to parse
        const data = JSON.parse(cleanedText);

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            message: "Failed to generate questions",
            error: error.message,
        });
    }

};
// const generateConceptExplanation = async (req, res) => {
//     try {
//         const { question } = req.body;
//         if (!question) return res.status(400).json({ message: "Missing required fields" });

//         const prompt = conceptExplainPrompt(question);

//         const response = await ai.models.generateContent({
//             model: "gemini-2.5-pro",
//             contents: prompt,
//         });

//         // Safely get generated text
//         const rawText = response.text || response.outputText || response.output?.[0]?.content?.[0]?.text;

//         if (!rawText) {
//             console.error("Gemini returned empty response:", response);
//             return res.status(500).json({
//                 message: "Gemini returned empty response",
//                 response
//             });
//         }

//         const cleanedText = rawText.replace(/^```json\s*/, "").replace(/```$/, "").trim();

//         let data;
//         try {
//             data = JSON.parse(cleanedText);
//         } catch (parseError) {
//             console.error("Failed to parse Gemini response:", cleanedText);
//             return res.status(500).json({
//                 message: "Failed to parse Gemini response",
//                 raw: cleanedText,
//             });
//         }

//         res.status(200).json(data);

//     } catch (error) {
//         console.error("Gemini API error:", error.response?.data || error);
//         res.status(500).json({
//             message: "Failed to generate explanation",
//             error: error.message,
//         });
//     }
// };



module.exports = { generateInterviewQuestions, generateConceptExplanation };
