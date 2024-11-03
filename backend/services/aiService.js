const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const generateAIResponse = async (userProfile) => {
  try {
    console.log('Starting AI generation with profile:', userProfile);

    const prompt = `
      Create a simple fitness and nutrition plan for:
      Height: ${userProfile.height}cm
      Weight: ${userProfile.weight}kg
      Age: ${userProfile.age}
      Goals: ${userProfile.goals}

      Please provide:
      1. Three workout days
      2. Basic meal plan
      3. Simple recommendations
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a fitness and nutrition expert. Provide clear, simple advice."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    console.log('OpenAI Response:', completion.choices[0].message);

    return {
      success: true,
      plan: {
        workout: completion.choices[0].message.content,
        nutrition: completion.choices[0].message.content
      }
    };

  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error(`Failed to generate plan: ${error.message}`);
  }
};

module.exports = { generateAIResponse }; 