import React, { Component } from 'react';
import ImageViewer from './image-viewer';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  body, input {
    font-weight: normal;
    font-family: Roboto, sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <ImageViewer />
      </div>
    );
  }
}

export default App;