import { Link, useLoaderData, Form } from "react-router-dom";

// Assuming the data structure for a mood activity has 'activity', 'mood', and 'date'
const EntryDetails = () => {
  const journalEntry = useLoaderData();

  // Styles
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{journalEntry.activities}</h1>
      <h2>{journalEntry.mood}</h2>
      <p>{new Date(journalEntry.date).toLocaleDateString()}</p>
      <div style={{ textAlign: "center" }}>
        <h2>Edit Mood Activity</h2>
        <Form action={`/update/${journalEntry.id}`} method="post">
          <input
            type="text"
            name="activity"
            placeholder="What did you do today?"
            defaultValue={journalEntry.activities}
          />
          <input
            type="text"
            name="mood"
            placeholder="What was your mood?"
            defaultValue={journalEntry.mood}
          />
          <input
            type="date"
            name="date"
            defaultValue={journalEntry.date.split('T')[0]} 
          />
          <input
            type="text"
            name="photo"
            placeholder="Upload a photo(url)"
            defaultValue={journalEntry.photo} 
          />
          <button>Update Entry</button>
        </Form>
        <Form action={`/delete/${journalEntry.id}`} method="post">
          <button>Delete</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default EntryDetails;
