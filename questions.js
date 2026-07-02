/* ==========================================================
   questions.js
   Quiz data + validation helpers for the Law of Demand lesson.
   Include this file BEFORE your main script:
   <script src="questions.js"></script>
   ========================================================== */

const quizQuestions = [
  {
    "id": 1,
    "title": "Question 1: Explore the Graph",
    "prompt": "Move the dot anywhere on the demand curve. Watch how Price, Quantity, and Total Revenue change.",
    "hint": "Watch how Price, Quantity, and Total Revenue change."
  },
  {
    "id": 2,
    "title": "Question 2: Set the Price",
    "prompt": "Move the graph until Price = $8.",
    "validationState": { "price": 8 }
  },
  {
    "id": 3,
    "title": "Question 3: Find the Quantity",
    "prompt": "Set Price = $14. What is the quantity demanded?",
    "options": ["2", "3", "5", "6"],
    "correctAnswer": "3",
    "validationState": { "price": 14, "quantity": 3 }
  },
  {
    "id": 4,
    "title": "Question 4: Find the Price",
    "prompt": "Set Quantity = 7. What is the price?",
    "options": ["$4", "$6", "$8", "$10"],
    "correctAnswer": "$6",
    "validationState": { "quantity": 7, "price": 6 }
  },
  {
    "id": 5,
    "title": "Question 5: Highest Price",
    "prompt": "Find the price intercept (highest possible price) on the demand curve. What is the quantity demanded at this point?",
    "options": ["0", "2", "4", "6"],
    "correctAnswer": "0",
    "validationState": { "price": 20, "quantity": 0 }
  },
  {
    "id": 6,
    "title": "Question 6: Lowest Price",
    "prompt": "Move the graph until Price = $0. What is the quantity demanded.",
    "options": ["0", "5", "8", "10"],
    "correctAnswer": "10",
    "validationState": { "price": 0, "quantity": 10 }
  },
  {
    "id": 7,
    "title": "Question 7: Revenue Challenge",
    "prompt": "Can you find a point where Total Revenue = $32?",
    "validationState": { "totalRevenue": 32 }
  },
  {
    "id": 8,
    "title": "Question 11: Find the Point",
    "prompt": "Find the point on Graph where Price = $10, Quantity = 5, and Total Revenue = $50.",
    "validationState": { "price": 10, "quantity": 5 }
  },
  {
    "id": 9,
    "title": "Question 8: Maximum Revenue",
    "prompt": "Move the graph until Total Revenue is as high as possible.",
    "validationState": { "totalRevenue": 50 }
  },

  {
    "id": 10,
    "title": "Question 4: Find the Revenue",
    "prompt": "Set Quantity = 7. What is the Revenue?",
    "options": ["$50", "$30", "$42", "$10"],
    "correctAnswer": "$42",
    "validationState": { "quantity": 7, "price": 6 }
  },
  {
    "id": 11,
    "title": "Question 9: Prediction",
    "prompt": "If price increases, what happens to quantity demanded?",
    "options": ["Quantity increases", "Quantity decreases", "Quantity stays the same"],
    "correctAnswer": "Quantity decreases"
  },
  {
    "id": 12,
    "title": "Question 10: Prediction",
    "prompt": "If price decreases, what happens to quantity demanded?",
    "options": ["Quantity increases", "Quantity decreases", "Quantity stays the same"],
    "correctAnswer": "Quantity increases"
  },
  
  {
    "id": 13,
    "title": "Question 12: Use the Equation",
    "prompt": "Using the equation P = 20 − 2Q If Price (P) = 4, what is the value of Quantity (Q)?",
    "options": ["Q = 4", "Q = 6", "Q = 8", "Q = 12"],
    "correctAnswer": "Q = 8"
  },
  {
    "id": 14,
    "title": "Question 13: Use the Equation",
    "prompt": "Using the equation P = 20 − 2Q If Quantity (Q) = 6, what is the value of Price (P)?",
    "options": ["P = $6", "P = $8", "P = $10", "P = $12"],
    "correctAnswer": "P = $8"
  },
  {
    "id": 15,
    "title": "Question 14: Direct Demand Equation",
    "prompt": "The inverse demand equation is P = 20 − 2Q Which of the following is the Direct Demand Equation?",
    "options": ["Q = 20 − 2P", "Q = 10 − 0.5P", "Q = 20 + 2P", "Q = 2P − 20"],
    "correctAnswer": "Q = 10 − 0.5P"
  },
  {
    "id": 16,
    "title": "Question 15: Inverse Demand Equation",
    "prompt": "The direct demand equation is Q = 10 − 0.5P Which of the following is the Inverse Demand Equation?",
    "options": ["P = 20 − 2Q", "P = 10 − 0.5Q", "P = 2Q − 20", "P = 20 + 2Q"],
    "correctAnswer": "P = 20 − 2Q"
  }
];

/* Tolerance allowed when comparing live graph state to a target,
   since Price/Quantity move in 0.2 / 0.1 steps. */
const VALIDATION_TOLERANCE = {
  price: 0.05,
  quantity: 0.05,
  totalRevenue: 0.5
};





/**
 * Compares a question's validationState (if any) against the current
 * playground state { P, Q, R }.
 * Returns:
 *   true   -> all target fields currently match (question satisfied)
 *   false  -> validationState exists but doesn't match yet
 *   null   -> question has no validationState (nothing to check live)
 */
function checkStateValidation(question, state) {
  if (!question.validationState) return null;

  const map = { price: "P", quantity: "Q", totalRevenue: "R" };

  for (const key in question.validationState) {
    const target = question.validationState[key];
    const stateKey = map[key];
    if (!stateKey) continue;
    const current = state[stateKey];
    const tolerance = VALIDATION_TOLERANCE[key] ?? 0.05;
    if (Math.abs(current - target) > tolerance) {
      return false;
    }
  }
  return true;
}

/**
 * Checks a selected multiple-choice option against a question's
 * correctAnswer. Returns true/false, or null if the question has no options.
 */
function checkOptionAnswer(question, selected) {
  if (!question.options || !question.correctAnswer) return null;
  return selected === question.correctAnswer;
}




