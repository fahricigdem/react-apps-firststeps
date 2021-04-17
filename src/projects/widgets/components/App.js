import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown"
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Green",
        value: "green",
    },
    {
        label: "A Shade of Blue",
        value: "blue",
    },
];



export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div style={{ minHeight: '60vh' }}>
            <Header />
            <Route path="/react-apps-firststeps">
                <Accordion items={items} />
            </Route>
            <Route path="/react-apps-firststeps/list">
                <Search />
            </Route>
            <Route path="/react-apps-firststeps/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/react-apps-firststeps/translate">
                <Translate />
            </Route>
        </div>
    );
};
