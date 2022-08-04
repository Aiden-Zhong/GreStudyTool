import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteNote } from "../features/words/noteSlice"

const WordItem = ({id, English_word, Chinese_word }) => {
  const [text, setText] = useState('')
  const [displayTranslate, setDisplayTranslate] = useState(false)

  const dispatch = useDispatch()

  const display = e => {
    e.preventDefault()
    setDisplayTranslate(!displayTranslate)
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault()
      setDisplayTranslate(!displayTranslate)
    }
  }

  return (
    <div className="goal">
      <h2>{English_word}</h2>
      <button onClick={() => dispatch(deleteNote(id))} className="close">X</button>
      <div className="form-group">
        <label htmlFor="text">Enter definition:</label>
        <input type="text" name='text' id='text' value={text}
          onFocus={(event) => {
            event.target.setAttribute('autocomplete', 'off');
          }}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress} />
        <button className="btn" onClick={display}>View definition</button>
        {displayTranslate ? <><h2>{Chinese_word}</h2>
          <button className="btn">Add to note</button></> : null}
      </div>
    </div>
  )
}

export default WordItem