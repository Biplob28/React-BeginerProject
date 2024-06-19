import { IoAdd, IoRemove } from "react-icons/io5";
import "./FAQ.css";
import { useState } from "react";

function FAQ() {

    const[showInfo, setShowInfo]=useState(null);

    function toggleInfo(id){
        setShowInfo(showInfo === id ? null : id);
    }
  const questions = [
    {
      id: 1,
      title: "Is this good Product?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit vitae cum at laboriosam exercitationem nisi dolorum eaque beatae quisquam.",
    },
    {
      id: 2,
      title: "How much does it cost?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit vitae cum at laboriosam exercitationem nisi dolorum eaque beatae quisquam.",
    },
    {
      id: 3,
      title: "How can i get it?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit vitae cum at laboriosam exercitationem nisi dolorum eaque beatae quisquam.",
    },
  ];

  return (
    <div className="Main-section">
      <h1>Project-2: FAQ </h1>
      <div className="submain-section">
        <h2>Frequently asked questions.</h2>
        <div className="questions" >
                  {questions.map((question) => (
         <div>
            <p className="askQuestions" onClick={()=>toggleInfo(question.id)} key={question.id} >{question.title}
              <span> {showInfo === question.id ? <IoRemove />: <IoAdd />}</span>
            </p>
            {showInfo === question.id && <div className="showinfo">{question.info}</div> }
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
