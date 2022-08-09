import e from "cors"
import { useState, useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { deleteNote } from "../features/words/noteSlice"
import { createNote } from "../features/words/noteSlice"

const WordItem = ({ id, English_word, Chinese_word }) => {
  const [text, setText] = useState('')
  const [inNote, setInNote] = useState(false)
  const [displayTranslate, setDisplayTranslate] = useState(false)
  const [show, setShow] = useState(false)
  const ref = useRef(null)

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

  const addToNote = (EN_text, CN_text) => {
    dispatch(createNote({ EN_text, CN_text }))
    setInNote(true)
  }


  const handleScroll = e => {

    if (!ref.current) return

    const triggerBottom = window.innerHeight / 5 * 4
    const goalTop = ref.current.getBoundingClientRect().top
    if (goalTop < triggerBottom) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);



  return (
    <div className={`goal${show ? " show" : ""}`} ref={ref}>
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
          <button className="btn" onClick={() => addToNote(English_word, Chinese_word)}>{`${inNote ? 'In Notebook': 'Add to Notebook'}`}</button></> : null}
      </div>
    </div>
  )
}

export default WordItem