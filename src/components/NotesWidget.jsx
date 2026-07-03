import { useState, useEffect } from 'react';

export default function NotesWidget() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("studentNotes");
    return saved ? JSON.parse(saved) : [];
  });
  const [noteInput, setNoteInput] = useState("");

  useEffect(() => {
    localStorage.setItem("studentNotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const text = noteInput.trim();
    if (!text) return;
    setNotes([...notes, { id: Date.now(), text: text }]);
    setNoteInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="bg-white dark:bg-[#4b193c] border-[3px] border-[#632753] dark:border-white rounded-[15px] p-[25px] w-full md:w-[350px] shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
      <h3 className="text-[#632753] dark:text-white font-['Black_Ops_One'] mt-0 text-[1.8rem]">
        Sticky Notes
      </h3>
      <div className="flex flex-col mb-[20px]">
        <textarea
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          rows="3"
          placeholder="Type a short note..."
          className="w-full p-[10px] border-2 border-[#e1cddc] rounded-lg font-['Orbitron'] text-base outline-none resize-y box-border dark:text-black"
        ></textarea>
        <button
          onClick={addNote}
          className="w-full mt-[5px] bg-[#632753] text-white border-none py-[10px] px-[15px] rounded-lg cursor-pointer font-['Black_Ops_One'] active:scale-95 transition-transform"
        >
          PIN
        </button>
      </div>
      <div id="notesContainer" className="flex flex-col gap-[15px]">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-[#fdfbc7] dark:bg-[#783764] p-[15px] rounded-lg shadow-[2px_4px_8px_rgba(0,0,0,0.1)] text-left text-[#4b193c] dark:text-white border-l-[5px] border-[#f1c40f] dark:border-[#e1cddc]"
          >
            <p className="m-0 mb-[10px] text-base break-words whitespace-pre-line">
              {note.text}
            </p>
            <button
              onClick={() => deleteNote(note.id)}
              className="delete-note bg-[#e74c3c] text-white border-none rounded-[5px] py-[5px] px-[10px] cursor-pointer font-['Orbitron'] text-[0.8rem]"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}