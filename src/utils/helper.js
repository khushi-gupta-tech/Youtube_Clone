var nameList = [
  "Aarav Sharma",
  "Vivaan Mehta",
  "Reyansh Kapoor",
  "Arjun Reddy",
  "Kabir Khanna",
  "Aditya Nair",
  "Rohan Malhotra",
  "Ishaan Verma",
  "Ananya Singh",
  "Diya Patel",
  "Kiara Desai",
  "Meera Iyer",
  "Riya Agarwal",
  "Saanvi Joshi",
  "Aisha Khan",
  "Maya Roy",
  "Priya Choudhary",
  "Tara Bhatia",
  "Neha Saxena",
  "Kavya Menon",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

// 50 News Messages
// 50 News Messages (without emojis)
var messageList = [
  "Breaking News Major update just arrived",
  "Latest Headlines Stay tuned for more",
  "Update Fresh news story coming in",
  "Hot Topic Trending across the world",
  "News Flash Important event unfolding",
  "Exclusive Insider report just released",
  "Breaking Market sees sudden changes",
  "Alert Weather update issued",
  "Sports Update Big match results are out",
  "Tech News New innovation launched",
  "Finance Update Stocks showing movement",
  "Politics Key statement just announced",
  "World News Global event under spotlight",
  "Local Update Community news coming in",
  "Breaking Emergency situation reported",
  "Health Update New research findings released",
  "Education News Schools announce fresh policies",
  "Entertainment News Popular star in spotlight",
  "Travel Update New advisory issued for tourists",
  "Cultural Event Festival celebrations begin",
  "Weather Update Storm warnings for coastal areas",
  "Breaking Power outage reported in major city",
  "Security Alert Authorities on high alert",
  "Market Update Cryptocurrency prices fluctuate",
  "Sports Highlight National team secures big win",
  "Technology Update Smartphone launch excites fans",
  "Finance Report GDP growth shows positive signs",
  "Transport Update Train services face disruption",
  "Energy News Fuel prices see major changes",
  "Environment Update New climate report published",
  "Breaking Road accident causes traffic delays",
  "Health News Vaccine rollout gains momentum",
  "Job Market Hiring trends show positive outlook",
  "Weather Report Rainfall expected in northern states",
  "Cultural Highlight Art exhibition opens in city",
  "Space Update Rocket launch successfully completed",
  "Business News New startup raises record funding",
  "Breaking Protest erupts in downtown area",
  "Agriculture Update Farmers demand policy changes",
  "Science News Discovery of new element announced",
  "Education Update Exam results published today",
  "Entertainment Buzz New movie breaks records",
  "Sports Update Championship match draws huge crowd",
  "Technology News AI tools revolutionizing industry",
  "Local News Community event gathers thousands",
  "Finance News Stock exchange closes on high note",
  "Breaking Fire breaks out in residential complex",
  "Tourism News Visitor numbers rise this season",
  "Weather Alert Heatwave expected this week",
  "World Update Leaders meet for global summit"
];



export function generateRandomMessage() {
  return messageList[Math.floor(Math.random() * messageList.length)];
}

export const findPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[0];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};
