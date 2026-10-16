export interface MoodLetterVariation {
  id: string;
  letterNumber: string;
  salutation: string;
  body: string;
  reminder: string;
  postscript?: string;
}

export interface MoodLetterCategory {
  moodKey: 'slow' | 'overwhelmed' | 'hopeful' | 'confident' | 'nostalgic' | 'comfort';
  label: string;
  pairedCoffeeId: string;
  tagline: string;
  paperTint: string;
  accentColor: string;
  variations: MoodLetterVariation[];
}

export const MOOD_LETTERS: MoodLetterCategory[] = [
  {
    moodKey: 'slow',
    label: 'Slow',
    pairedCoffeeId: 'honey-oat-latte',
    tagline: 'When the morning asks for patience rather than productivity.',
    paperTint: 'bg-[#FAF7F2]',
    accentColor: '#BFCAB8',
    variations: [
      {
        id: 'slow-01',
        letterNumber: 'NO. 001',
        salutation: 'Dear slow morning,',
        body: 'You do not have to have everything figured out today. Let the morning take its time. Find a little patch of sunlight, take a long breath, and give yourself permission to begin slowly. The world will still be there when you are ready.',
        reminder: 'You can take the day one moment at a time.',
        postscript: 'P.S. Hold the warm cup with both hands before looking at your screen.'
      },
      {
        id: 'slow-02',
        letterNumber: 'NO. 002',
        salutation: 'To the quiet hours,',
        body: 'There is a gentle dignity in refusing to rush. The coffee brews at its own rhythm, the steam curls without haste, and so can you. Nothing about your worth is measured by how fast you cross the threshold of your day.',
        reminder: 'Slowness is not delay; it is reverence.',
        postscript: 'P.S. Notice the way the light touches the floor right now.'
      },
      {
        id: 'slow-03',
        letterNumber: 'NO. 003',
        salutation: 'Dear unhurried heart,',
        body: 'Step out of the slipstream. Breathe in the warm honey and toasted oat steam. Today does not require an immediate declaration of ambition. Today only asks that you arrive into this hour gently, whole and at peace.',
        reminder: 'You are allowed to move at the speed of your breath.',
        postscript: 'P.S. One quiet cup is often enough to steady an entire morning.'
      }
    ]
  },
  {
    moodKey: 'overwhelmed',
    label: 'Overwhelmed',
    pairedCoffeeId: 'iced-vanilla-latte',
    tagline: 'When everything feels loud, cluttered, and all at once.',
    paperTint: 'bg-[#F6F8F9]',
    accentColor: '#B9CFD8',
    variations: [
      {
        id: 'overwhelmed-01',
        letterNumber: 'NO. 004',
        salutation: 'To whoever needs a breath,',
        body: 'Put down the weight for five minutes. You are carrying things that were never meant to be solved in a single afternoon. Let the ice chill against your fingers. Let the condensation run down the glass. The sky is still wide, and you are doing so much better than you give yourself credit for.',
        reminder: 'You do not have to carry the whole week in this single hour.',
        postscript: 'P.S. Unclench your jaw, drop your shoulders, and take one cool sip.'
      },
      {
        id: 'overwhelmed-02',
        letterNumber: 'NO. 005',
        salutation: 'Dear tired mind,',
        body: 'When every door feels like an emergency, remember: not everything demanding your attention deserves your peace. Take a clean sip. Watch the coffee swirl through cold milk. That quiet vortex is your reminder that chaos settles when you stop stirring it.',
        reminder: 'Peace is a decision you can make in the middle of a crowded room.',
        postscript: 'P.S. Close your eyes for ten seconds. The world will wait.'
      },
      {
        id: 'overwhelmed-03',
        letterNumber: 'NO. 006',
        salutation: 'To a very full head,',
        body: 'It is okay to say: “Not right now.” It is okay to step out into the hallway, find a cool breeze, and drink your coffee like it is the only appointment on your calendar. You will find your footing again, one calm sip at a time.',
        reminder: 'One thing at a time is still moving forward.',
        postscript: 'P.S. Drink water after this, and rest your eyes.'
      }
    ]
  },
  {
    moodKey: 'hopeful',
    label: 'Hopeful',
    pairedCoffeeId: 'golden-hour-macchiato',
    tagline: 'When the horizon feels bright and full of quiet possibilities.',
    paperTint: 'bg-[#FFFDF6]',
    accentColor: '#B97849',
    variations: [
      {
        id: 'hopeful-01',
        letterNumber: 'NO. 007',
        salutation: 'Dear dreamer,',
        body: 'There is something golden waking up inside this day. You can feel it in the air—the sense that good things are quietly arranging themselves in your direction. Trust the curiosity pulling you forward. Take a sip of sweet caramel and keep going.',
        reminder: 'What is meant for you will not pass you by.',
        postscript: 'P.S. Write that idea down before it slips away.'
      },
      {
        id: 'hopeful-02',
        letterNumber: 'NO. 008',
        salutation: 'To new beginnings,',
        body: 'Every dawn brings a quiet promise: yesterday does not own today. Look at the amber ripples through the glass. The future is not a test to endure; it is an open canvas waiting for your deliberate touch.',
        reminder: 'Believe in the small shifts. They lead to grand horizons.',
        postscript: 'P.S. Smile at someone today. It spreads faster than sunlight.'
      },
      {
        id: 'hopeful-03',
        letterNumber: 'NO. 009',
        salutation: 'Dear bright soul,',
        body: 'Hold onto that lightness you feel right now. Protect it. It is rare and precious, like that first wash of sunlight across an empty café. Whatever seeds you plant today have good soil beneath them.',
        reminder: 'Good news is often quiet before it arrives.',
        postscript: 'P.S. Take the scenic walk home today.'
      }
    ]
  },
  {
    moodKey: 'confident',
    label: 'Confident',
    pairedCoffeeId: 'flat-white',
    tagline: 'When your clarity is sharp and your focus is unwavering.',
    paperTint: 'bg-[#F9F7F5]',
    accentColor: '#2D201C',
    variations: [
      {
        id: 'confident-01',
        letterNumber: 'NO. 010',
        salutation: 'To the creator at work,',
        body: 'You know what needs to be done, and you know you have the craft to do it. No hesitation, no second-guessing the foundation you built. Drink the double shot down. Enter your flow state and make something that stands tall.',
        reminder: 'Your work speaks with clarity when your mind is quiet.',
        postscript: 'P.S. Turn off notifications. Let your focus do the talking.'
      },
      {
        id: 'confident-02',
        letterNumber: 'NO. 011',
        salutation: 'Dear architect of moments,',
        body: 'Confidence does not shout; it executes. Like a flat white poured with precision—velvety microfoam piercing dark espresso—your skill does not need fanfare to make its mark. Trust your instincts today.',
        reminder: 'Simplicity executed with mastery is unbeatable.',
        postscript: 'P.S. Step forward. You are ready.'
      },
      {
        id: 'confident-03',
        letterNumber: 'NO. 012',
        salutation: 'To sharp eyes and steady hands,',
        body: 'Clear desks, clear thoughts, deliberate actions. Today is not about doing everything; it is about doing the essential thing with total presence. You have earned your seat at this table.',
        reminder: 'Focus is saying no to a hundred distractions.',
        postscript: 'P.S. Drink while hot and savor the crema.'
      }
    ]
  },
  {
    moodKey: 'nostalgic',
    label: 'Nostalgic',
    pairedCoffeeId: 'hazelnut-hush',
    tagline: 'When memories feel warm, tender, and softly cinematic.',
    paperTint: 'bg-[#FDF9F3]',
    accentColor: '#B97849',
    variations: [
      {
        id: 'nostalgic-01',
        letterNumber: 'NO. 013',
        salutation: 'Dear keeper of memories,',
        body: 'Certain scents have a way of opening old wooden drawers. The roasted hazelnut, the clink of porcelain, the late afternoon shadows on the rug. Be gentle with the past today. It taught you how to love the little things.',
        reminder: 'Old chapters make the present book rich with meaning.',
        postscript: 'P.S. Send that old friend a short note just to say hello.'
      },
      {
        id: 'nostalgic-02',
        letterNumber: 'NO. 014',
        salutation: 'To autumns remembered,',
        body: 'Time moves fast, but cups of coffee stand still. Drink this cup for the version of you from five years ago who dreamed of where you are standing right now. They would be so proud of how far you have walked.',
        reminder: 'You are the answer to an old wish.',
        postscript: 'P.S. Listen to that record you haven’t played in months.'
      },
      {
        id: 'nostalgic-03',
        letterNumber: 'NO. 015',
        salutation: 'Dear tender heart,',
        body: 'Nostalgia is not sadness; it is proof of how deeply you have lived and loved. Let the warmth of toasted nuts and espresso wrap around you like a well-worn coat. Savor the memory, and then return to this beautiful now.',
        reminder: 'The golden hour is not just yesterday; it is also right here.',
        postscript: 'P.S. Look through an old notebook page today.'
      }
    ]
  },
  {
    moodKey: 'comfort',
    label: 'In Need of Comfort',
    pairedCoffeeId: 'cinnamon-cappuccino',
    tagline: 'When you need a warm embrace and a reminder that it is going to be okay.',
    paperTint: 'bg-[#FFFBF5]',
    accentColor: '#C66C42',
    variations: [
      {
        id: 'comfort-01',
        letterNumber: 'NO. 016',
        salutation: 'Dear gentle friend,',
        body: 'Some days ask too much of tender hearts. If today is one of those days, let this warm cup hold you. Drink the cinnamon foam slowly. You do not have to be strong or cheerful or productive right now. Just being here, warm and breathing, is enough.',
        reminder: 'Softness is not weakness; it is how you heal.',
        postscript: 'P.S. Wrap a blanket around your legs and stay awhile.'
      },
      {
        id: 'comfort-02',
        letterNumber: 'NO. 017',
        salutation: 'To a weary spirit,',
        body: 'Whatever broke your stride today, know that it will pass. The evening always comes, the tea kettle always sings, and tomorrow gives you clean air to breathe. For now, let the cinnamon and warm milk soothe the rough edges.',
        reminder: 'You are safe to rest. You are allowed to pause.',
        postscript: 'P.S. You are loved more than you know.'
      },
      {
        id: 'comfort-03',
        letterNumber: 'NO. 018',
        salutation: 'Dear quiet soul,',
        body: 'Treat yourself with the same kindness you would give a weary traveler at your door. Pour the warm drink, sit in the most comfortable chair in the room, and let the warmth sink into your chest. Everything will look different in the morning light.',
        reminder: 'Kindness toward yourself is the first step toward peace.',
        postscript: 'P.S. Take a slow sip and close your eyes.'
      }
    ]
  }
];
