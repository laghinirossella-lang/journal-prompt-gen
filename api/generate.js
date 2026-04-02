import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { mood, theme, length } = req.body;

  const userMessage = `Generate a single journaling prompt for someone who:
- Is feeling: ${mood}
- Wants to focus on: ${theme}
- Prefers a ${length === "short" ? "short, simple prompt (1 sentence)" : "deeper, multi-part prompt (2-3 questions)"}

Be warm, non-judgmental and encouraging. Return only the prompt, no introduction or explanation.`;

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 300,
      messages: [{ role: "user", content: userMessage }],
    });

    const prompt = message.content[0].text;
    res.status(200).json({ prompt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}