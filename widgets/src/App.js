import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
const items = [
    {
        title: 'What is React?',
        content: 'React is this'
    },
    {
        title: 'Who is React?',
        content: 'React is me'
    },
    {
        title: 'When is React?',
        content: 'React is now'
    }
]


export default () => {
    return (
        
        <div><Search /><Accordion items={items}/></div>
    );
};