import { useEffect, useState } from "react";
import "./QuoteGenerator.css";
import axios from "axios"

function QuoteGenerator() {
    const Url = "https://api.quotable.io/random";
const[quote, setQuote] = useState("");
const[author, setAuthor]= useState("");


    const fetchQuote  = async()=>{
 
        try {
            
        const response =await axios.get(Url);
        const data = await response.data
        console.log(data);
        setQuote(data.content);
        setAuthor(data.author);


            
        } catch (error) {
            console.log("you got error",error)
        }

        
        
    }
    useEffect(()=>{
        fetchQuote();

    },[])
  return (
    <div className="main-section">
      <h2>Project 3: Quote Generator</h2>
      <div className="quote-section">
        <div className="quotee">
          <button onClick={fetchQuote}>New Quote</button>
          <p className="quote">{quote}</p>
          <span className="author">- {author}</span>
        </div>
      </div>
    </div>
  );
}
export default QuoteGenerator;
