import { CFormSelect } from "@coreui/react";

//Button
//Default values for Button component
Button.defaultProps = {
  className: "genericClass",
  width: 250,
  height: 50,

  fontSize: 25,
  buttonText: "No placeholder",
  color: "rgb(240, 248, 255)",

  backgroundColor: "rgb(34, 166, 240)",
};
//Button component definition
export function Button(props) {
  const buttonStyle = {
    //Button size
    width: props.width,
    height: props.height,
    zIndex: 2,

    //Button
    backgroundColor: props.backgroundColor,
    borderRadius: 100,
    borderStyle: "none",

    //Button text
    fontWeight: "550",
    textAlign: "center",
    fontSize: props.fontSize,
    color: props.color,
  };

  return (
    <button className={props.className} style={buttonStyle}>
      {props.buttonText}
    </button>
  );
}
/*
Invoke the Button component as :
<Button className='CLASSNAME' width={250} height={50} backgroundColor='rgb(34, 166, 240)'
    fontSize={25} color='rgb(255, 255, 255)' placeHolder='PLACEHOLDER TEXT' />
(or)
<Button className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/

//InputBox
//Default values for InputBox component
InputBox.defaultProps = {
  className: "genericClass",

  //TextBox size
  width: 250,
  height: 40,
  zIndex: 2,

  //Input field
  backgroundColor: "rgb(0, 0, 0)",

  //Placeholder and Input
  fontSize: 15,
  color: "rgb(255 , 255, 255)",
  placeHolder: "No placeholder",
};
//InputBox component definition
export function InputBox(props) {
  const inputBoxStyle = {
    //TextBox size
    width: props.width,
    height: props.height,
    zIndex: 2,

    //Input field
    borderRadius: props.borderRadius,
    borderStyle: "none",
    backgroundColor: props.backgroundColor,

    //PlaceHolder and Input
    color: props.color,
    fontSize: props.fontSize,
    paddingLeft: 15,

    //Input type
    autoComplete: "on",
  };

  return (
    <input
      required
      type={props.type}
      className={props.className}
      style={inputBoxStyle}
      placeholder={props.placeHolder}
      autoComplete={props.autoComplete}></input>
  );
}
/*
Invoke the InputBox component as :
<InputBox className='CLASSNAME' width = {250} height = {40} backgroundColor = 'rgb(0, 0, 0)'
    fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'PLACEHOLDER TEXT' autoComplete = 'off' />
(or)
<InputBox className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/

//PasswordBOX
//Default values for PasswordBox component
PasswordBox.defaultProps = {
  className: "genericClass",

  //TextBox size
  width: 250,
  height: 40,

  //Input field
  backgroundColor: "rgb(0, 0, 0)",

  //Placeholder and Input
  fontSize: 15,
  color: "rgb(255 , 255, 255)",
  placeHolder: "No placeholder",
};
//PasswordBox component definition
export function PasswordBox(props) {
  const passwordBoxStyle = {
    //TextBox size
    width: props.width,
    height: props.height,
    zIndex: 2,

    //Input field
    borderRadius: 100,
    borderStyle: "none",
    backgroundColor: props.backgroundColor,

    //PlaceHolder and Input
    color: props.color,
    fontSize: props.fontSize,
    paddingLeft: 15,

    WebkitTextSecurity: "disc",
  };

  return (
    <input
      className={props.className}
      type="password"
      style={passwordBoxStyle}
      placeholder={props.placeHolder}
      required></input>
  );
}
/*
Invoke the PasswordBox component as :
<PasswordBox className='CLASSNAME' width = {250} height = {40} backgroundColor = 'rgb(0, 0, 0)'
    fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'PLACEHOLDER TEXT' autoComplete = 'off' />
(or)
<PasswordBox className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/

//TextBox
//Default values for TextBox component
TextBox.defaultProps = {
  className: "genericClass",
  resize: "none",
  rows: 10,
  cols: 20,
  padding: 15,

  fontSize: 15,
  color: "rgb(255, 255 ,255)",
  backgroundColor: "rgb(0, 0, 0)",
  placeHolder: "No placeHolder",
};
//TextBox component definition
export function TextBox(props) {
  const textBoxStyle = {
    borderRadius: props.borderRadius,
    borderStyle: "none",
    resize: props.resize,
    padding: props.padding,

    fontSize: props.fontSize,
    color: props.color,
    backgroundColor: props.backgroundColor,
  };

  return (
    <textarea
      className={props.className}
      style={textBoxStyle}
      rows={props.rows}
      cols={props.cols}
      placeholder={props.placeHolder}
    />
  );
}
/*
Invoke the TextBox component as :
<TextBox className='CLASSNAME' rows = {10} cols = {50} backgroundColor = 'rgb(0, 0, 0)'
    fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'PLACEHOLDER TEXT' />
(or)
<TextBox className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/

//DropDown
//Default values for DropDown component
DropDown.defaultProps = {
  className: "genericClass",
  label: "genericLabel",
  width: 250,
  height: 40,

  fontSize: 17.5,
  color: "rgb(255, 255, 255)",

  backgroundColor: "rgb(0, 0, 0)",

  options: [
    "Placeholder",
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three", value: "3" },
  ],
};
//DropDown component definition
export function DropDown(props) {
  const dropDownStyle = {
    width: props.width,
    height: props.height,
    zIndex: 2,
    paddingLeft: 15,

    fontSize: props.fontSize,
    color: props.color,

    borderStyle: "none",
    borderRadius: 100,
    backgroundColor: props.backgroundColor,
  };

  return (
    <CFormSelect
      className={props.className}
      aria-label={props.label}
      style={dropDownStyle}
      options={props.options}
    />
  );
}
/*
Invoke the DropDown component as :
<DropDown className = 'CLASSNAME' label = 'LABEL' width = {250} 
    height = {50} fontSize = {15} color = 'rgb(255, 255, 255)' 
    backgroundColor = 'rgb(0, 0, 0)' placeHolder = 'PLACEHOLDER TEXT'
    options =  {[
        'Placeholder',
        { label: 'One', value: '1'},
        { label: 'Two', value: '2' },
        { label: 'Three', value: '3'}
    ]} />
(or)
<DropDown className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/
