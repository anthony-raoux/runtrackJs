function jsonValueKey(jsonString, key) {
    const jsonObject = JSON.parse(jsonString);

    if (key in jsonObject) {

        return jsonObject[key];
    } else {
        
        return "Clé non trouvée";
    }
}

   const jsonString = '{"city": "Marseille"}';
   const key = 'city';
   const value = jsonValueKey(jsonString, key);
   document.getElementById('result').textContent = `La valeur associée à la clé "${key}" est "${value}".`;