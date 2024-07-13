export const initialLetterUppercase = (fullname) => {

    const partName = fullname.split(' ');
    partName[0] = partName[0][0].toUpperCase() + partName[0].slice(1);
    partName[1] = partName[1][0].toUpperCase() + partName[1].slice(1);
    
    return partName.join(' ');

}