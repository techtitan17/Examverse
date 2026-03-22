import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("BODY:", body); // ✅ debug

    const { messages } = body;

    if (!messages || messages.length === 0) {
      return Response.json(
        { error: "Messages missing" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview", 
});

    const lastMessage = messages[messages.length - 1]?.content;

    console.log("LAST MESSAGE:", lastMessage); // ✅ debug
const result = await model.generateContent(lastMessage);
const response = await result.response;   // ✅ IMPORTANT
const text = response.text();             // ✅ now correct

    console.log("AI RESPONSE:", text); // ✅ debug

    return Response.json({
      reply: {
        role: "assistant",
        content: text,
      },
    });

  } catch (error) {
    console.error("🔥 FULL ERROR:", error);

    return Response.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}