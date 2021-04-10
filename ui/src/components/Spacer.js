import React from "react";

const Spacer = (props) => {
    const { style={} } = props;
    return (
        <div style={{ ...style, margin: style.margin ? style.margin : "1rem"  }}>
            {props.children}
        </div>
    );
}

export default Spacer;