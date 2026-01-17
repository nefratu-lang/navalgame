import { Topic, Question } from "../types";

// Static Question Database
// This removes the need for an API Key and ensures the app works offline/statically.

const QUESTION_BANK: Record<string, Omit<Question, 'id'>[]> = {
  [Topic.PAST_SIMPLE]: [
    {
      scenario: "The ship arrived at port yesterday morning.",
      questionText: "The Captain _____ the logbook at 0800 hours.",
      options: ["signed", "sign", "signs", "signing"],
      correctAnswer: "signed",
      explanation: "Past Simple allows us to describe completed actions at a specific time (yesterday)."
    },
    {
      scenario: "Engine inspection report.",
      questionText: "_____ you check the oil pressure last night?",
      options: ["Do", "Did", "Were", "Are"],
      correctAnswer: "Did",
      explanation: "We use 'Did' + subject + verb (base form) for Past Simple questions."
    },
    {
      scenario: "The radar system malfunctioned during the storm.",
      questionText: "The radar _____ working for two hours.",
      options: ["weren't", "isn't", "wasn't", "not"],
      correctAnswer: "wasn't",
      explanation: "The verb 'to be' in past negative for singular subject (radar) is 'wasn't'."
    },
    {
      scenario: "Reviewing the voyage from last week.",
      questionText: "We _____ to Malta for supplies.",
      options: ["go", "goed", "went", "going"],
      correctAnswer: "went",
      explanation: "'Go' is an irregular verb. The past simple form is 'went'."
    },
    {
      scenario: "A sailor was late for duty.",
      questionText: "He _____ on the bridge when the alarm sounded.",
      options: ["wasn't", "didn't", "weren't", "not"],
      correctAnswer: "wasn't",
      explanation: "For position/state in the past, use was/were. 'He wasn't' is correct."
    },
    {
      scenario: "Last month's training exercise.",
      questionText: "The cadets _____ extremely tired after the drill.",
      options: ["was", "is", "were", "did"],
      correctAnswer: "were",
      explanation: "Plural subject (cadets) requires 'were' in Past Simple."
    }
  ],
  [Topic.SHOULD_IMPERATIVES]: [
    {
      scenario: "Safety briefing on the flight deck.",
      questionText: "You _____ wear ear protection near the helicopters.",
      options: ["should", "shouldn't", "don't", "not"],
      correctAnswer: "should",
      explanation: "We use 'should' to give advice or strong recommendations for safety."
    },
    {
      scenario: "Emergency protocol drill.",
      questionText: "_____ panic! Stay calm and follow orders.",
      options: ["No", "Don't", "Not", "Shouldn't"],
      correctAnswer: "Don't",
      explanation: "Negative imperative (command) is formed with 'Don't' + verb."
    },
    {
      scenario: "Warning about restricted areas.",
      questionText: "You _____ enter the ammunition store without authorization.",
      options: ["should", "shouldn't", "do", "please"],
      correctAnswer: "shouldn't",
      explanation: "'Shouldn't' indicates a negative recommendation or prohibition."
    },
    {
      scenario: "Officer giving a direct command.",
      questionText: "_____ the hatch immediately!",
      options: ["Close", "Closing", "Closed", "To close"],
      correctAnswer: "Close",
      explanation: "Imperatives use the base form of the verb without a subject."
    },
    {
      scenario: "Advice for seasickness.",
      questionText: "You _____ drink plenty of water and stay on deck.",
      options: ["should", "shouldn't", "don't", "not"],
      correctAnswer: "should",
      explanation: "Advice for a good idea uses 'should'."
    }
  ],
  [Topic.PRESENT_CONT_VS_SIMPLE]: [
    {
      scenario: "Observation from the crow's nest.",
      questionText: "Look! The enemy ship _____ towards us.",
      options: ["turn", "turns", "is turning", "turned"],
      correctAnswer: "is turning",
      explanation: "Use Present Continuous (is turning) for actions happening right now."
    },
    {
      scenario: "Daily routine on board.",
      questionText: "The Captain usually _____ dinner in his cabin.",
      options: ["eat", "eats", "is eating", "eating"],
      correctAnswer: "eats",
      explanation: "Use Present Simple (eats) for habits, routines, or facts."
    },
    {
      scenario: "Current status report.",
      questionText: "We _____ a training exercise at the moment.",
      options: ["do", "did", "are doing", "does"],
      correctAnswer: "are doing",
      explanation: "'At the moment' requires Present Continuous (are doing)."
    },
    {
      scenario: "General knowledge about the ship.",
      questionText: "This submarine _____ underwater for 3 months.",
      options: ["stays", "is staying", "stay", "staying"],
      correctAnswer: "stays",
      explanation: "Facts about the ship's capability use Present Simple."
    },
    {
      scenario: "Communication check.",
      questionText: "I can't talk now, I _____ the radio.",
      options: ["repair", "am repairing", "repairs", "repaired"],
      correctAnswer: "am repairing",
      explanation: "Action in progress ('now') uses Present Continuous."
    }
  ],
  [Topic.MOVEMENT]: [
    {
      scenario: "Helicopter landing procedure.",
      questionText: "The helicopter is flying _____ the ship.",
      options: ["into", "onto", "out of", "through"],
      correctAnswer: "onto",
      explanation: "Movement to a surface (the deck) uses 'onto'."
    },
    {
      scenario: "Submarine navigation.",
      questionText: "The submarine went _____ the bridge.",
      options: ["under", "over", "on", "up"],
      correctAnswer: "under",
      explanation: "Movement below something uses 'under'."
    },
    {
      scenario: "Man overboard drill.",
      questionText: "The sailor jumped _____ the water.",
      options: ["out of", "across", "into", "through"],
      correctAnswer: "into",
      explanation: "Movement from outside to inside a substance (water) uses 'into'."
    },
    {
      scenario: "Walking through the ship.",
      questionText: "Go _____ this corridor and turn left.",
      options: ["across", "along", "over", "under"],
      correctAnswer: "along",
      explanation: "Moving in a line (like a corridor) uses 'along'."
    },
    {
      scenario: "Navigating a narrow channel.",
      questionText: "The ship sailed _____ the narrow canal.",
      options: ["through", "across", "over", "onto"],
      correctAnswer: "through",
      explanation: "Moving inside a 3D space or channel uses 'through'."
    }
  ],
  [Topic.REQUESTS_OFFERS]: [
    {
      scenario: "In the Officer's Mess (Hotel Service).",
      questionText: "_____ I have some more coffee, please?",
      options: ["Can", "Do", "Am", "Have"],
      correctAnswer: "Can",
      explanation: "'Can' or 'Could' is used for making polite requests."
    },
    {
      scenario: "Offering help to an officer carrying boxes.",
      questionText: "_____ I help you with those charts, Sir?",
      options: ["Shall", "Do", "Are", "Would"],
      correctAnswer: "Shall",
      explanation: "'Shall I...' is a polite way to offer assistance."
    },
    {
      scenario: "Guest arriving at the Naval Base Hotel.",
      questionText: "_____ you like a wake-up call at 0600?",
      options: ["Do", "Can", "Would", "Are"],
      correctAnswer: "Would",
      explanation: "'Would you like...' is the standard polite form for offers."
    },
    {
      scenario: "Asking for permission to leave the bridge.",
      questionText: "_____ I leave the bridge now, Sir?",
      options: ["May", "Do", "Have", "Would"],
      correctAnswer: "May",
      explanation: "'May' is formal and polite for asking permission."
    },
    {
      scenario: "Requesting a pen.",
      questionText: "_____ you pass me the logbook, please?",
      options: ["Could", "Should", "Are", "Must"],
      correctAnswer: "Could",
      explanation: "'Could you...' is polite for requests."
    }
  ]
};

// Helper to get random question from array
const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const generateQuestion = async (topic: Topic): Promise<Question | null> => {
  // Simulate a short "scanning" delay for game feel
  // await new Promise(resolve => setTimeout(resolve, 500)); 
  // (Note: The App.tsx already has a timeout, so we can return immediately or keep it minimal)
  
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
    id: crypto.randomUUID(),
    ...selectedTemplate
  };
};