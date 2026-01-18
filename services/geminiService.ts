import { Topic, Question } from "../types";

// Static Question Database
// Expanded with more naval scenarios for A1/A2 learners

const QUESTION_BANK: Record<string, Omit<Question, 'id'>[]> = {
  [Topic.PAST_SIMPLE]: [
    {
      scenario: "The ship arrived at port yesterday morning.",
      questionText: "The Captain _____ the logbook at 0800 hours.",
      options: ["signed", "sign", "signs", "signing"],
      correctAnswer: "signed",
      explanation: "Past Simple describes completed actions at a specific time (yesterday)."
    },
    {
      scenario: "Engine inspection report.",
      questionText: "_____ you check the oil pressure last night?",
      options: ["Do", "Did", "Were", "Are"],
      correctAnswer: "Did",
      explanation: "Use 'Did' + subject + verb (base form) for Past Simple questions."
    },
    {
      scenario: "The radar system malfunctioned during the storm.",
      questionText: "The radar _____ working for two hours.",
      options: ["weren't", "isn't", "wasn't", "not"],
      correctAnswer: "wasn't",
      explanation: "Singular subject (radar) in past negative uses 'wasn't'."
    },
    {
      scenario: "Reviewing the voyage from last week.",
      questionText: "We _____ to Malta for supplies.",
      options: ["go", "goed", "went", "going"],
      correctAnswer: "went",
      explanation: "'Go' is an irregular verb. Past simple is 'went'."
    },
    {
      scenario: "A sailor was late for duty.",
      questionText: "He _____ on the bridge when the alarm sounded.",
      options: ["wasn't", "didn't", "weren't", "not"],
      correctAnswer: "wasn't",
      explanation: "For position/state in the past, use was/wasn't."
    },
    {
      scenario: "Last month's training exercise.",
      questionText: "The cadets _____ extremely tired after the drill.",
      options: ["was", "is", "were", "did"],
      correctAnswer: "were",
      explanation: "Plural subject (cadets) requires 'were'."
    },
    {
      scenario: "Reporting a past event.",
      questionText: "I _____ the enemy submarine on the sonar.",
      options: ["see", "saw", "seen", "seeing"],
      correctAnswer: "saw",
      explanation: "'See' is irregular. The past form is 'saw'."
    },
    {
      scenario: "Damage control report.",
      questionText: "The fire _____ in the engine room.",
      options: ["start", "started", "starting", "starts"],
      correctAnswer: "started",
      explanation: "Regular verbs in Past Simple end in -ed."
    },
    {
      scenario: "Morning briefing.",
      questionText: "We _____ the message two hours ago.",
      options: ["receive", "received", "receives", "receiving"],
      correctAnswer: "received",
      explanation: "'Ago' is a keyword for Past Simple."
    },
    {
      scenario: "Equipment check.",
      questionText: "_____ the radio broken yesterday?",
      options: ["Did", "Was", "Were", "Is"],
      correctAnswer: "Was",
      explanation: "Asking about the state of something (radio) uses 'Was'."
    },
    {
      scenario: "Shore leave conversation.",
      questionText: "They _____ stay on the ship last weekend.",
      options: ["didn't", "don't", "wasn't", "not"],
      correctAnswer: "didn't",
      explanation: "Negative past actions use 'didn't' + base verb."
    },
    {
      scenario: "Submarine dive log.",
      questionText: "The submarine _____ to 200 meters.",
      options: ["dive", "dived", "dove", "diving"],
      correctAnswer: "dove",
      explanation: "'Dive' past tense can be 'dived' or 'dove' (irregular style often used)."
    }
  ],
  [Topic.SHOULD_IMPERATIVES]: [
    {
      scenario: "Safety briefing on the flight deck.",
      questionText: "You _____ wear ear protection near the helicopters.",
      options: ["should", "shouldn't", "don't", "not"],
      correctAnswer: "should",
      explanation: "Use 'should' for safety advice."
    },
    {
      scenario: "Emergency protocol drill.",
      questionText: "_____ panic! Stay calm and follow orders.",
      options: ["No", "Don't", "Not", "Shouldn't"],
      correctAnswer: "Don't",
      explanation: "Negative imperative (command) starts with 'Don't'."
    },
    {
      scenario: "Warning about restricted areas.",
      questionText: "You _____ enter the ammunition store without authorization.",
      options: ["should", "shouldn't", "do", "please"],
      correctAnswer: "shouldn't",
      explanation: "'Shouldn't' indicates strong advice against something."
    },
    {
      scenario: "Officer giving a direct command.",
      questionText: "_____ the hatch immediately!",
      options: ["Close", "Closing", "Closed", "To close"],
      correctAnswer: "Close",
      explanation: "Imperatives use the base verb form."
    },
    {
      scenario: "Advice for seasickness.",
      questionText: "You _____ drink plenty of water.",
      options: ["should", "shouldn't", "don't", "not"],
      correctAnswer: "should",
      explanation: "Positive advice uses 'should'."
    },
    {
      scenario: "Fire drill instruction.",
      questionText: "_____ the alarm button!",
      options: ["Press", "Pressing", "Pressed", "To press"],
      correctAnswer: "Press",
      explanation: "Direct command (Imperative) uses the base verb."
    },
    {
      scenario: "Uniform inspection.",
      questionText: "Your boots are dirty. You _____ clean them.",
      options: ["should", "shouldn't", "don't", "not"],
      correctAnswer: "should",
      explanation: "Recommendation to correct a mistake."
    },
    {
      scenario: "Handling weapons.",
      questionText: "_____ point the weapon at your shipmates!",
      options: ["Not", "Don't", "No", "Should"],
      correctAnswer: "Don't",
      explanation: "Negative command: Don't + verb."
    },
    {
      scenario: "Bridge protocol.",
      questionText: "_____ quiet on the bridge.",
      options: ["Be", "Do", "Have", "Go"],
      correctAnswer: "Be",
      explanation: "Imperative with adjectives uses 'Be'."
    },
    {
      scenario: "Navigation advice.",
      questionText: "We are near rocks. We _____ slow down.",
      options: ["should", "shouldn't", "don't", "not"],
      correctAnswer: "should",
      explanation: "Recommendation for safety."
    }
  ],
  [Topic.PRESENT_CONT_VS_SIMPLE]: [
    {
      scenario: "Observation from the crow's nest.",
      questionText: "Look! The enemy ship _____ towards us.",
      options: ["turn", "turns", "is turning", "turned"],
      correctAnswer: "is turning",
      explanation: "Happening now ('Look!') requires Present Continuous."
    },
    {
      scenario: "Daily routine on board.",
      questionText: "The Captain usually _____ dinner in his cabin.",
      options: ["eat", "eats", "is eating", "eating"],
      correctAnswer: "eats",
      explanation: "Habits/routines ('usually') use Present Simple."
    },
    {
      scenario: "Current status report.",
      questionText: "We _____ a training exercise at the moment.",
      options: ["do", "did", "are doing", "does"],
      correctAnswer: "are doing",
      explanation: "'At the moment' -> Present Continuous."
    },
    {
      scenario: "General knowledge about the ship.",
      questionText: "This submarine _____ underwater for 3 months.",
      options: ["stays", "is staying", "stay", "staying"],
      correctAnswer: "stays",
      explanation: "Facts/Capabilities use Present Simple."
    },
    {
      scenario: "Communication check.",
      questionText: "I can't talk now, I _____ the radio.",
      options: ["repair", "am repairing", "repairs", "repaired"],
      correctAnswer: "am repairing",
      explanation: "Action in progress now."
    },
    {
      scenario: "Weekly schedule.",
      questionText: "The supply ship _____ every Monday.",
      options: ["come", "comes", "is coming", "coming"],
      correctAnswer: "comes",
      explanation: "Scheduled repeating event -> Present Simple."
    },
    {
      scenario: "Action on deck.",
      questionText: "Where is the boatswain? He _____ the ropes.",
      options: ["checks", "is checking", "check", "checking"],
      correctAnswer: "is checking",
      explanation: "Action happening right now."
    },
    {
      scenario: "General rule.",
      questionText: "The sun _____ in the East.",
      options: ["rise", "rises", "is rising", "rose"],
      correctAnswer: "rises",
      explanation: "Scientific fact -> Present Simple."
    },
    {
      scenario: "Listening to the engine.",
      questionText: "Listen! The engine _____ a strange noise.",
      options: ["make", "makes", "is making", "making"],
      correctAnswer: "is making",
      explanation: "Happening now ('Listen!') -> Present Continuous."
    },
    {
      scenario: "Describing the crew.",
      questionText: "Sailors _____ hard every day.",
      options: ["work", "works", "is working", "are working"],
      correctAnswer: "work",
      explanation: "General truth/routine -> Present Simple."
    }
  ],
  [Topic.MOVEMENT]: [
    {
      scenario: "Helicopter landing procedure.",
      questionText: "The helicopter is flying _____ the ship.",
      options: ["into", "onto", "out of", "through"],
      correctAnswer: "onto",
      explanation: "Moving to a surface (deck) is 'onto'."
    },
    {
      scenario: "Submarine navigation.",
      questionText: "The submarine went _____ the bridge.",
      options: ["under", "over", "on", "up"],
      correctAnswer: "under",
      explanation: "Moving below something."
    },
    {
      scenario: "Man overboard drill.",
      questionText: "The sailor jumped _____ the water.",
      options: ["out of", "across", "into", "through"],
      correctAnswer: "into",
      explanation: "Entering a substance/area (water)."
    },
    {
      scenario: "Walking through the ship.",
      questionText: "Go _____ this corridor and turn left.",
      options: ["across", "along", "over", "under"],
      correctAnswer: "along",
      explanation: "Moving in a line/corridor is 'along'."
    },
    {
      scenario: "Navigating a narrow channel.",
      questionText: "The ship sailed _____ the narrow canal.",
      options: ["through", "across", "over", "onto"],
      correctAnswer: "through",
      explanation: "Moving inside a 3D space/channel."
    },
    {
      scenario: "Leaving the port.",
      questionText: "The ship is sailing _____ the harbor.",
      options: ["out of", "into", "on", "under"],
      correctAnswer: "out of",
      explanation: "Leaving an enclosed area."
    },
    {
      scenario: "Crossing the ocean.",
      questionText: "We are sailing _____ the Atlantic Ocean.",
      options: ["across", "through", "over", "along"],
      correctAnswer: "across",
      explanation: "Going from one side to the other."
    },
    {
      scenario: "Climbing the mast.",
      questionText: "The sailor climbed _____ the mast to fix the flag.",
      options: ["up", "down", "through", "across"],
      correctAnswer: "up",
      explanation: "Moving to a higher position."
    },
    {
      scenario: "Moving between ships.",
      questionText: "Supplies were transferred _____ the two ships.",
      options: ["between", "among", "through", "into"],
      correctAnswer: "between",
      explanation: "In the space separating two objects."
    },
    {
      scenario: "Evacuation drill.",
      questionText: "Everyone must go _____ the emergency exit.",
      options: ["towards", "at", "on", "under"],
      correctAnswer: "towards",
      explanation: "Moving in the direction of something."
    }
  ],
  [Topic.REQUESTS_OFFERS]: [
    {
      scenario: "In the Officer's Mess (Hotel Service).",
      questionText: "_____ I have some more coffee, please?",
      options: ["Can", "Do", "Am", "Have"],
      correctAnswer: "Can",
      explanation: "'Can I...' is a common polite request."
    },
    {
      scenario: "Offering help to an officer.",
      questionText: "_____ I help you with those charts, Sir?",
      options: ["Shall", "Do", "Are", "Would"],
      correctAnswer: "Shall",
      explanation: "'Shall I...' is used to offer assistance."
    },
    {
      scenario: "Guest arriving at the Naval Base Hotel.",
      questionText: "_____ you like a wake-up call at 0600?",
      options: ["Do", "Can", "Would", "Are"],
      correctAnswer: "Would",
      explanation: "'Would you like...' is used for offers."
    },
    {
      scenario: "Asking for permission.",
      questionText: "_____ I leave the bridge now, Sir?",
      options: ["May", "Do", "Have", "Would"],
      correctAnswer: "May",
      explanation: "'May' is formal permission."
    },
    {
      scenario: "Requesting a pen.",
      questionText: "_____ you pass me the logbook, please?",
      options: ["Could", "Should", "Are", "Must"],
      correctAnswer: "Could",
      explanation: "'Could you...' is a polite request."
    },
    {
      scenario: "At the reception desk.",
      questionText: "_____ you fill in this form, please?",
      options: ["Would", "May", "Shall", "Do"],
      correctAnswer: "Would",
      explanation: "'Would you...' is a polite instruction/request."
    },
    {
      scenario: "Offering a drink.",
      questionText: "_____ you like tea or coffee?",
      options: ["Do", "Would", "Can", "Are"],
      correctAnswer: "Would",
      explanation: "Standard offer phrase."
    },
    {
      scenario: "Asking to borrow equipment.",
      questionText: "_____ I borrow your binoculars?",
      options: ["Can", "Am", "Do", "Have"],
      correctAnswer: "Can",
      explanation: "Asking for permission/ability."
    },
    {
      scenario: "Service in the mess hall.",
      questionText: "_____ I bring you anything else, Sir?",
      options: ["Can", "Do", "Have", "Are"],
      correctAnswer: "Can",
      explanation: "Offering service."
    },
    {
      scenario: "Checking in.",
      questionText: "_____ I see your ID card, please?",
      options: ["Could", "Should", "Do", "Am"],
      correctAnswer: "Could",
      explanation: "Polite request for identification."
    }
  ]
};

// Helper to get random question from array
const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

// Safe UUID generator that doesn't rely on crypto.randomUUID
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

  // Fallback if something goes wrong
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