import { useState } from "react";
import { AddTopics } from "../store/actions";
import { useDispatch } from "react-redux";

const Form = () => {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const dispatch = useDispatch();

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const keywordsArray = keywords.split(",").map((keyword) => keyword.trim());
    const data = {topic: topic, keywords: keywordsArray}
    dispatch(AddTopics(data))
    setTopic("");
    setKeywords("");
  };

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
            <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={handleTopicChange}
            />
            <input
            type="text"
            placeholder="Keywords (comma-separated)"
            value={keywords}
            onChange={handleKeywordsChange}
            />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
