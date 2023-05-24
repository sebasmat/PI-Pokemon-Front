export default function validations(data) {
    const regexLetters = /^[a-zA-Z]+$/;
    const regexURLImage = /(https?:\/\/.*\.(?:png|jpg))/i;
    const regexNumbers = /^\d+$/;
    const errors = {};
    if (!data.name) {
        errors.name = "the name cannot be empty";
    } else if (data.name.length > 19) {
        errors.name = "the name cannot have more than 20 characters";
    } else if (!regexLetters.test(data.name)) {
        errors.name = "the name must have only letters";
    } else {
        errors.name = "";
    }

    if (!data.image) {
        errors.image = "the image cannot be empty";
    } else if (!regexURLImage.test(data.image)) {
        errors.image = "incorrect image URL";
    } else if (data.image.length > 254) {
        errors.image = "the image URL is too long";
    } else {
        errors.image = "";
    }

    if (!data.life) {
        errors.life = "the life cannot be empty";
    } else if (data.life > 100 || data.life < 0) {
        errors.life = "life cannot be less than 0 and greater than 100";
    } else if (!regexNumbers.test(data.life)) {
        errors.life = "only numbers";
    } else {
        errors.life = "";
    }

    if (!data.attack) {
        errors.attack = "the attack cannot be empty";
    } else if (data.attack > 100 || data.attack < 0) {
        errors.attack = "attack cannot be less than 0 and greater than 100";
    } else if (!regexNumbers.test(data.attack)) {
        errors.attack = "only numbers";
    } else {
        errors.attack = "";
    }
    if (!data.defense) {
        errors.defense = "the defense cannot be empty";
    } else if (data.defense> 100 || data.defense < 0) {
        errors.defense = "defense cannot be less than 0 and greater than 100";
    } else if (!regexNumbers.test(data.defense)) {
        errors.defense = "only numbers";
    } else {
        errors.defense = "";
    }
    if (data.speed > 100 || data.speed < 0) {
        errors.speed = "speed cannot be less than 0 and greater than 100";
    } else if (!regexNumbers.test(data.speed)) {
        errors.speed = "only numbers";
    } else {
        errors.speed = "";
    }
    if (data.height > 100 || data.height < 0) {
        errors.height = "height cannot be less than 0 and greater than 100";
    } else if (!regexNumbers.test(data.height)) {
        errors.height = "only numbers";
    } else {
        errors.height = "";
    }
    if (data.weight > 100 || data.weight < 0) {
        errors.weight = "weight cannot be less than 0 and greater than 100";
    } else if (!regexNumbers.test(data.weight)) {
        errors.weight = "only numbers";
    } else {
        errors.weight = "";
    }
    if (!data.type1) {
        errors.type1 = "the type 1 cannot be empty";
    } else if (data.type1 === data.type2) {
        errors.type1=  "the type 1 cannot be equal to type 2";
    } else {
       errors.type1 = "" ;
    }
    if (!data.type2) {
        errors.type2 = "the type 2 cannot be empty";
    } else if (data.type2 === data.type1) {
        errors.type2 = "the type 2 cannot be equal to type 1";
    } else {
       errors.type2 = "";
    }

    return errors;

} 