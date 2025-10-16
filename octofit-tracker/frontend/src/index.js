
// Dynamically set REACT_APP_CODESPACE_NAME from window.location for codespace compatibility
const match = window.location.hostname.match(/^([^-]+)-8000\.app\.github\.dev$/);
if (match) {
  window.REACT_APP_CODESPACE_NAME = match[1];
  console.log('Detected Codespace Name:', match[1]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
