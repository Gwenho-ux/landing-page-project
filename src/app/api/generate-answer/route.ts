import { NextResponse } from 'next/server';

// Predefined mystical responses
const MYSTICAL_RESPONSES = [
  "The stars show a risky path. Some who walk it find gold, others lose their shoes. Keep some money safe.",
  "Like spices in broth, your choices will blend into destiny. Some burn, some sweeten. Trust your taste.",
  "The moon whispers of change. Your bowl may empty before it fills again. Patience seasons the meal.",
  "Ancient recipes speak of balance. Too much salt ruins the dish, too little leaves no taste. Find your measure.",
  "The steam rises like your hopes. What seems clouded now will clear, but watch the heat beneath.",
  "Your path forks like chopsticks. One leads to comfort, one to growth. Both can feed the soul.",
  "The kitchen's wisdom says: timing is all. Your moment simmers now, ready or not.",
  "Like tea leaves in water, your future unfolds slowly. The bitter turns sweet with patience.",
  "The flames of change dance in your bowl. What burns now will flavor tomorrow's feast.",
  "Markets rise and fall like steam. Invest in what nourishes, not what merely fills."
];

// Function to get a random response that feels personalized
function getPersonalizedResponse(userInput: string): string {
  // Get a random response
  const randomIndex = Math.floor(Math.random() * MYSTICAL_RESPONSES.length);
  return MYSTICAL_RESPONSES[randomIndex];
}

export async function POST(request: Request) {
  try {
    const { userInput } = await request.json();

    if (!userInput) {
      return NextResponse.json(
        { error: 'User input is required' },
        { status: 400 }
      );
    }

    const answer = getPersonalizedResponse(userInput);

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Error generating answer:', error);
    return NextResponse.json(
      { error: 'Failed to generate answer' },
      { status: 500 }
    );
  }
} 