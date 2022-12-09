import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions, onDeleteQuestion }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(questions => {
      setQuestions(questions)
    })
  }, [])



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem question={question} key={question.id} onDeleteQuestion={onDeleteQuestion} />
      ))}</ul>
    </section>
  );
}

export default QuestionList;
