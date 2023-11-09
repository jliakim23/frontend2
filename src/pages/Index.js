import Journal from "../components/Journal";
import { useLoaderData, Form } from "react-router-dom";

const Index = () => {
  const journalEntrys = useLoaderData();
  const moodChoices = [
    'Happy', 'Excited', 'Sad', 'Angry', 'Irritated', 'Anxious', 'Stressed'
  ];
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Create Mood Entry</h2>
        <Form action="/create" method="post">
          <input type="text" name="activities" placeholder="What did you do today?"/>
          <select name="mood" id="mood">
        {moodChoices.map((mood, index) => (
            <option key={index} value={mood}>{mood}</option>
        ))}
    </select>
          <input type="date" name="date" placeholder="Date of the activity"/>
          <input type="text" name="photo" placeholder="Upload a photo(url)"/>
          <button>Create New Entry</button>
        </Form>
      </div>
      {journalEntrys.map((post) => (
        <Journal post={post} key={post.id} />
      ))}
    </>
  );
};

export default Index;
