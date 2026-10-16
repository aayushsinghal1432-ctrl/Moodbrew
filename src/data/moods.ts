export interface MoodDefinition {
  id: string;
  number: string;
  name: string;
  colorName: string;
  bgClass: string;
  textColor: string;
  borderColor: string;
  accentBg: string;
  hexColor: string;
  coffeeId: string;
  feeling: string;
  atmosphere: string;
  tagline: string;
  detailedThought: string;
}

export const MOODS: MoodDefinition[] = [
  {
    id: 'slow-morning',
    number: '01',
    name: 'Slow Morning',
    colorName: 'Sage green',
    bgClass: 'bg-[#BFCAB8]/20',
    textColor: 'text-[#2D201C]',
    borderColor: 'border-[#BFCAB8]',
    accentBg: 'bg-[#BFCAB8]',
    hexColor: '#BFCAB8',
    coffeeId: 'honey-oat-latte',
    feeling: 'Gentle, peaceful, and unhurried.',
    atmosphere: 'Soft morning sunlight through curtains, unmade linen sheets, birds outside the window.',
    tagline: 'When the world can wait until your second sip.',
    detailedThought: 'Nothing urgent. Nowhere to rush. Just a little honey, a little oat milk, and a moment that is entirely yours.'
  },
  {
    id: 'need-a-reset',
    number: '02',
    name: 'Need a Reset',
    colorName: 'Dusty blue',
    bgClass: 'bg-[#B9CFD8]/25',
    textColor: 'text-[#1D2B32]',
    borderColor: 'border-[#B9CFD8]',
    accentBg: 'bg-[#B9CFD8]',
    hexColor: '#B9CFD8',
    coffeeId: 'iced-vanilla-latte',
    feeling: 'Refreshing, light, and ready for a fresh start.',
    atmosphere: 'Opening a window to crisp morning air, washing your face, clearing away yesterday.',
    tagline: 'A clean slate poured over chilled ice.',
    detailedThought: 'When the noise builds up, pause. Let the chilled condensation and natural Madagascar vanilla clear the slate.'
  },
  {
    id: 'main-character',
    number: '03',
    name: 'Main Character',
    colorName: 'Muted rose',
    bgClass: 'bg-[#D5A7A1]/20',
    textColor: 'text-[#3E2421]',
    borderColor: 'border-[#D5A7A1]',
    accentBg: 'bg-[#D5A7A1]',
    hexColor: '#D5A7A1',
    coffeeId: 'rose-mocha',
    feeling: 'Expressive, confident, and indulgent.',
    atmosphere: 'Headphones on, favorite soundtrack playing, walking down the street with effortless grace.',
    tagline: 'You are not an extra in somebody else’s morning.',
    detailedThought: 'Unapologetically romantic. Rich cacao meeting delicate floral perfume, brewed for those who write their own script.'
  },
  {
    id: 'deep-focus',
    number: '04',
    name: 'Deep Focus',
    colorName: 'Espresso brown',
    bgClass: 'bg-[#2D201C]/10',
    textColor: 'text-[#2D201C]',
    borderColor: 'border-[#2D201C]/30',
    accentBg: 'bg-[#2D201C]',
    hexColor: '#2D201C',
    coffeeId: 'flat-white',
    feeling: 'Grounded, clear-headed, and focused.',
    atmosphere: 'A cleared wooden desk, mechanical pencil, quiet room, flow state engaging.',
    tagline: 'Direct, deliberate, and free of clutter.',
    detailedThought: 'Precision in a cup. Dense, velvety steamed milk poured tight through double-strength espresso for a sharp, clear mind.'
  },
  {
    id: 'soft-comfort',
    number: '05',
    name: 'Soft Comfort',
    colorName: 'Oat cream',
    bgClass: 'bg-[#EFE6D8]/60',
    textColor: 'text-[#3C2A21]',
    borderColor: 'border-[#D9CDC1]',
    accentBg: 'bg-[#EFE6D8]',
    hexColor: '#EFE6D8',
    coffeeId: 'cinnamon-cappuccino',
    feeling: 'Cosy, familiar, and comforting.',
    atmosphere: 'A soft knit blanket, warm ceramic between both hands, gentle drizzle on the glass.',
    tagline: 'The feeling of coming home after a long journey.',
    detailedThought: 'Like a wool sweater on an overcast afternoon. The warm spice settles over pillow foam to quiet whatever feels heavy.'
  },
  {
    id: 'feeling-bold',
    number: '06',
    name: 'Feeling Bold',
    colorName: 'Burnt orange',
    bgClass: 'bg-[#C66C42]/20',
    textColor: 'text-[#2D201C]',
    borderColor: 'border-[#C66C42]',
    accentBg: 'bg-[#C66C42]',
    hexColor: '#C66C42',
    coffeeId: 'orange-cinnamon-cold-brew',
    feeling: 'Adventurous, energetic, and unexpected.',
    atmosphere: 'Packed weekend bag, late sunset drive, laughing out loud without holding back.',
    tagline: 'For those who choose the winding road.',
    detailedThought: 'A daring twist that wakes the senses. Deep chocolate notes of slow-steeped beans lit up by crisp citrus zest and warmth.'
  }
];
