import {react} from 'react';

const InputField = ({forType, type, children, name, onChange}) => {

  console.log(onChange);
  
  return (
    <>
      <label for={forType}>{children}</label>
      <input type={type} name={forType} onChange={onChange}/>
    </>
  )
}

export default InputField;
