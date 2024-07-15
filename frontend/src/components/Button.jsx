
const Button = ({background, text, textColor, onclick}) => {
    return (
        <button
            onClick={onclick}
            className={`px-5 font-semibold py-3 ${background} ${textColor} transition-all hover:-translate-y-0.5`}
        >
            {text}
        </button>
    );
}

export default Button;
