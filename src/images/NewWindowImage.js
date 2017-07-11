import React from "react";
import SvgImage from "./SvgImage";

function NewWindowImage(props) {
    return (
        <SvgImage width="24" height="24" viewBox="0 0 24 24" {...props} svgInternals={`
            <path d="M12 5l2.5 2.5L11 11c-1.2 1.2-1.2 2.8 0 4l5.5-5.5L19 12V5h-7zm5 12H8c-.6 0-1-.4-1-1V7h3L8 5H5v11c0 1.7 1.3 3 3 3h11v-3l-2-2v3z"/>
        `}/>
    );
}

export default NewWindowImage;
