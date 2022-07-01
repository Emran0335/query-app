import { useEffect, useState } from "react";
import data from "./components/data";
import Question from "./components/Question";

function App() {
	const [questions, setQuestions] = useState(data);

 useEffect(() => {
  setQuestions(()=> questions)
 }, [questions]);


  return (
	<main>
		<div className="container">
			<h3>qustions and answers about login</h3>
			<section className="info">
				  {questions.map((question) => (
					  <Question key={question.id} {...question} />
				))}
			</section>
	  </div>
	  </main>
  );
}

export default App;
