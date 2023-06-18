import React, { Fragment, useState } from 'react';
import './App.css';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownEditor/MarkdownPreview';
import { theme } from './components/MarkdownEditor/theme';
import './components/MarkdownEditor/lexical.css';

function App() {
  const [value, setValue] = useState<string>('');
  return (
    <Fragment>
      <MarkdownEditor value={value} onChange={(newValue : string) => { setValue(newValue); }} style={theme} textAlign="left" placeholder="" />
      <MarkdownPreview textAlign="left" value={value} />
    </Fragment>
  );
}

export default App;
