import React, { useState, useEffect } from 'react';
import './App.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [output, setOutput] = useState(false);


  const handleLockToggle = () => {
    setIsLocked(!isLocked);
  };

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };


  useEffect(() => {
    const waitTime = setTimeout(() => {
      setOutput(`
<html>
 <head>
   <style>${css}</style>
  </head>
  <body>${html}</body>
  <script>${js}</script>
</html>
`)
    }, 250)
    return () => clearTimeout(waitTime)
  }, [html, css, js]);

  return (
    <div className="App">
      <div className="code-editor">
        <div className="code-toolbar">
          <CopyToClipboard text={html} onCopy={handleCopy}>
            <button className="code-button">Copy HTML</button>
          </CopyToClipboard>
          <CopyToClipboard text={css} onCopy={handleCopy}>
            <button className="code-button">Copy CSS</button>
          </CopyToClipboard>
          <CopyToClipboard text={js} onCopy={handleCopy}>
            <button className="code-button">Copy JS</button>
          </CopyToClipboard>
          <button className="code-button">Save</button>
          <button className="code-button" onClick={handleLockToggle}>
            {isLocked ? 'Unlock' : 'Lock'}
          </button>
        </div>
        <div className='pane top-pane'>
          <Editor
            code={html}
            onCodeChange={setHtml}
            readOnly={isLocked}
            label="HTML Editor"
          />
          <Editor
            code={css}
            onCodeChange={setCss}
            readOnly={isLocked}
            label="CSS Editor"
          />
          <Editor
            code={js}
            onCodeChange={setJs}
            readOnly={isLocked}
            label="JS Editor"
          />
        </div>
      </div>
      <div className='bottom-section'>
        <div className="copy-notification">{isCopied && 'Copied to clipboard!'}</div>
        <h2>Output</h2>
        <div className='output'>
          <iframe
            id="output-iframe"
            title="Output"
            srcDoc={output}
            // sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

//         
