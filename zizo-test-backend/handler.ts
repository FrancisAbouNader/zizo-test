import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const vocabulary: Record<string, string[]> = {
  noun: ["cat", "book", "table", "house", "dog", "car", "tree", "bird", "friend", "city"],
  verb: ["run", "eat", "sleep", "dance", "sing", "swim", "write", "read", "play", "talk"],
  adjective: ["happy", "big", "beautiful", "small", "tall", "smart", "funny", "kind"],
  adverb: ["quickly", "eagerly", "silently", "happily", "slowly"],
  preposition: ["in", "on", "at", "above", "below", "behind"],
  conjunction: ["and", "but", "or", "nor", "so", "yet", "for"],
  pronoun: ["he", "she", "they", "we", "it", "I", "you"],
  interjection: ["wow", "ouch", "oops", "yay", "hurray"],
  determiner: ["the", "a", "this", "that", "these", "those"],
  numeral: ["one", "two", "three", "four", "five", "six"]
};

// Function to build a response with CORS headers
const buildResponse = (statusCode: number, body: object) => ({
  statusCode,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  },
  body: JSON.stringify(body)
});

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.body) {
      return buildResponse(400, { error: "No text provided" });
    }
    const { text } = JSON.parse(event.body);
    const words = text.toLowerCase().split(" ");
    const result: Record<string, number> = {};
    for (const [type, wordsList] of Object.entries(vocabulary)) {
      result[type] = words.filter((word) => wordsList.includes(word)).length;
    }
    return buildResponse(200, result);

  } catch (error) {
    return buildResponse(500, { error: "Internal server error" });
  }
};
