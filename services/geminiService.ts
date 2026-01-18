import { Topic, Question } from "../types";

// Static Question Database - Expanded for Naval NCO Students
const QUESTION_BANK: Record<string, Omit<Question, 'id'>[]> = {
  [Topic.VOCABULARY]: [
    {
      scenario: "Direction on the ship.",
      questionText: "The left side of the ship is called _____.",
      options: ["Starboard", "Port", "Bow", "Stern"],
      correctAnswer: "Port",
      explanation: "Left is Port (Red). Right is Starboard (Green)."
    },
    {
      scenario: "Direction on the ship.",
      questionText: "The right side of the ship is called _____.",
      options: ["Starboard", "Port", "Deck", "Hull"],
      correctAnswer: "Starboard",
      explanation: "Right is Starboard. Think of 'Star' (Right)."
    },
    {
      scenario: "Ship structure.",
      questionText: "The front part of the ship is the _____.",
      options: ["Stern", "Bow", "Bridge", "Mast"],
      correctAnswer: "Bow",
      explanation: "The front is the Bow. The back is the Stern."
    },
    {
      scenario: "Ship structure.",
      questionText: "We eat our meals in the _____.",
      options: ["Galley", "Bridge", "Engine Room", "Deck"],
      correctAnswer: "Galley",
      explanation: "The kitchen/dining area on a ship is called the Galley or Mess."
    },
    {
      scenario: "Command center.",
      questionText: "The Captain controls the ship from the _____.",
      options: ["Bridge", "Kitchen", "Cabin", "Store"],
      correctAnswer: "Bridge",
      explanation: "The command center of a ship is the Bridge."
    },
    {
      scenario: "Sleeping quarters.",
      questionText: "I sleep in my _____.",
      options: ["Cabin", "Office", "Deck", "Mast"],
      correctAnswer: "Cabin",
      explanation: "A bedroom on a ship is called a Cabin or Berthing."
    },
    {
      scenario: "Emergency drill.",
      questionText: "In an emergency, go to your _____ Station.",
      options: ["Muster", "Master", "Monster", "Mister"],
      correctAnswer: "Muster",
      explanation: "Muster Station is where the crew gathers during emergencies."
    },
    {
      scenario: "Entering the ship.",
      questionText: "Walk up the _____ to get on the ship.",
      options: ["Gangway", "Highway", "Subway", "Doorway"],
      correctAnswer: "Gangway",
      explanation: "The ramp/ladder to board a ship is the Gangway."
    },
    {
      scenario: "Speed measurement.",
      questionText: "The ship's speed is measured in _____.",
      options: ["Knots", "Km/h", "Miles", "Meters"],
      correctAnswer: "Knots",
      explanation: "1 Knot = 1 Nautical Mile per hour."
    },
    {
      scenario: "Lookout duty.",
      questionText: "The sailor is on _____ duty at night.",
      options: ["Watch", "Clock", "Look", "See"],
      correctAnswer: "Watch",
      explanation: "Duty periods are called 'Watch' (e.g., Night Watch)."
    },
    {
      scenario: "Cleaning the ship.",
      questionText: "We scrub the _____ every morning.",
      options: ["Deck", "Roof", "Wall", "Ceiling"],
      correctAnswer: "Deck",
      explanation: "The floor of the ship is the Deck."
    },
    {
      scenario: "Acknowledging an order.",
      questionText: "Officer: 'Clean the room.' Sailor: '_____, Sir!'",
      options: ["Aye Aye", "Yes No", "Okay", "Maybe"],
      correctAnswer: "Aye Aye",
      explanation: "'Aye Aye' means 'I understand and will obey'."
    },
    {
      scenario: "Uniform check.",
      questionText: "Put on your _____ for the ceremony.",
      options: ["Uniform", "Costume", "Suit", "Dress"],
      correctAnswer: "Uniform",
      explanation: "Military personnel wear a Uniform."
    },
    {
      scenario: "Stopping the ship.",
      questionText: "Drop the _____ to stop the ship.",
      options: ["Anchor", "Brake", "Wheel", "Sail"],
      correctAnswer: "Anchor",
      explanation: "The heavy metal hook is the Anchor."
    },
    {
      scenario: "Ship movement.",
      questionText: "The ship is _____ at the port.",
      options: ["Docking", "Parking", "Stopping", "Landing"],
      correctAnswer: "Docking",
      explanation: "Ships 'dock' or 'berth' at a port."
    }
  ],
  [Topic.PAST_SIMPLE]: [
    {
      scenario: "The ship arrived at port yesterday.",
      questionText: "The Captain _____ the logbook at 0800 hours.",
      options: ["signed", "sign", "signs", "signing"],
      correctAnswer: "signed",
      explanation: "Past Simple describes completed actions."
    },
    {
      scenario: "Engine inspection report.",
      questionText: "_____ you check the oil pressure last night?",
      options: ["Did", "Do", "Were", "Are"],
      correctAnswer: "Did",
      explanation: "Use 'Did' for Past Simple questions."
    },
    {
      scenario: "Radar malfunction during the storm.",
      questionText: "The radar _____ working for two hours.",
      options: ["wasn't", "isn't", "weren't", "not"],
      correctAnswer: "wasn't",
      explanation: "Singular subject (radar) + negative past = wasn't."
    },
    {
      scenario: "Voyage log from last week.",
      questionText: "We _____ to Malta for supplies.",
      options: ["went", "go", "goed", "going"],
      correctAnswer: "went",
      explanation: "'Went' is the past form of 'Go'."
    },
    {
      scenario: "A sailor was late for duty.",
      questionText: "He _____ on the bridge when the alarm sounded.",
      options: ["wasn't", "didn't", "weren't", "not"],
      correctAnswer: "wasn't",
      explanation: "Position/state in past uses was/wasn't."
    },
    {
      scenario: "Training exercise report.",
      questionText: "The cadets _____ extremely tired after the drill.",
      options: ["were", "was", "is", "did"],
      correctAnswer: "were",
      explanation: "Plural subject (cadets) + past = were."
    },
    {
      scenario: "Reporting a past event.",
      questionText: "I _____ the enemy submarine on the sonar.",
      options: ["saw", "see", "seen", "seeing"],
      correctAnswer: "saw",
      explanation: "'Saw' is the past form of 'See'."
    },
    {
      scenario: "Damage control report.",
      questionText: "The fire _____ in the engine room.",
      options: ["started", "start", "starting", "starts"],
      correctAnswer: "started",
      explanation: "Regular verbs end in -ed."
    },
    {
      scenario: "Morning briefing.",
      questionText: "We _____ the message two hours ago.",
      options: ["received", "receive", "receives", "receiving"],
      correctAnswer: "received",
      explanation: "'Ago' indicates Past Simple."
    },
    {
      scenario: "Maintenance log.",
      questionText: "The mechanic _____ the broken pump.",
      options: ["repaired", "repair", "repairing", "repairs"],
      correctAnswer: "repaired",
      explanation: "Completed action in the past."
    },
    {
      scenario: "Shore leave.",
      questionText: "They _____ come back to the ship on time.",
      options: ["didn't", "don't", "wasn't", "not"],
      correctAnswer: "didn't",
      explanation: "Negative past action uses 'didn't'."
    }
  ],
  [Topic.SHOULD_IMPERATIVES]: [
    {
      scenario: "Safety briefing on deck.",
      questionText: "You _____ wear a life jacket in the boat.",
      options: ["must", "mustn't", "don't", "not"],
      correctAnswer: "must",
      explanation: "Strong obligation/rule."
    },
    {
      scenario: "Emergency protocol.",
      questionText: "_____ panic! Stay calm.",
      options: ["Don't", "No", "Not", "Shouldn't"],
      correctAnswer: "Don't",
      explanation: "Negative imperative (command)."
    },
    {
      scenario: "Restricted area.",
      questionText: "You _____ smoke in the ammunition store.",
      options: ["mustn't", "should", "do", "please"],
      correctAnswer: "mustn't",
      explanation: "Prohibition (Forbidden)."
    },
    {
      scenario: "Officer giving a command.",
      questionText: "_____ the hatch immediately!",
      options: ["Close", "Closing", "Closed", "To close"],
      correctAnswer: "Close",
      explanation: "Imperatives use the base verb."
    },
    {
      scenario: "Advice for seasickness.",
      questionText: "You _____ drink plenty of water.",
      options: ["should", "shouldn't", "don't", "not"],
      correctAnswer: "should",
      explanation: "Positive advice."
    },
    {
      scenario: "Fire drill instruction.",
      questionText: "_____ the alarm button!",
      options: ["Press", "Pressing", "Pressed", "To press"],
      correctAnswer: "Press",
      explanation: "Direct command."
    },
    {
      scenario: "Cleaning duty.",
      questionText: "_____ the floor carefully.",
      options: ["Mop", "Mopping", "Mopped", "Mops"],
      correctAnswer: "Mop",
      explanation: "Imperative command."
    },
    {
      scenario: "Safety rule.",
      questionText: "We _____ run on the wet deck.",
      options: ["shouldn't", "should", "do", "must"],
      correctAnswer: "shouldn't",
      explanation: "Advice against something dangerous."
    },
    {
      scenario: "Morning assembly.",
      questionText: "_____ silent when the Commander speaks.",
      options: ["Be", "Do", "Have", "Go"],
      correctAnswer: "Be",
      explanation: "Imperative with adjective."
    }
  ],
  [Topic.PRESENT_CONT_VS_SIMPLE]: [
    {
      scenario: "Observation deck.",
      questionText: "Look! The enemy ship _____ towards us.",
      options: ["is turning", "turns", "turn", "turned"],
      correctAnswer: "is turning",
      explanation: "Happening now ('Look!')."
    },
    {
      scenario: "Daily routine.",
      questionText: "The Captain usually _____ coffee at 0700.",
      options: ["drinks", "is drinking", "drink", "drinking"],
      correctAnswer: "drinks",
      explanation: "Habit/Routine uses Present Simple."
    },
    {
      scenario: "Status report.",
      questionText: "We _____ the engine right now.",
      options: ["are testing", "test", "tests", "tested"],
      correctAnswer: "are testing",
      explanation: "'Right now' uses Present Continuous."
    },
    {
      scenario: "General fact.",
      questionText: "This ship _____ 200 sailors.",
      options: ["carries", "is carrying", "carry", "carrying"],
      correctAnswer: "carries",
      explanation: "General fact uses Present Simple."
    },
    {
      scenario: "Radio check.",
      questionText: "Be quiet! I _____ to the radio.",
      options: ["am listening", "listen", "listens", "listened"],
      correctAnswer: "am listening",
      explanation: "Action happening at the moment of speaking."
    },
    {
      scenario: "Schedule.",
      questionText: "The ferry _____ every hour.",
      options: ["leaves", "is leaving", "leave", "leaving"],
      correctAnswer: "leaves",
      explanation: "Timetable/Schedule uses Present Simple."
    },
    {
      scenario: "On the bridge.",
      questionText: "Where is the XO? He _____ on the phone.",
      options: ["is talking", "talks", "talk", "talking"],
      correctAnswer: "is talking",
      explanation: "Action happening now."
    }
  ],
  [Topic.MOVEMENT]: [
    {
      scenario: "Helicopter landing.",
      questionText: "The helicopter is landing _____ the deck.",
      options: ["on", "in", "at", "through"],
      correctAnswer: "on",
      explanation: "Surface contact."
    },
    {
      scenario: "Submarine maneuver.",
      questionText: "The submarine went _____ the surface.",
      options: ["under", "over", "on", "up"],
      correctAnswer: "under",
      explanation: "Below something."
    },
    {
      scenario: "Man overboard drill.",
      questionText: "Jump _____ the water feet first!",
      options: ["into", "onto", "across", "through"],
      correctAnswer: "into",
      explanation: "Entering a substance/area."
    },
    {
      scenario: "Corridor movement.",
      questionText: "Walk _____ the corridor to the sickbay.",
      options: ["along", "across", "over", "under"],
      correctAnswer: "along",
      explanation: "Moving in a line."
    },
    {
      scenario: "Leaving port.",
      questionText: "The ship sailed _____ the harbor.",
      options: ["out of", "into", "on", "under"],
      correctAnswer: "out of",
      explanation: "Exiting an enclosed area."
    },
    {
      scenario: "Climbing.",
      questionText: "Climb _____ the ladder to the bridge.",
      options: ["up", "down", "through", "across"],
      correctAnswer: "up",
      explanation: "Moving to a higher position."
    }
  ],
  [Topic.REQUESTS_OFFERS]: [
    {
      scenario: "Officer's Mess.",
      questionText: "_____ I have some water, please?",
      options: ["Can", "Do", "Am", "Have"],
      correctAnswer: "Can",
      explanation: "Polite request."
    },
    {
      scenario: "Helping an officer.",
      questionText: "_____ I carry your bag, Sir?",
      options: ["Shall", "Do", "Are", "Would"],
      correctAnswer: "Shall",
      explanation: "Offering help."
    },
    {
      scenario: "Guest services.",
      questionText: "_____ you like coffee or tea?",
      options: ["Would", "Do", "Can", "Are"],
      correctAnswer: "Would",
      explanation: "Offering a choice."
    },
    {
      scenario: "Permission.",
      questionText: "_____ I enter the room, Sir?",
      options: ["May", "Do", "Have", "Would"],
      correctAnswer: "May",
      explanation: "Formal permission."
    },
    {
      scenario: "Requesting action.",
      questionText: "_____ you open the window, please?",
      options: ["Could", "Should", "Are", "Must"],
      correctAnswer: "Could",
      explanation: "Polite request."
    }
  ]
};

// Helper to get random question from array
const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

// Safe UUID generator
const generateId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const generateQuestion = async (topic: Topic): Promise<Question | null> => {
  let pool: Omit<Question, 'id'>[] = [];

  if (topic === Topic.MIXED) {
    // Combine all pools
    Object.values(QUESTION_BANK).forEach(questions => {
      pool = [...pool, ...questions];
    });
  } else {
    pool = QUESTION_BANK[topic] || [];
  }

  // Fallback
  if (pool.length === 0) {
    return {
      id: "fallback-error",
      scenario: "SYSTEM MALFUNCTION.",
      questionText: "Data corrupted. Please restart protocol.",
      options: ["Reset", "Ignore", "Wait", "Stop"],
      correctAnswer: "Reset",
      explanation: "Please select a valid topic."
    };
  }

  const selectedTemplate = getRandom(pool);

  return {
    id: generateId(),
    ...selectedTemplate
  };
};
