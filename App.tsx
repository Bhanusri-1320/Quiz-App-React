
import Questions from "./Questions";

function App() {
  const questions = [
    {
      id: 1,
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correctAnswer: "JavaScript"
    },
    {
      id: 2,
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Computer Style Sheets"
      ],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      id: 3,
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HyperText Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamborghinis"
      ],
      correctAnswer: "HyperText Markup Language"
    },
    {
      id: 4,
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],
      correctAnswer: "1995"
    },
    {
      id: 5,
      question: "Which company developed React?",
      options: ["Google", "Facebook", "Twitter", "Microsoft"],
      correctAnswer: "Facebook"
    }
  ];
  return (
    <div>
      <h1>Quiz App</h1>
      <Questions Questions={questions}></Questions>
    </div>
  )
}
export default App