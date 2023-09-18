import { useState } from "react";
import "./sytles/Translator.css"

let SERVER: string = process.env.SERVER_ADDRESS || "http://localhost:5000";

async function fetchTranslation(query: string): Promise<string> {
    const response = await fetch(SERVER + "/translate", {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({ query }),
    });
    const responseJson = await response.json();
    if (responseJson.error !== null) {
        console.log("Fetch error:", responseJson.error);
        return "";
    } else {
        return responseJson.result;
    }
}

function Translator() {
    const [sourceText, setSourceText] = useState<string>("");
    const [translatedText, setTranslatedText] = useState<string>("");

    const handleTranslate = (): void => {
        if (sourceText.length > 0) {
            setTranslatedText("");
            fetchTranslation(sourceText).then((data) => {
                setTranslatedText(data);
            });
        }
    };

    return (
        <div className="translator-container">
            <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Enter text to translate..."
            />
            <button onClick={handleTranslate}>Translate</button>
            <textarea
                value={translatedText}
                readOnly
            />
        </div>
    );
}

export default Translator;