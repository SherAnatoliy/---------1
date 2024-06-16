// import { SCAppInput  } from "./AppInput.style";
// interface TOAppInput extends React.InputHTMLAttributes<HTMLInputElement> {
//     inputType:| "password"|  "text" ;
//     inputPlaceholder:string
//     isError?: boolean;
//     errorText?:string;
//     isRequired:boolean;
// }

// const AppInput = ({inputType, 
//     inputPlaceholder,
//     isError,
//     isRequired, 
//     ...props
// }:TOAppInput) => {
//     return (
//         <>
//         <SCAppInput 
//         required ={isRequired}
//         type={inputType}
//          placeholder={ inputPlaceholder} 
//          {...props}
//          $isError={isError|| false}/>
//          </> 
//     );


// };

// export default AppInput;

import React from 'react';
import { SCAppInput } from './AppInput.style';

interface TOAppInput extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType: "password" | "text"| "id";
  inputPlaceholder: string;
  isError?: boolean;
  errorText?: string;
  isRequired: boolean;
}

const AppInput = React.forwardRef<HTMLInputElement, TOAppInput>(({
  inputType,
  inputPlaceholder,
  isError,
  isRequired,
  ...props
}, ref) => {
  return (
    <SCAppInput
      ref={ref} // Передача ref дальше
      required={isRequired}
      type={inputType}
      placeholder={inputPlaceholder}
      {...props}
      $isError={isError || false}
    />
  );
});

export default AppInput;


