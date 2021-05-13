import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
    {
        label: "The color red",
        value: 'red'
    },
    {
        label: "The color green",
        value: 'green'
    },
    {
        label: "The color blue",
        value: 'blue'
    }
];

export default () => {
    return (
        
        <div><Dropdown options={options}/><Search /><Accordion items={items}/></div>
    );
};