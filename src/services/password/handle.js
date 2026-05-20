async function handle() {
    let characters = [];
    let password = "";

    const passwordlength = process.env.PASSWORD_LENGTH;

    if(process.env.UPPERCASE_LETTTERS == "true"){
        characters.push(... "ABCDEFGHIJKLMNOPQRSTUVXWYZ");
    }

        if(process.env.LOWERCASE_LETTERS == "true"){
        characters.push(... "abcdefghjiklmnopqrstuvxwyz");
    }

        if(process.env.NUMBERS == "true"){
        characters.push(... "0123456789");
    }

        if(process.env.SPECIAL_CHARACTERS == "true"){
        characters.push(... "/*-+@*%#");
    }

    for(let i=0; i< passwordlength; i++){
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index];
    }

    return password;

}

export default handle