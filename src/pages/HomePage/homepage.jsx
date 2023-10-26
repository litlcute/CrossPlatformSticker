// src/pages/HomePage.jsx
import React from 'react';
import UserHeader from '../../components/HomePage/UserHeader';
import SearchBar from '../../components/HomePage/SearchBar';
import NotesList from '../../components/HomePage/NotesList';

export default function HomePage() {
    const notes = [
        { id: 1, content: "Today is Monday...", date: "2:30pm 1/1/2023" },
        // ...其他笔记数据
    ];

    return (
        <div className="home-page">
            <UserHeader />
            <SearchBar />
            <NotesList notes={notes} />
        </div>
    );
}


