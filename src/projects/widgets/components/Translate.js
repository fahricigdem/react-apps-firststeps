import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'Türkce',
    value: 'tr',
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Deutsch',
    value: 'de',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState({ label: 'Deutsch', value: 'de' }); //options[6]
  const [text, setText] = useState('starting is half to finish!');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Type a Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label={'Select a Language'}
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <div className="ui fluid">
        <div class="inline field">
          <span className="ui  large header">Output </span>
          <div class="ui left pointing label">
            Works when your browser is at http://localhost:3000
          </div>
        </div>
      </div>
      <br />
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
