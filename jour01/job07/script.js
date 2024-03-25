function jourTravaille(date) {
    const joursFeries2024 = ["2024-01-01", "2024-04-01", "2024-05-01", "2024-05-08", "2024-05-09", "2024-04-20", "2024-07-14", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"];

    const weekendjours = [6, 0]; 

    const année = date.getFullYear();
    const mois = date.getMonth() + 1; 
    const jour = date.getDate();
    const jourdelasemaine = date.getDay();

    const dateformaté = `${jour}/${mois}/${année}`;

    const isoDate = `${année}-${mois.toString().padStart(2, '0')}-${jour.toString().padStart(2, '0')}`;

    if (joursFeries2024.includes(isoDate)) {
        console.log(`Le ${dateformaté} est un jour férié.`);
    } else if (weekendjours.includes(jourdelasemaine)) {
        console.log(`Non, ${dateformaté} est un week-end.`);
    } else {
        console.log(`Oui, ${dateformaté} est un jour travaillé.`);
    }
}

const date1 = new Date(2024, 0, 1); 
const date2 = new Date(2024, 2, 2); 
const date3 = new Date(2024, 2, 4); 
const date4 = new Date(2024, 6, 14); 
const date5 = new Date(2024, 9, 2); 
const date6 = new Date(2024, 2, 4);

jourTravaille(date1); 
jourTravaille(date2); 
jourTravaille(date3); 
jourTravaille(date4); 
jourTravaille(date5); 
jourTravaille(date6); 