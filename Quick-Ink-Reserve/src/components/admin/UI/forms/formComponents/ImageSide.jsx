import React from "react";

function ImageSide({ url }) {
    const divStyle = {
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="hidden lg:block m-auto bg-white w-full md:w-1/2 h-full rounded-md" style={divStyle}></div>
    );
}

export default ImageSide;
