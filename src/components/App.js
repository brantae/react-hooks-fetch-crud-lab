import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function onAddQuestions(newQuestions) {
    setQuestions([...questions, newQuestions])
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm 
        question={questions} 
        setPage={setPage}
        onAddQuestions={onAddQuestions} /> : 
          <QuestionList questions={questions} setQuestions={setQuestions} onDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
