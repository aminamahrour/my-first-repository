//Q1
class Etudiant {
    constructor(nom, prenom, age, cne) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.cne = cne;
    }

    //Q2
    // Méthode étudier pour l'objet Etudiant
    etudier() {
        console.log(`${this.nom} ${this.prenom} étudie.`);
    }
}
class Professeur {
    constructor(nom, age, cin) {
        this.nom = nom;
        this.age = age;
        this.cin = cin;
    }


    //Q2
    // Méthode enseigner pour l'objet Professeur
    enseigner() {
        console.log(`${this.nom} enseigne.`);
    }

}

//__________________________________________


// Création d'une liste d'étudiants
let étudiants = [
    new Etudiant("Smith", "John", 20, "123456"),
    new Etudiant("Doe", "Jane", 22, "789012"),
    new Etudiant("Brown", "Alice", 21, "345678")
];


//__________________________________________
//Q2
// Ajout de la méthode étudier à l'objet Etudiant
étudiants.forEach(étudiant => {
    étudiant.étudier = function() {
        console.log(`${this.nom} ${this.prenom} étudie.`);
    };
});

// Création d'un professeur
let professeur = new Professeur("Johnson", 35, "987654");

// Ajout de la méthode enseigner à l'objet Professeur
professeur.enseigner = function() {
    console.log(`${this.nom} enseigne.`);
};


//___________________________________

//Q3
etudiants.sort((a, b) => {
    if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
    }
    return a.nom.localeCompare(b.nom);
});


etudiants.forEach(etudiant => {
    console.log(`${etudiant.nom} ${etudiant.prenom} - ${etudiant.cne}`);
});