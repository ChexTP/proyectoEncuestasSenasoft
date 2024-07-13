export const getInitialLeterName = (name) => {
    const separeText = name.split(" ");
    const firstNameLetter = separeText[0].split("")[0].toUpperCase();
    const lastNameLetter = separeText[separeText.length -1 ].split("")[0].toUpperCase();
    const initial = `${firstNameLetter}${lastNameLetter}`;

    return initial;
}