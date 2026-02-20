import { useState } from "react";

import languages from "@/data/languages";

export default function ComponenteHTML() {

	const [isOn, setIsOn] = useState(false);

	function toggleHTML() {
		setIsOn(!isOn);
	}

    // trova il linguaggio HTML
	const htmlLanguage = languages.find(lang => lang.title === "HTML");

	return <div className="componente">

        <button onClick={toggleHTML}>
            {htmlLanguage.title}
        </button>

		{/* mostra il testo solo se isOn è true */}
        {isOn && (
            <div>
                <p>{htmlLanguage.description}</p>
            </div>
        )}

		

	</div>
}