import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-github';
import "../style/editor.css"

const Editor = ({ code, onCodeChange, readOnly, label }) => {
  return (
    <div className="editor">
      <div className="editor-label">{label}</div>
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onCodeChange}
        name="js-editor"
        value={code}
        readOnly={readOnly}
        width="100%"
        height="200px"
        setOptions={{ tabSize: 2 }}
      />
    </div>
  );
};

export default Editor;
