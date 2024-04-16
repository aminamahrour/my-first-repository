//Q1
class Voiture {
    constructor(model, marque, annee, type, carburant) {


        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;


    }
}


//_______________________________________________


//Q2
let voitures = [
    new Voiture("i10", "Hyundai", 2018, "Essence"),
    new Voiture("Tucson", "Hyundai", 2020, "Hybride"),
    new Voiture("Fiesta", "Ford", 2019, "Diesel"),
    new Voiture("Mustang", "Ford", 2017, "Essence")
];


//_____________________________________________________
//Q3
class Hyundai extends Voiture {
    constructor(model, marque, annee, carburant, serie, hybride) {
        super(model, marque, annee, carburant);
        this.serie = serie;
        this.hybride = hybride;
    }

    alarmer() {
        console.log("Alarme activée!");
    }
}


class Ford extends Voiture {
    constructor(model, marque, année, typeCarburant, options) {
        super(model, marque, année, typeCarburant);
        this.options = options;
    }
}


//___________________________________________________
//Q4
voitures.sort((a, b) => a.annee - b.annee);


voitures.forEach(voiture => {
    console.log(`${voiture.marque} ${voiture.model} (${voiture.annee}) - ${voiture.carburant}`);
});