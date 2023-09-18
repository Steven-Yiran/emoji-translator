import Translator from "./Translator";

function App() {
  return (
    <>
      <h1>Emoji Translator</h1>
      <div className="translator">
        <Translator />
      </div>
      <div className="footer">
        Inspired by{" "}
        <a
          href="https://lilianweng.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          Lilian Weng
        </a>{" "}
        Powered by{" "}
        <a href="https://openai.com/api/" target="_blank" rel="noreferrer">
          OpenAI
        </a>{" "}
        © 2023{" "}
        <a
          href="https://github.com/Steven-Yiran"
          target="_blank"
          rel="noreferrer"
        >
          Yiran Shi
        </a>
        . All rights reserved.
      </div>
    </>
  );
}

export default App;
