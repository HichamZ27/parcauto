class Car {
  constructor(
    registration,
    color,
    weight,
    power,
    reservoirCapacity,
    numberOfSeats
  ) {
    this.registration = registration;
    this.color = color;
    this.weight = weight;
    this.power = power;
    this.reservoirCapacity = reservoirCapacity;
    this.fuelLitre = 5; // Niveau initial de carburant
    this.numberOfSeats = numberOfSeats;
    this.isAssured = false; // Propriété renommée pour éviter le conflit
    this.dashboardMessage = "Bonjour, bienvenue à bord!";
    alert(this.dashboardMessage); // Correction ici
  }

  // Propriétés (getters et setters)
  get assuranceStatus() {
    return this.isAssured;
  }

  set assuranceStatus(newAssure) {
    if (newAssure) {
      this.isAssured = newAssure;
      this.dashboardMessage = "Vous êtes assuré, vous pouvez prendre la route.";
    }
  }

  // Méthode exposée : repeindre la voiture
  toRepaint(newColor) {
    if (newColor === this.color) {
      return (
        "Merci pour ce rafraîchissement, votre voiture est déjà " +
        this.color +
        "."
      );
    } else {
      this.color = newColor;
      return `Votre voiture a été repeinte en ${this.color}.`;
    }
  }

  // Méthode exposée : Faire l'appoint d'essence
  putGas(quantity) {
    if (quantity + this.fuelLitre > this.reservoirCapacity) {
      return "La quantité dépasse la capacité du réservoir.";
    } else {
      this.fuelLitre += quantity;
      return (
        "Vous avez ajouté " +
        quantity +
        " litres de carburant. Niveau actuel : " +
        this.fuelLitre +
        " litres."
      );
    }
  }

  // Méthode exposée : Se déplacer
  gettingAround(distance, speed) {
    let consumption;
    if (speed < 50) {
      consumption = (10 / 100) * distance;
    } else if (speed <= 90) {
      consumption = (5 / 100) * distance;
    } else if (speed <= 130) {
      consumption = (8 / 100) * distance;
    } else {
      consumption = (12 / 100) * distance;
    }

    if (consumption <= this.fuelLitre) {
      this.fuelLitre -= consumption;
      return `Vous avez parcouru ${distance} km à ${speed} km/h. Consommation : ${consumption} litres. Carburant restant : ${this.fuelLitre} litres.`;
    } else {
      return `Vous avez consommé ${consumption} litres, mais vous n'avez pas assez de carburant.`;
    }
  }

  // Méthode exposée redéfinie toString()
  toString() {
    return (
      "Voiture immatriculée " +
      this.registration +
      ", avec une puissance de " +
      this.power +
      " et de couleur " +
      this.color +
      "."
    );
  }
}

// Exemple de test
let Car1 = new Car("JD-484-JD", "black", 1000, 70, 70, 5);
console.log(Car1.toString());
console.log(Car1.toRepaint("rouge"));
console.log(Car1.putGas(20));
console.log(Car1.gettingAround(100, 80));

// Récupérer l'élément avec l'id 'year' et y insérer l'année actuelle
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
