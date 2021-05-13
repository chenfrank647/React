import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
    const [selected, setSelected] = useState(options[0]);

    return (
        
        <div><Translate/><Dropdown selected = {selected} onSelectedChange = {setSelected} options={options} prompt = 'Select a color'/><Search /><Accordion items={items}/></div>
    );
};