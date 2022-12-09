import React from "react";

function AdminNavBar({ onChangePage }) {

  return (
    <nav>
      <button className="new-question" onClick={() => onChangePage("Form")}>New Question</button>
      <button className="view-question" onClick={() => onChangePage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
