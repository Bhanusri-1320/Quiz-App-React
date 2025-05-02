import { ReactNode } from "react";
import Question from "./Question";

interface Question {
    id: Number;
    question: String;
    options: String[];
    correctAnswer: String;
}
interface QuestionsProps {
    Questions: any;
}

function Questions({ Questions }: QuestionsProps) {
    return (
        <>
            <div className="list-group">
                {Questions.map((question: any) => (<Question children={question} key={question.id}></Question>))}
            </div>
            {/* <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
                    <label className="form-check-label" >
                        Default radio
                    </label>
                </input>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked>
                    <label className="form-check-label" >
                        Default checked radio
                    </label>
                </input>
            </div> */}
        </>
    )
}
export default Questions