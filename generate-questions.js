const fs = require('fs');

const OPTION_SETS = [
  ['Yes', 'No'],
  ['Agree', 'Disagree'],
  ['I have', 'I have never'],
  ['Always', 'Sometimes', 'Never'],
  ['Very important', 'Somewhat important', 'Not important'],
  ['Definitely', 'Maybe', 'No'],
  ['Often', 'Sometimes', 'Rarely'],
  ['True', 'False'],
  ['More', 'Less'],
  ['First', 'Second'],
];

function slug(s) {
  return s.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '').toLowerCase().slice(0, 10);
}

function pickOptions() {
  const set = OPTION_SETS[Math.floor(Math.random() * OPTION_SETS.length)];
  return set.slice();
}

const TOPICS = {
  "Relationships": {
    "Communication & Understanding": { bgColor: "#172700", emoji: "👩‍❤️‍👨", subtitle: "Deep Conversations" },
    "The Perfect Proposal of Yours": { bgColor: "#310072", emoji: "💍", subtitle: "Dream Proposals" },
    "Your Love Languages": { bgColor: "#420051", emoji: "💖", subtitle: "Ways We Love" },
    "Going on a Special Date": { bgColor: "#3A2900", emoji: "🥂", subtitle: "Date Ideas" },
    "Your Dream Wedding": { bgColor: "#001F56", emoji: "🥳", subtitle: "Big Day Dreams" },
  },
  "Would You Rather?": {
    "The Challenges of Love": { bgColor: "#4A1942", emoji: "💪", subtitle: "Love Challenges" },
    "Your Food Preferences": { bgColor: "#2D5016", emoji: "🍽️", subtitle: "Food Choices" },
    "Dream House Exterior": { bgColor: "#1A3A5C", emoji: "🏠", subtitle: "Dream Home" },
    "Your Love & Romance": { bgColor: "#5C1A1A", emoji: "❤️", subtitle: "Romance Picks" },
    "Your Deep & Meaningful": { bgColor: "#2C1A5C", emoji: "🌙", subtitle: "Deep Choices" },
  },
  "Never Have I Ever": {
    "First-Time Moments in Life": { bgColor: "#0D3D2D", emoji: "✨", subtitle: "First Times" },
    "What's Your Hygiene Score?": { bgColor: "#3D2D0D", emoji: "🧴", subtitle: "Hygiene Habits" },
    "Are You True Book Lover?": { bgColor: "#2D0D3D", emoji: "📚", subtitle: "Book Life" },
    "Funny & Awkward Moments": { bgColor: "#5C4A1A", emoji: "😅", subtitle: "Awkward Tales" },
    "Love & Relationship Experiences": { bgColor: "#4A1A3D", emoji: "💕", subtitle: "Relationship Tales" },
  },
  "Agree or Disagree": {
    "New Love, New Adventures": { bgColor: "#1A2D5C", emoji: "🌍", subtitle: "New Love" },
    "Balancing Careers and Love": { bgColor: "#5C3D1A", emoji: "⚖️", subtitle: "Work & Love" },
    "Relationships Boundaries": { bgColor: "#2D5C1A", emoji: "🛡️", subtitle: "Boundaries" },
    "Intimacy and Lifestyle": { bgColor: "#5C1A3D", emoji: "🔒", subtitle: "Intimacy" },
    "Your Sexual Fantasies": { bgColor: "#3D1A5C", emoji: "💫", subtitle: "Fantasies" },
  },
  "This or That?": {
    "Food & Date Preferences": { bgColor: "#4A2D0D", emoji: "🍷", subtitle: "Food & Dates" },
    "Your Daily Life & Habits": { bgColor: "#0D4A2D", emoji: "☀️", subtitle: "Daily Life" },
    "Fun, Cute & Silly Options": { bgColor: "#4A0D2D", emoji: "🎈", subtitle: "Fun Picks" },
    "Travel & Adventure Picks": { bgColor: "#0D2D4A", emoji: "✈️", subtitle: "Travel Picks" },
    "Staying In or Going Out": { bgColor: "#2D4A0D", emoji: "🏠", subtitle: "In or Out" },
  },
  "Who's More Likely To?": {
    "Funny & Playful Moments": { bgColor: "#5C2D1A", emoji: "😄", subtitle: "Playful" },
    "Social & Personality Traits": { bgColor: "#1A5C2D", emoji: "👥", subtitle: "Social" },
    "Future & Life Decisions": { bgColor: "#2D1A5C", emoji: "🎯", subtitle: "Decisions" },
    "Money & Spending Style": { bgColor: "#1A3D5C", emoji: "💰", subtitle: "Money" },
    "Initiate Romance First": { bgColor: "#5C1A2D", emoji: "💋", subtitle: "Romance" },
  },
  "Answer With a Photo": {
    "Our Visual Love Story": { bgColor: "#3D0D2D", emoji: "📸", subtitle: "Visual Story" },
    "Your Favourite Moments": { bgColor: "#0D3D2D", emoji: "🌟", subtitle: "Favourite Moments" },
    "Your Travel Experience Through": { bgColor: "#2D3D0D", emoji: "🌏", subtitle: "Travel Pics" },
    "Your Selfies and Stories": { bgColor: "#2D0D3D", emoji: "🤳", subtitle: "Selfies" },
    "Something That Reminds You of Me": { bgColor: "#0D2D3D", emoji: "💝", subtitle: "Reminders" },
  },
  "Deep Talks": {
    "Love, Needs & Expectations": { bgColor: "#4A1A2D", emoji: "💬", subtitle: "Needs" },
    "Past Experiences That Shaped Us": { bgColor: "#1A4A2D", emoji: "📜", subtitle: "Past" },
    "Trust, Boundaries & Respect": { bgColor: "#2D1A4A", emoji: "🤝", subtitle: "Trust" },
    "Fears, Insecurities & Healing": { bgColor: "#2D4A1A", emoji: "🫂", subtitle: "Healing" },
    "Physical Affection & Desire": { bgColor: "#4A2D1A", emoji: "🫶", subtitle: "Affection" },
  },
  "Discuss Before...": {
    "Discuss Before Getting a Pet": { bgColor: "#1A3D4A", emoji: "🐾", subtitle: "Pets" },
    "Discuss Before Buying a House": { bgColor: "#3D4A1A", emoji: "🏡", subtitle: "House" },
    "Discuss Before Physical Intimacy": { bgColor: "#4A1A3D", emoji: "💑", subtitle: "Intimacy" },
    "Discuss Before Having Kids": { bgColor: "#3D1A4A", emoji: "👶", subtitle: "Kids" },
    "Discuss Before Moving In Together": { bgColor: "#1A4A3D", emoji: "🔑", subtitle: "Moving In" },
  },
  "Sex & Love": {
    "Spicy and Dirty Questions": { bgColor: "#5C0D1A", emoji: "🌶️", subtitle: "Spicy" },
    "Romance, Passion & Connection": { bgColor: "#5C1A0D", emoji: "🔥", subtitle: "Passion" },
    "Touch, Foreplay & Intimacy Styles": { bgColor: "#1A0D5C", emoji: "✨", subtitle: "Touch" },
    "Physical Needs & Desire Levels": { bgColor: "#0D5C1A", emoji: "💕", subtitle: "Desire" },
    "Fantasies, Curiosity & Exploration": { bgColor: "#1A5C0D", emoji: "🔮", subtitle: "Fantasies" },
  },
  "Money & Fitness": {
    "Saving Goals & Future Plans": { bgColor: "#2D4A1A", emoji: "🎯", subtitle: "Saving" },
    "Income, Expenses & Transparency": { bgColor: "#4A1A2D", emoji: "📊", subtitle: "Money Talk" },
    "Money Conflicts & Expectations": { bgColor: "#1A2D4A", emoji: "⚖️", subtitle: "Conflicts" },
    "Health Goals & Body Care": { bgColor: "#1A4A2D", emoji: "💪", subtitle: "Health" },
    "Diet, Nutrition & Balance": { bgColor: "#4A2D1A", emoji: "🥗", subtitle: "Diet" },
  },
  "Get to Know Each Other": {
    "Personality, Habits & Quirks": { bgColor: "#3D2D0D", emoji: "😊", subtitle: "Personality" },
    "Likes, Dislikes & Preferences": { bgColor: "#0D3D2D", emoji: "👍", subtitle: "Preferences" },
    "Favorite Hobbies & Passions": { bgColor: "#2D0D3D", emoji: "🎨", subtitle: "Hobbies" },
    "Dreams, Goals & Aspirations": { bgColor: "#2D3D0D", emoji: "⭐", subtitle: "Dreams" },
    "Childhood Memories & Stories": { bgColor: "#0D2D3D", emoji: "🧒", subtitle: "Childhood" },
  },
  "Travel": {
    "Let's Travel The World": { bgColor: "#1A4A5C", emoji: "🌍", subtitle: "World" },
    "Travel Style & Preferences": { bgColor: "#4A5C1A", emoji: "🎒", subtitle: "Style" },
    "Food, Culture & Local Experiences": { bgColor: "#5C1A4A", emoji: "🍜", subtitle: "Culture" },
    "Night Adventures & Midnight Escapes": { bgColor: "#1A5C4A", emoji: "🌙", subtitle: "Night" },
    "Hidden Gems Only We Know": { bgColor: "#4A1A5C", emoji: "💎", subtitle: "Hidden Gems" },
  },
  "Family": {
    "Family Values & Beliefs": { bgColor: "#3D4A0D", emoji: "👨‍👩‍👧‍👦", subtitle: "Values" },
    "Parents & Role Models": { bgColor: "#0D4A3D", emoji: "🙏", subtitle: "Parents" },
    "Future Family Plans": { bgColor: "#4A0D3D", emoji: "🏠", subtitle: "Plans" },
    "Family Traditions & Celebrations": { bgColor: "#0D3D4A", emoji: "🎉", subtitle: "Traditions" },
    "Funny Family Stories & Secrets": { bgColor: "#4A3D0D", emoji: "😄", subtitle: "Stories" },
  },
  "Hobbies": {
    "Favorite Hobbies & Pastimes": { bgColor: "#2D5C0D", emoji: "🎯", subtitle: "Pastimes" },
    "Creative & Artistic Interests": { bgColor: "#5C0D2D", emoji: "🖌️", subtitle: "Creative" },
    "Sports & Fitness Activities": { bgColor: "#0D5C2D", emoji: "⚽", subtitle: "Sports" },
    "Learning & New Skills": { bgColor: "#5C2D0D", emoji: "📖", subtitle: "Learning" },
    "Outdoor Adventures & Nature Activities": { bgColor: "#0D2D5C", emoji: "🏕️", subtitle: "Outdoor" },
  },
  "Lifestyle & Food": {
    "Cooking Skills & Kitchen Fun": { bgColor: "#4A2D0D", emoji: "👨‍🍳", subtitle: "Cooking" },
    "Morning & Night Routines": { bgColor: "#0D2D4A", emoji: "🌅", subtitle: "Routines" },
    "Dining Out & Food Adventures": { bgColor: "#2D4A0D", emoji: "🍽️", subtitle: "Dining" },
    "Secret Snack Cravings": { bgColor: "#2D0D4A", emoji: "🍿", subtitle: "Snacks" },
    "Late-Night Bites vs Early Meals": { bgColor: "#4A0D2D", emoji: "🌙", subtitle: "Meal Time" },
  },
  "School & Work": {
    "Your Life In The Office": { bgColor: "#1A3D5C", emoji: "💼", subtitle: "Office" },
    "Balancing Careers and Love": { bgColor: "#5C3D1A", emoji: "⚖️", subtitle: "Balance" },
    "Memorable School Moments": { bgColor: "#3D5C1A", emoji: "📚", subtitle: "School" },
    "School & Office Challenges": { bgColor: "#5C1A3D", emoji: "😤", subtitle: "Challenges" },
    "Funniest Miscommunications": { bgColor: "#1A5C3D", emoji: "😂", subtitle: "Miscommunications" },
  },
  "Moral Values": {
    "Honesty & Truthfulness": { bgColor: "#2D3D1A", emoji: "🤲", subtitle: "Honesty" },
    "Kindness & Compassion": { bgColor: "#3D1A2D", emoji: "💝", subtitle: "Kindness" },
    "Responsibility & Accountability": { bgColor: "#1A2D3D", emoji: "📌", subtitle: "Responsibility" },
    "Handling Mistakes Gracefully": { bgColor: "#1A3D2D", emoji: "🌱", subtitle: "Mistakes" },
    "Keeping Promises & Commitments": { bgColor: "#3D2D1A", emoji: "🤝", subtitle: "Promises" },
  },
};

const QUESTION_TEMPLATES = [
  "Do you think {topic} matters in a relationship?",
  "Have you ever experienced {topic} with your partner?",
  "Would you prefer {topic} to be planned or spontaneous?",
  "Do you agree that {topic} strengthens your bond?",
  "Is {topic} something you discuss openly?",
  "Do you value {topic} in your daily life together?",
  "Have you and your partner aligned on {topic}?",
  "Would you say {topic} is essential for you?",
  "Do you feel comfortable talking about {topic}?",
  "Has {topic} ever caused tension between you?",
  "Do you believe {topic} should be a priority?",
  "Would you try something new related to {topic}?",
  "Do you think {topic} changes over time?",
  "Have you ever disagreed about {topic}?",
  "Is {topic} more important to you or your partner?",
  "Do you make time for {topic} regularly?",
  "Would you compromise on {topic} for your partner?",
  "Do you associate {topic} with good memories?",
  "Have you set goals around {topic}?",
  "Do you think {topic} defines your relationship?",
  "Would you like to improve {topic} together?",
  "Do you talk about {topic} with friends or family?",
  "Is {topic} something you both enjoy?",
  "Have you ever surprised your partner with {topic}?",
  "Do you agree that {topic} requires effort?",
  "Would you say {topic} is a deal-breaker?",
  "Do you feel understood when discussing {topic}?",
  "Has {topic} brought you closer?",
  "Do you prefer {topic} to be private or shared?",
  "Would you recommend {topic} to other couples?",
  "Do you think {topic} affects intimacy?",
  "Have you made plans for {topic} in the future?",
  "Do you balance {topic} with other priorities?",
  "Is {topic} something you learned together?",
  "Do you celebrate {topic} together?",
  "Would you say {topic} has improved over time?",
  "Do you disagree sometimes about {topic}?",
  "Is {topic} a source of joy for you?",
  "Have you ever argued about {topic}?",
  "Do you think {topic} needs more attention?",
];

function generateQuestions(subtopicKey, prefix, count, title) {
  const questions = [];
  const topicWord = title.replace(/\?/g, '').toLowerCase();
  for (let i = 1; i <= count; i++) {
    const id = `${prefix}_${String(i).padStart(3, '0')}`;
    const tpl = QUESTION_TEMPLATES[(i - 1) % QUESTION_TEMPLATES.length];
    const q = tpl.replace('{topic}', topicWord);
    questions.push({
      id,
      question: q,
      options: pickOptions(),
    });
  }
  return questions;
}

const QUESTIONS_PER_CATEGORY = 3000; // 3000 questions in each of the 5 categories per topic
const out = {};
let totalQs = 0;

for (const [category, subtopics] of Object.entries(TOPICS)) {
  out[category] = {};
  let categoryCount = 0;
  for (const [subtitle, meta] of Object.entries(subtopics)) {
    const prefix = slug(subtitle).replace(/_/g, '').slice(0, 6) || 'q';
    const questions = generateQuestions(subtitle, prefix, QUESTIONS_PER_CATEGORY, subtitle);
    categoryCount += questions.length;
    totalQs += questions.length;
    out[category][subtitle] = {
      meta: {
        bgColor: meta.bgColor,
        emoji: meta.emoji,
        subtitle: meta.subtitle,
        title: subtitle,
      },
      questions,
    };
  }
  console.log(category + ':', categoryCount, 'questions');
}

fs.writeFileSync('test.json', JSON.stringify(out, null, 2), 'utf8');
console.log('Total questions:', totalQs);
