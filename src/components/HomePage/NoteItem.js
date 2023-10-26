// components/NoteItem.js
//这个组件展示单个笔记的信息。
import React from 'react';

function NoteItem({ note }) {
    return (
        <div className="note-item">
            <div className="note-content">
                {note.content}
            </div>
            <div className="note-date">
                {note.date}
            </div>
        </div>
    );
}

export default NoteItem;
