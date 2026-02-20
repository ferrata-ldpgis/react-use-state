import { useState } from "react";

import languages from "@/data/languages";

export default function ComponenteJavaScript() {

	const [isOn, setIsOn] = useState(false);

	function toggleJavaScript() {
		setIsOn(!isOn);
	}

    // trova il linguaggio JavaScript
	const javascriptLanguage = languages.find(lang => lang.title === "JavaScript");

	return <div className="componente">

        <button onClick={toggleJavaScript}>
            {javascriptLanguage.title}
        </button>

		{/* mostra il testo solo se isOn è true */}
        {isOn && (
            <div>
                <p>{javascriptLanguage.description}</p>
            </div>
        )}

		

	</div>
}