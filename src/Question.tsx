import { useState } from "react";
import "./Question.css";
interface QuestionObj {
    id: Number;
    question: String;
    options: String[];
    correctAnswer: String;
}
interface QuestionProps {
    children: QuestionObj;
}

function Question({ children }: QuestionProps) {
    const { question, options, correctAnswer } = children;
    const [selectedOption, setSelectedOption] = useState('radioDefault2');
    return (
        <>
            {/* <div>
                <div className="card">
                    <div className="card-body">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                                {question}
                            </a>
                            {
                                options.map((option: any) => (
                                    <a href="#" className="list-group-item list-group-item-action">{option}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault1"
                        value="radioDefault1"
                        checked={selectedOption === 'radioDefault1'}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="radioDefault1">
                        Default radio
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault2"
                        value="radioDefault2"
                        checked={selectedOption === 'radioDefault2'}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="radioDefault2">
                        Default checked radio
                    </label>
                </div>
            </div> */}

        </>
    )
}
export default Question