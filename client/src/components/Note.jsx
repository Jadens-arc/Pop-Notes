function Note(props) {
  return (
    <a href={props.link} className="container">
      <p>{props.content}</p>
    </a>
  )
}

export default Note;