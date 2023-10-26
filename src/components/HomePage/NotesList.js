// components/NotesList.js
//这个组件展示所有的笔记。
import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes }) {
    return (
        <div className="notes-list">
            {notes.map(note => <NoteItem key={note.id} note={note} />)}
        </div>
    );
}

export default NotesList;
