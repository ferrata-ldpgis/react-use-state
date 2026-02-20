import { useState } from "react";

import languages from "@/data/languages";

export default function ComponenteExpress() {

	const [isOn, setIsOn] = useState(false);

	function toggleExpress() {
		setIsOn(!isOn);
	}

    // trova il linguaggio Express.js
	const expressLanguage = languages.find(lang => lang.title === "Express");

	return <div className="componente">

        <button onClick={toggleExpress}>
            {expressLanguage.title}
        </button>

		{/* mostra il testo solo se isOn è true */}
        {isOn && (
            <div>
                <p>{expressLanguage.description}</p>
            </div>
        )}

		

	</div>
}