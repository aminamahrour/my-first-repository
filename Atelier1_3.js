class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }


    afficher() {
        console.log(`Vecteur (${this.x}, ${this.y})`);
    }

    //addition de deux vecteurs
    static additionner(vecteur1, vecteur2) {
        return new Vecteur2D(vecteur1.x + vecteur2.x, vecteur1.y + vecteur2.y);
    }
}


// Définition de la classe Rectangle
class Rectangle {
    constructor(longueur = 1, largeur = 1) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }

    // Méthode d'affichage
    afficher() {
        console.log(`${this.nom} - Longueur: ${this.longueur}, Largeur: ${this.largeur}`);
    }

    // Méthode pour calculer la surface
    surface() {
        return this.longueur * this.largeur;
    }
}

// Définition de la classe Carré qui hérite de Rectangle
class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carré";
    }
}

// Définition de la classe Point
class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

// Définition de la classe Segment
class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
}

// Instanciation et affichage des Vecteur2D
let vecteur1 = new Vecteur2D();
let vecteur2 = new Vecteur2D(3, 4);
vecteur1.afficher();
vecteur2.afficher();

// Affichage de la somme des vecteurs
let somme = Vecteur2D.additionner(vecteur1, vecteur2);
console.log("Somme des vecteurs :");
somme.afficher();

// Instanciation et affichage des Rectangle et Carré
let rectangle = new Rectangle(5, 3);
let carre = new Carre(4);
console.log("Rectangle :");
rectangle.afficher();
console.log("Surface du rectangle :", rectangle.surface());
console.log("Carré :");
carre.afficher();
console.log("Surface du carré :", carre.surface());

// Instanciation de la classe Segment
let segment = new Segment(1, 1, 4, 5);
console.log("Segment :", segment);