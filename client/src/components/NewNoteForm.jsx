function NewNoteForm() {
  return (
    <div className="container">
      <label htmlFor="noteContent">Say Something...</label>
      <textarea className="input" rows="1" name="noteContent" id="noteContent" placeholder="huH"></textarea>
      <label htmlFor="noteLink">Link?</label>
      <input className="input" type="text" name="noteLink" />
      <button className="postBtn">Post!</button>
    </div>
  );
}

export default NewNoteForm;