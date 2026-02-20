import { useState } from "react";

import languages from "@/data/languages";

export default function ComponenteCSS() {

	const [isOn, setIsOn] = useState(false);

	function toggleCSS() {
		setIsOn(!isOn);
	}

    // trova il linguaggio CSS
	const cssLanguage = languages.find(lang => lang.title === "CSS");

	return <div className="componente">

        <button onClick={toggleCSS}>
            {cssLanguage.title}
        </button>

		{/* mostra il testo solo se isOn è true */}
        {isOn && (
            <div>
                <p>{cssLanguage.description}</p>
            </div>
        )}

		

	</div>
}