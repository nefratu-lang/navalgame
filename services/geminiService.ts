import { Topic, Question } from "../types";

// Static Question Database
const QUESTION_BANK: Record<string, Question[]> = {
  [Topic.VOCABULARY]: [
    { id: "v1", scenario: "Direction on the ship.", questionText: "The left side of the ship is called _____.", options: ["Starboard", "Port", "Bow", "Stern"], correctAnswer: "Port", explanation: "Left is Port (Red)." },
    { id: "v2", scenario: "Direction on the ship.", questionText: "The right side of the ship is called _____.", options: ["Starboard", "Port", "Deck", "Hull"], correctAnswer: "Starboard", explanation: "Right is Starboard (Green)." },
    { id: "v3", scenario: "Ship structure.", questionText: "The front part of the ship is the _____.", options: ["Stern", "Bow", "Bridge", "Mast"], correctAnswer: "Bow", explanation: "Front is Bow." },
    { id: "v4", scenario: "Ship structure.", questionText: "The back part of the ship is the _____.", options: ["Stern", "Bow", "Keel", "Bridge"], correctAnswer: "Stern", explanation: "Back is Stern." },
    { id: "v5", scenario: "Dining area.", questionText: "We eat our meals in the _____.", options: ["Galley", "Bridge", "Engine Room", "Deck"], correctAnswer: "Galley", explanation: "Kitchen/dining is Galley/Mess." },
    { id: "v6", scenario: "Command center.", questionText: "The Captain controls the ship from the _____.", options: ["Bridge", "Kitchen", "Cabin", "Store"], correctAnswer: "Bridge", explanation: "Command center is the Bridge." },
    { id: "v7", scenario: "Sleeping quarters.", questionText: "I sleep in my _____.", options: ["Cabin", "Office", "Deck", "Mast"], correctAnswer: "Cabin", explanation: "Bedroom is a Cabin/Berthing." },
    { id: "v8", scenario: "Emergency drill.", questionText: "In an emergency, go to your _____ Station.", options: ["Muster", "Master", "Monster", "Mister"], correctAnswer: "Muster", explanation: "Muster Station is the gathering point." },
    { id: "v9", scenario: "Boarding the ship.", questionText: "Walk up the _____ to get on the ship.", options: ["Gangway", "Highway", "Subway", "Doorway"], correctAnswer: "Gangway", explanation: "The ramp is the Gangway." },
    { id: "v10", scenario: "Speed measurement.", questionText: "The ship's speed is measured in _____.", options: ["Knots", "Km/h", "Miles", "Meters"], correctAnswer: "Knots", explanation: "1 Knot = 1 Nautical Mile/hr." },
    { id: "v11", scenario: "Lookout duty.", questionText: "The sailor is on _____ duty at night.", options: ["Watch", "Clock", "Look", "See"], correctAnswer: "Watch", explanation: "Duty periods are called 'Watch'." },
    { id: "v12", scenario: "Cleaning the ship.", questionText: "We scrub the _____ every morning.", options: ["Deck", "Roof", "Wall", "Ceiling"], correctAnswer: "Deck", explanation: "The floor is the Deck." },
    { id: "v13", scenario: "Acknowledging orders.", questionText: "Officer: 'Clean the room.' Sailor: '_____, Sir!'", options: ["Aye Aye", "Yes No", "Okay", "Maybe"], correctAnswer: "Aye Aye", explanation: "'Aye Aye' means 'I understand and will obey'." },
    { id: "v14", scenario: "Clothing.", questionText: "Put on your _____ for the ceremony.", options: ["Uniform", "Costume", "Suit", "Dress"], correctAnswer: "Uniform", explanation: "Military personnel wear a Uniform." },
    { id: "v15", scenario: "Stopping the ship.", questionText: "Drop the _____ to stop the ship.", options: ["Anchor", "Brake", "Wheel", "Sail"], correctAnswer: "Anchor", explanation: "The heavy hook is the Anchor." },
    { id: "v16", scenario: "Ship movement.", questionText: "The ship is _____ at the port.", options: ["Docking", "Parking", "Stopping", "Landing"], correctAnswer: "Docking", explanation: "Ships 'dock' at a port." },
    { id: "v17", scenario: "Rank structure.", questionText: "A Sergeant is a _____ officer.", options: ["Non-Commissioned", "Commissioned", "Civilian", "General"], correctAnswer: "Non-Commissioned", explanation: "NCO means Non-Commissioned Officer." },
    { id: "v18", scenario: "Weaponry.", questionText: "The ship fired a _____ at the target.", options: ["Missile", "Pistol", "Knife", "Sword"], correctAnswer: "Missile", explanation: "Ships use Missiles or Guns." }
  ],
  [Topic.PAST_SIMPLE]: [
    { id: "ps1", scenario: "Logbook entry.", questionText: "The Captain _____ the logbook at 0800.", options: ["signed", "sign", "signs", "signing"], correctAnswer: "signed", explanation: "Past Simple completed action." },
    { id: "ps2", scenario: "Engine check.", questionText: "_____ you check the oil pressure?", options: ["Did", "Do", "Were", "Are"], correctAnswer: "Did", explanation: "Question form: Did + Subject + Verb." },
    { id: "ps3", scenario: "System failure.", questionText: "The radar _____ working yesterday.", options: ["wasn't", "isn't", "weren't", "not"], correctAnswer: "wasn't", explanation: "Singular negative past." },
    { id: "ps4", scenario: "Voyage report.", questionText: "We _____ to Malta last week.", options: ["went", "go", "goed", "going"], correctAnswer: "went", explanation: "Go -> Went (Irregular)." },
    { id: "ps5", scenario: "Late for duty.", questionText: "He _____ on the bridge when the alarm started.", options: ["wasn't", "didn't", "weren't", "not"], correctAnswer: "wasn't", explanation: "State of being (to be) -> was/wasn't." },
    { id: "ps6", scenario: "Drill fatigue.", questionText: "The cadets _____ tired after the run.", options: ["were", "was", "is", "did"], correctAnswer: "were", explanation: "Plural subject -> were." },
    { id: "ps7", scenario: "Sonar contact.", questionText: "I _____ the submarine on the screen.", options: ["saw", "see", "seen", "seeing"], correctAnswer: "saw", explanation: "See -> Saw." },
    { id: "ps8", scenario: "Fire report.", questionText: "The fire _____ in the kitchen.", options: ["started", "start", "starting", "starts"], correctAnswer: "started", explanation: "Regular verb + ed." },
    { id: "ps9", scenario: "Message log.", questionText: "We _____ the signal two hours ago.", options: ["received", "receive", "receives", "receiving"], correctAnswer: "received", explanation: "Ago -> Past Simple." },
    { id: "ps10", scenario: "Equipment status.", questionText: "_____ the radio broken?", options: ["Was", "Did", "Were", "Is"], correctAnswer: "Was", explanation: "Asking about state/adjective -> Was." },
    { id: "ps11", scenario: "Shore leave.", questionText: "They _____ come back on time.", options: ["didn't", "don't", "wasn't", "not"], correctAnswer: "didn't", explanation: "Negative action -> Didn't + Verb." },
    { id: "ps12", scenario: "Submarine depth.", questionText: "The sub _____ to 200 meters.", options: ["dove", "dive", "dived", "diving"], correctAnswer: "dove", explanation: "Dive -> Dove/Dived." },
    { id: "ps13", scenario: "Maintenance.", questionText: "The engineer _____ the pump.", options: ["fixed", "fix", "fixing", "fixes"], correctAnswer: "fixed", explanation: "Regular verb." },
    { id: "ps14", scenario: "Accident report.", questionText: "The sailor _____ on the wet deck.", options: ["slipped", "slip", "slips", "slipping"], correctAnswer: "slipped", explanation: "Slip -> Slipped." },
    { id: "ps15", scenario: "Purchase.", questionText: "The Navy _____ new helicopters.", options: ["bought", "buy", "buyed", "buying"], correctAnswer: "bought", explanation: "Buy -> Bought." }
  ],
  [Topic.SHOULD_IMPERATIVES]: [
    { id: "imp1", scenario: "Safety rule.", questionText: "You _____ wear ear protection here.", options: ["must", "mustn't", "don't", "not"], correctAnswer: "must", explanation: "Strong obligation." },
    { id: "imp2", scenario: "Panic control.", questionText: "_____ panic! Stay calm.", options: ["Don't", "No", "Not", "Shouldn't"], correctAnswer: "Don't", explanation: "Negative command: Don't + Verb." },
    { id: "imp3", scenario: "Restricted zone.", questionText: "You _____ enter without permission.", options: ["mustn't", "should", "do", "please"], correctAnswer: "mustn't", explanation: "Prohibition (Forbidden)." },
    { id: "imp4", scenario: "Direct order.", questionText: "_____ the hatch now!", options: ["Close", "Closing", "Closed", "To close"], correctAnswer: "Close", explanation: "Imperative -> Base verb." },
    { id: "imp5", scenario: "Health advice.", questionText: "You _____ drink water in hot weather.", options: ["should", "shouldn't", "don't", "not"], correctAnswer: "should", explanation: "Advice." },
    { id: "imp6", scenario: "Alarm reaction.", questionText: "_____ the button!", options: ["Press", "Pressing", "Pressed", "To press"], correctAnswer: "Press", explanation: "Command." },
    { id: "imp7", scenario: "Cleaning.", questionText: "_____ the floor.", options: ["Mop", "Mopping", "Mopped", "Mops"], correctAnswer: "Mop", explanation: "Command." },
    { id: "imp8", scenario: "Safety advice.", questionText: "We _____ run on wet decks.", options: ["shouldn't", "should", "do", "must"], correctAnswer: "shouldn't", explanation: "Negative advice." },
    { id: "imp9", scenario: "Attention.", questionText: "_____ silent!", options: ["Be", "Do", "Have", "Go"], correctAnswer: "Be", explanation: "Be + Adjective." },
    { id: "imp10", scenario: "Navigation.", questionText: "We _____ check the map.", options: ["should", "mustn't", "not", "no"], correctAnswer: "should", explanation: "Advice/Good idea." },
    { id: "imp11", scenario: "Weapon safety.", questionText: "_____ point the gun at people!", options: ["Don't", "Not", "No", "Do"], correctAnswer: "Don't", explanation: "Negative command." },
    { id: "imp12", scenario: "Uniform.", questionText: "_____ your boots.", options: ["Polish", "Polished", "Polishing", "Polishes"], correctAnswer: "Polish", explanation: "Command." },
    { id: "imp13", scenario: "Timekeeping.", questionText: "You _____ be late for watch.", options: ["mustn't", "should", "do", "can"], correctAnswer: "mustn't", explanation: "Prohibition." },
    { id: "imp14", scenario: "Respect.", questionText: "_____ the officer.", options: ["Salute", "Saluting", "Saluted", "Salutes"], correctAnswer: "Salute", explanation: "Command." }
  ],
  [Topic.PRESENT_CONT_VS_SIMPLE]: [
    { id: "pc1", scenario: "Visual contact.", questionText: "Look! The ship _____.", options: ["is turning", "turns", "turn", "turned"], correctAnswer: "is turning", explanation: "Happening now." },
    { id: "pc2", scenario: "Routine.", questionText: "The Captain usually _____ coffee.", options: ["drinks", "is drinking", "drink", "drinking"], correctAnswer: "drinks", explanation: "Routine -> Simple." },
    { id: "pc3", scenario: "Current action.", questionText: "We _____ the engine now.", options: ["are testing", "test", "tests", "tested"], correctAnswer: "are testing", explanation: "Now -> Continuous." },
    { id: "pc4", scenario: "Fact.", questionText: "This ship _____ 200 sailors.", options: ["carries", "is carrying", "carry", "carrying"], correctAnswer: "carries", explanation: "General fact." },
    { id: "pc5", scenario: "Busy now.", questionText: "I _____ to the radio, wait.", options: ["am listening", "listen", "listens", "listened"], correctAnswer: "am listening", explanation: "Happening now." },
    { id: "pc6", scenario: "Timetable.", questionText: "The ferry _____ at 0900.", options: ["leaves", "is leaving", "leave", "leaving"], correctAnswer: "leaves", explanation: "Schedule." },
    { id: "pc7", scenario: "On the phone.", questionText: "The XO _____ on the phone.", options: ["is talking", "talks", "talk", "talking"], correctAnswer: "is talking", explanation: "Now." },
    { id: "pc8", scenario: "General truth.", questionText: "It _____ a lot at sea.", options: ["rains", "is raining", "rain", "raining"], correctAnswer: "rains", explanation: "General climate." },
    { id: "pc9", scenario: "Current location.", questionText: "We _____ near Cyprus currently.", options: ["are sailing", "sail", "sails", "sailed"], correctAnswer: "are sailing", explanation: "Current activity." },
    { id: "pc10", scenario: "Job description.", questionText: "The cook _____ food every day.", options: ["prepares", "is preparing", "prepare", "preparing"], correctAnswer: "prepares", explanation: "Job routine." },
    { id: "pc11", scenario: "Alert.", questionText: "Listen! The alarm _____.", options: ["is ringing", "rings", "ring", "rung"], correctAnswer: "is ringing", explanation: "Happening now." },
    { id: "pc12", scenario: "Observation.", questionText: "The sailors _____ the deck right now.", options: ["are scrubbing", "scrub", "scrubs", "scrubbed"], correctAnswer: "are scrubbing", explanation: "Now." }
  ],
  [Topic.MOVEMENT]: [
    { id: "mv1", scenario: "Helicopter.", questionText: "The heli is landing _____ the deck.", options: ["on", "in", "at", "through"], correctAnswer: "on", explanation: "Surface." },
    { id: "mv2", scenario: "Submarine.", questionText: "The sub went _____ the water.", options: ["under", "over", "on", "up"], correctAnswer: "under", explanation: "Below." },
    { id: "mv3", scenario: "Man overboard.", questionText: "Jump _____ the water!", options: ["into", "onto", "across", "through"], correctAnswer: "into", explanation: "Entering volume." },
    { id: "mv4", scenario: "Corridor.", questionText: "Walk _____ the corridor.", options: ["along", "across", "over", "under"], correctAnswer: "along", explanation: "Following a line." },
    { id: "mv5", scenario: "Exit.", questionText: "Sail _____ the harbor.", options: ["out of", "into", "on", "under"], correctAnswer: "out of", explanation: "Leaving." },
    { id: "mv6", scenario: "Ladder.", questionText: "Climb _____ the ladder.", options: ["up", "through", "across", "into"], correctAnswer: "up", explanation: "Vertical movement." },
    { id: "mv7", scenario: "Transfer.", questionText: "Go _____ ship A and ship B.", options: ["between", "among", "through", "into"], correctAnswer: "between", explanation: "Two points." },
    { id: "mv8", scenario: "Bridge access.", questionText: "Go _____ the door.", options: ["through", "across", "over", "on"], correctAnswer: "through", explanation: "Passing inside." },
    { id: "mv9", scenario: "Ocean crossing.", questionText: "We sailed _____ the Atlantic.", options: ["across", "along", "through", "over"], correctAnswer: "across", explanation: "One side to other." },
    { id: "mv10", scenario: "Man overboard.", questionText: "He fell _____ the ship.", options: ["off", "out", "away", "down"], correctAnswer: "off", explanation: "Separation from surface." },
    { id: "mv11", scenario: "Approach.", questionText: "The boat is coming _____ us.", options: ["towards", "at", "on", "under"], correctAnswer: "towards", explanation: "Direction." },
    { id: "mv12", scenario: "Flight.", questionText: "The plane flew _____ the ship.", options: ["over", "on", "under", "through"], correctAnswer: "over", explanation: "Higher than, no contact." }
  ],
  [Topic.REQUESTS_OFFERS]: [
    { id: "ro1", scenario: "Mess hall.", questionText: "_____ I have coffee?", options: ["Can", "Do", "Am", "Have"], correctAnswer: "Can", explanation: "Request." },
    { id: "ro2", scenario: "Assistance.", questionText: "_____ I help you, Sir?", options: ["Shall", "Do", "Are", "Would"], correctAnswer: "Shall", explanation: "Offer." },
    { id: "ro3", scenario: "Preference.", questionText: "_____ you like tea?", options: ["Would", "Do", "Can", "Are"], correctAnswer: "Would", explanation: "Offer." },
    { id: "ro4", scenario: "Permission.", questionText: "_____ I leave now?", options: ["May", "Do", "Have", "Would"], correctAnswer: "May", explanation: "Formal permission." },
    { id: "ro5", scenario: "Request.", questionText: "_____ you pass the pen?", options: ["Could", "Should", "Are", "Must"], correctAnswer: "Could", explanation: "Polite request." },
    { id: "ro6", scenario: "Check-in.", questionText: "_____ I see your ID?", options: ["Could", "Should", "Do", "Am"], correctAnswer: "Could", explanation: "Request." },
    { id: "ro7", scenario: "Service.", questionText: "_____ I bring you water?", options: ["Can", "Do", "Have", "Are"], correctAnswer: "Can", explanation: "Offer." },
    { id: "ro8", scenario: "Borrowing.", questionText: "_____ I borrow your map?", options: ["Can", "Am", "Do", "Have"], correctAnswer: "Can", explanation: "Permission." },
    { id: "ro9", scenario: "Form filling.", questionText: "_____ you sign here?", options: ["Could", "May", "Shall", "Am"], correctAnswer: "Could", explanation: "Request." },
    { id: "ro10", scenario: "Invitation.", questionText: "_____ you like to join us?", options: ["Would", "Do", "Can", "Are"], correctAnswer: "Would", explanation: "Invitation." },
    { id: "ro11", scenario: "Radio check.", questionText: "_____ you hear me?", options: ["Can", "Are", "Have", "May"], correctAnswer: "Can", explanation: "Ability." },
    { id: "ro12", scenario: "Carrying.", questionText: "_____ I carry that box?", options: ["Shall", "Will", "Do", "Am"], correctAnswer: "Shall", explanation: "Offer." }
  ]
};

// Helper to shuffle options
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper to get random question
const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const generateQuestion = async (
  topic: Topic, 
  seenMap: Record<string, number> = {}
): Promise<Question | null> => {
  
  let pool: Question[] = [];

  if (topic === Topic.MIXED) {
    Object.values(QUESTION_BANK).forEach(questions => {
      pool = [...pool, ...questions];
    });
  } else {
    pool = QUESTION_BANK[topic] || [];
  }

  const MAX_REPEATS = 2;
  let availableQuestions = pool.filter(q => (seenMap[q.id] || 0) < MAX_REPEATS);

  if (availableQuestions.length === 0) {
    availableQuestions = pool; 
  }

  if (availableQuestions.length === 0) {
     return {
      id: "err",
      scenario: "SYSTEM ERROR",
      questionText: "No questions available.",
      options: ["Reset", "Retry"],
      correctAnswer: "Reset",
      explanation: "Reload."
    };
  }

  const rawQuestion = getRandom(availableQuestions);
  
  // Return a new object with shuffled options
  return {
    ...rawQuestion,
    options: shuffleArray(rawQuestion.options)
  };
};
