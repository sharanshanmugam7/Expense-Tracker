/* 
CHANGELOG
v1.4.1
    - Added to CHANGELOG and comments to match v1.4

v1.4
    - Added events support for all components
        - 'onClick' for Button component
        - 'onChange' for InputBox, PasswordBox, TextBox, DropDown components
        - Refer the respective component's sample invoke comment

    - Major overhaul of DropDown (now SelectMenu) component
        - DropDown component renamed to SelectMenu
        - Refer sample invoke comment for specifics

    - Removed 'required' attribute of PasswordBox
        - Removed to avoid issues with routing

v1.3
    - Button component cursor changes on hover

v1.2.1
    - InputBox now has modifiable input type with default as 'text'
    - Button placeHolder now works
*/

/* 
#FunctionCall for events like 'onClick', 'onChange' can be :
    
    onClick={() => alert("Function called")}
    
    (or)
    
    function handleClick(event){
        alert("Function called");
    }

    onClick={handleClick}
*/

//Button
//Default values for Button component
Button.defaultProps = {
    className : 'genericClass',
    width : 250,
    height : 50,
    
    fontSize : 25,
    placeHolder : 'No placeholder',
    color : 'rgb(240, 248, 255)',
    
    backgroundColor : 'rgb(34, 166, 240)',   
}
//Button component definition
export function Button(props) 
{
    const buttonStyle = {
        //Button size
        width : props.width,
        height : props.height,
        zIndex : 2,
        
        //Button
        cursor : 'pointer',
        backgroundColor : props.backgroundColor,
        borderRadius : 100,
        borderStyle : 'none',

        //Button text
        fontWeight : '550',
        textAlign : 'center',
        fontSize : props.fontSize,
        color : props.color,
    }

    return(
        <button className={props.className}  style={buttonStyle} onClick={props.onClick}>{props.placeHolder}</button>
    )
}
/*
Invoke the Button component as :
<Button className='CLASSNAME' width={250} height={50} backgroundColor='rgb(34, 166, 240)'
    fontSize={20} color='rgb(255, 255, 255)' placeHolder='PLACEHOLDER TEXT' onClick={#FunctionCall}/>
(or)
<Button className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/


//InputBox
//Default values for InputBox component
InputBox.defaultProps = {
    className : 'genericClass',
    type : 'text',

    //TextBox size
    width : 250,
    height : 40,
    zIndex : 2,

    //Input field
    backgroundColor : 'rgb(0, 0, 0)',

    //Placeholder and Input
    fontSize : 15,
    color : 'rgb(255 , 255, 255)',
    placeHolder : 'No placeholder',
}
//InputBox component definition
export function InputBox(props)
{
    const inputBoxStyle = {
        //TextBox size
        width : props.width,
        height : props.height,
        zIndex : 2,
        
        //Input field
        borderRadius : 100,
        borderStyle : 'none',
        backgroundColor : props.backgroundColor,
        
        //PlaceHolder and Input
        color : props.color,
        fontSize : props.fontSize,
        paddingLeft : 15,

        //Input type
        autoComplete : 'on',
    }
    
    return (
        <input className={props.className} type={props.type} style={inputBoxStyle} placeholder={props.placeHolder} 
            autoComplete={props.autoComplete} onChange={props.onChange}></input>
        )
}
/*
Invoke the InputBox component as :
<InputBox className='CLASSNAME' width = {250} height = {40} backgroundColor = 'rgb(0, 0, 0)'
    fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'PLACEHOLDER TEXT' 
    autoComplete = 'off' onChange={#FunctionCall}/>
(or)
<InputBox type='text' className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/


//PasswordBOX
//Default values for PasswordBox component
PasswordBox.defaultProps = {
    className : 'genericClass',
    type : 'password',
    //TextBox size
    width : 250,
    height : 40,

    //Input field
    backgroundColor : 'rgb(0, 0, 0)',

    //Placeholder and Input
    fontSize : 15,
    color : 'rgb(255 , 255, 255)',
    placeHolder : 'No placeholder'
}
//PasswordBox component definition
export function PasswordBox(props) {
    const passwordBoxStyle = {
        //TextBox size
        width : props.width,
        height : props.height,
        zIndex : 2,
        
        //Input field
        borderRadius : 100,
        borderStyle : 'none',
        backgroundColor : props.backgroundColor,
        
        //PlaceHolder and Input
        color : props.color,
        fontSize : props.fontSize,
        paddingLeft : 15,

        WebkitTextSecurity : 'disc',
    }
    
    return (
        <input className={props.className} type={props.type} style={passwordBoxStyle} 
            placeholder={props.placeHolder} onChange={props.onChange}></input>
        )
}
/*
Invoke the PasswordBox component as :
<PasswordBox className='CLASSNAME' width = {250} height = {40} backgroundColor = 'rgb(0, 0, 0)'
    fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'PLACEHOLDER TEXT' 
    autoComplete = 'off' onChange={#FunctionCall}/>
(or)
<PasswordBox className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/


//TextBox
//Default values for TextBox component
TextBox.defaultProps = {
    className : 'genericClass',
    resize : 'none',
    rows : 10,
    cols : 20,
    padding : 15,

    fontSize : 15,
    color : 'rgb(255, 255 ,255)',
    backgroundColor : 'rgb(0, 0, 0)',
    placeHolder : 'No placeHolder',
}
//TextBox component definition
export function TextBox(props) {
    const textBoxStyle = {
      
        borderRadius : 25,
        borderStyle : 'none',
        resize: props.resize,
        padding : props.padding,
        
        fontSize : props.fontSize,
        color: props.color,
        backgroundColor: props.backgroundColor,
    };
    
    return (
      <textarea className={props.className} style={textBoxStyle} rows={props.rows} cols={props.cols} 
        placeholder={props.placeHolder} onChange={props.onChange}/>
    );
}
/*
Invoke the TextBox component as :
<TextBox className='CLASSNAME' rows = {10} cols = {50} backgroundColor = 'rgb(0, 0, 0)'
    fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'PLACEHOLDER TEXT' onChange={#FunctionCall}/>
(or)
<TextBox className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/


//SelectMenu
//Default values for SelectMenu component
SelectMenu.defaultProps = {
    className : 'genericClass',
    label : 'genericLabel',
    width : 250,
    height : 40,
    
    fontSize : 17.5,
    color : 'rgb(255, 255, 255)',
    
    backgroundColor : 'rgb(0, 0, 0)',

    options : [
        { label: 'PlaceHolder', value: 'placeholder', disabled: true},
        { label: 'One', value: '1'},
        { label: 'Two', value: '2' },
        { label: 'Three', value: '3'}
    ],
}
//SelectMenu component definition
export function SelectMenu(props)
{
    const SelectMenuStyle = {
        width : props.width,
        height : props.height,
        zIndex : 2,
        paddingLeft : 15,
        
        fontSize : props.fontSize,
        color : props.color,
        
        borderStyle : 'none',
        borderRadius : 100,
        backgroundColor : props.backgroundColor,
    }
    
    return(
        <select className={props.className} style={SelectMenuStyle} defaultValue={props.options.placeholder} 
            onChange={props.onChange}>
            {
                props.options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))
            }
        </select>
        )
}
/*
Invoke the SelectMenu component as :
<SelectMenu className = 'CLASSNAME' width = {250} 
    height = {50} fontSize = {15} color = 'rgb(255, 255, 255)' 
    backgroundColor = 'rgb(0, 0, 0)' placeHolder = 'PLACEHOLDER TEXT'
    onChange={#FunctionCall}
    options =  {[
        { label: 'One', value: '1'},
        { label: 'Two', value: '2' },
        { label: 'Three', value: '3'}
    ]} />
(or)
<SelectMenu className='CLASSNAME' placeHolder = 'PLACEHOLDER TEXT' />
*/
