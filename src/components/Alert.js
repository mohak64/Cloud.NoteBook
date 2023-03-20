import React from "react"; //rfce

function Alert(props) {
   
  const capitalize = (word)=>{
    if(word==="danger"){
        word="error"
    }
    const lower = word.toLowerCase();
    let newText=lower.charAt(0).toUpperCase() + lower.slice(1);
    return newText;
  }
  return (
    <div style={{ height: "50px" }}>
      {/* agar props.alert null hai toh kuch ni milega vrna and ke baad wala milega!! */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
