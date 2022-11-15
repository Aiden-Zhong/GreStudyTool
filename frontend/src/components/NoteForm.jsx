import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../features/words/noteSlice'

function NoteForm() {
    const [EN_text, setEN_text] = useState('')
    const [CN_text, setCN_text] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createNote({ EN_text, CN_text }))
        setEN_text('')
        setCN_text('')
    }
    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">English</label>
                    <input type="text" name='text' id='text' value={EN_text}
                        onFocus={(event) => {
                            event.target.setAttribute('autocomplete', 'off');
                        }}
                        onChange={(e) => setEN_text(e.target.value)} />

                    <label htmlFor="text">中文</label>
                    <input type="text" name='text' id='text' value={CN_text}
                        onFocus={(event) => {
                            event.target.setAttribute('autocomplete', 'off');
                        }}
                        onChange={(e) => setCN_text(e.target.value)} />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type='submit'>Add Words</button>
                </div>
            </form>
        </section>
    )
}

export default NoteForm