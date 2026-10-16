export interface JournalEntry {
  id: string;
  volume: string;
  topic: string;
  quote: string;
  reflection: string;
  timestamp: string;
  readTime: string;
  author: string;
}

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'slow-mornings',
    volume: 'ENTRY 01',
    topic: 'On Slow Mornings',
    quote: 'Give yourself a moment before giving the world your attention.',
    reflection: 'Before notifications light up your phone, before emails ask for answers, the world belongs to the steam above your cup. That ten-minute buffer isn’t laziness—it is the quiet anchor that keeps you steady all day.',
    timestamp: '7:42 AM',
    readTime: '2 min read',
    author: 'Elena Vance · Lead Roaster'
  },
  {
    id: 'starting-again',
    volume: 'ENTRY 02',
    topic: 'On Starting Again',
    quote: 'A new beginning doesn’t always need a Monday.',
    reflection: 'You don’t have to wait for the first of the month or a new calendar year to reset your cadence. A fresh cup of iced coffee on a Thursday at 3:15 PM can be just as potent a clean slate as New Year’s Day.',
    timestamp: '3:15 PM',
    readTime: '1 min read',
    author: 'Marcus Cole · Barista & Writer'
  },
  {
    id: 'finding-comfort',
    volume: 'ENTRY 03',
    topic: 'On Finding Comfort',
    quote: 'Sometimes, the smallest rituals make an ordinary day feel special.',
    reflection: 'The tactile warmth of stoneware clay against your palms, the sound of whole beans dropping into a grinder, the scent of cinnamon floating over hot milk. In a restless world, these modest rituals are steady ground.',
    timestamp: '11:20 AM',
    readTime: '2 min read',
    author: 'Sora Tanaka · Atelier Curator'
  },
  {
    id: 'being-present',
    volume: 'ENTRY 04',
    topic: 'On Being Present',
    quote: 'Let this be a moment you experience instead of rushing past.',
    reflection: 'We spend so much energy rehearsing future conversations or replaying past ones that the coffee in front of us turns cold before we notice how good it tasted. Take one sip where you do nothing else but taste.',
    timestamp: '1:05 PM',
    readTime: '2 min read',
    author: 'Elena Vance · Lead Roaster'
  },
  {
    id: 'little-wins',
    volume: 'ENTRY 05',
    topic: 'On Little Wins',
    quote: 'Not every victory needs an audience.',
    reflection: 'Waking up on time, sending that overdue email, letting someone else have the last word without arguing, drinking an entire glass of water. Celebrate the private achievements nobody else will ever applaud.',
    timestamp: '5:30 PM',
    readTime: '1 min read',
    author: 'Devon Patel · Coffee Alchemist'
  },
  {
    id: 'unhurried-evenings',
    volume: 'ENTRY 06',
    topic: 'On Unhurried Evenings',
    quote: 'The sun doesn’t hurry when it dips below the roofline; neither should you.',
    reflection: 'When twilight filters through the glass, switch from pursuit to presence. Pour an affogato or a warm decaf hazelnut cup, turn off the fluorescent lights, and let the quiet settle in without guilt.',
    timestamp: '8:10 PM',
    readTime: '2 min read',
    author: 'Sora Tanaka · Atelier Curator'
  }
];
