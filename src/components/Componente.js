import { useState } from "react";

 export default function Componente(props) {

	const [isOn, setIsOn] = useState(false);

	function toggleComponente() {
		setIsOn(!isOn);
	}

    // trova il linguaggio HTML
	// const htmlLanguage = languages.find(lang => lang.title === "HTML");

	
	return <div className="componente">

        <button onClick={toggleComponente}>
            {props.title}
        </button>

        {isOn && (
            <div>
                <p>{props.description}</p>
            </div>
        )}

	</div>
}



