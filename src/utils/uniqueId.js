const generateUniqueID = () => {
    const currentDate = new Date();
    const uniqueID = currentDate.getTime();
    return uniqueID;
}

export { generateUniqueID }
