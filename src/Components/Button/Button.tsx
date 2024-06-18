import { SCAppButton } from "./Button.style"

type TOAppButton = {
buttonText:string,
buttonType:"submit" | "button" 
isDisabled ?:boolean, 
buttonID:string,
className:string,
onClick?: () => void;
}

const AppButton = ({buttonText, buttonType, isDisabled, buttonID, className}:TOAppButton) => {
    return(
        <SCAppButton disabled={isDisabled} id={buttonID} type={buttonType} className={className} >{buttonText}  </SCAppButton>
    );
};
export default AppButton;


