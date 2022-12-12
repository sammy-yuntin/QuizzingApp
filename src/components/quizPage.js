import React from "react";
import QuizId from "./quizId";
import QuizOptions from "./quizOptions";
import Question from "./quizQuestion";

const QuizPage = () =>{

    const quiz = [
        {
          "category": "Science",
          "id": "622a1c377cc59eab6f9504ec",
          "correctAnswer": "dreams",
          "incorrectAnswers": [
            "drug dosage",
            "the interrelationship between an organism's physical functioning and its environment",
            "crop circles"
          ],
          "question": "What is Oneirology the study of?",
          "tags": [
            "science"
          ],
          "type": "Multiple Choice",
          "difficulty": "hard",
          "regions": []
        },
        {
          "category": "Science",
          "id": "624437ad746187c5e7be936a",
          "correctAnswer": "Sodium chloride",
          "incorrectAnswers": [
            "Calcium magnesium carbonate",
            "Trichloromethane",
            "Iron Oxide"
          ],
          "question": "What chemical has the formula NaCI?",
          "tags": [
            "chemistry",
            "science"
          ],
          "type": "Multiple Choice",
          "difficulty": "medium",
          "regions": []
        },
        {
          "category": "Science",
          "id": "62433534cfaae40c12961490",
          "correctAnswer": "A Cow",
          "incorrectAnswers": [
            "A Pen",
            "A Sow",
            "A Hen"
          ],
          "question": "A female sea lion is known as what?",
          "tags": [
            "science"
          ],
          "type": "Multiple Choice",
          "difficulty": "hard",
          "regions": []
        },
        {
          "category": "Science",
          "id": "622a1c3a7cc59eab6f950fca",
          "correctAnswer": "Edward Jenner",
          "incorrectAnswers": [
            "Francis Crick",
            "Edith Bower",
            "Marcel Decroix"
          ],
          "question": "Who developed the vaccine for smallpox?",
          "tags": [
            "science"
          ],
          "type": "Multiple Choice",
          "difficulty": "hard",
          "regions": []
        },
        {
          "category": "Science",
          "id": "622a1c3f7cc59eab6f95238f",
          "correctAnswer": "Vinegar",
          "incorrectAnswers": [
            "Aspirin",
            "Lemon Juice",
            "Soap"
          ],
          "question": "Acetic Acid Is More Commonly Known As What?",
          "tags": [
            "chemistry",
            "names",
            "science"
          ],
          "type": "Multiple Choice",
          "difficulty": "hard",
          "regions": []
        }
      ]
    return(
        <div className="QuizArea">
            <QuizId/>
            <Question/>
            <QuizOptions/>
        </div>
    )
};

export default QuizPage;