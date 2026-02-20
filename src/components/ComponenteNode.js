import { useState } from "react";

import languages from "@/data/languages";

export default function ComponenteNode() {

	const [isOn, setIsOn] = useState(false);

	function toggleNode() {
		setIsOn(!isOn);
	}

    // trova il linguaggio Node.js
	const nodeLanguage = languages.find(lang => lang.title === "Node.js");

	return <div className="componente">

        <button onClick={toggleNode}>
            {nodeLanguage.title}
        </button>

		{/* mostra il testo solo se isOn è true */}
        {isOn && (
            <div>
                <p>{nodeLanguage.description}</p>
            </div>
        )}

		

	</div>
}