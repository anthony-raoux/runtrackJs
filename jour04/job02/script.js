function jsonValueKey(jsonString, key) {
    const jsonObject = JSON.parse(jsonString);
    if (key in jsonObject) {
        return jsonObject[key];
    } else {
        return "Clé non trouvée";
    }
}

const jsonString = '{"name": "LaPlateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
const value = jsonValueKey(jsonString, 'city');
console.log(value);
