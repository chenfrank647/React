import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';

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

const showAccordion = () => {
    if(window.location.pathname ==='/'){
        return <Accordion items={items}/>;
    }
}
const showSearch = () => {
    if(window.location.pathname ==='/search'){
        return <Search />;
    }
}
const showDropdown = (selected, setSelected) => {
    
    if(window.location.pathname ==='/dropdown'){
        return <Dropdown selected = {selected} onSelectedChange = {setSelected} options={options} prompt = 'Select a color'/>;
    }
}
const showTranslate = () => {
    if(window.location.pathname ==='/translate'){
        return <Translate/>;
    }
}

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        
        <div><Header/>{showAccordion()}{showSearch()}{showDropdown(selected, setSelected)}{showTranslate()}</div>
    );
};

export default App;