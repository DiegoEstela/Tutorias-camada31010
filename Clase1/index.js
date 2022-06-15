class User {
  constructor(name, surName, pet) {
    this.name = name;
    this.Surname = surName;
    this.pets = [pet];
    this.books = [];
  }

  getFullName() {
    return `User: ${this.name}, ${this.Surname}`;
  }

  addPet(pet) {
    this.pets.push(pet);
  }
  countPets() {
    return this.pets.length;
  }
  Addbook(bookName, bookAutor) {
    this.books.push({ bookName, bookAutor });
  }
  getBookNames() {
    const getBook = this.books.map(function (get) {
      return get.bookName;
    });
    return getBook;
  }
}

const user = new User("Diego", "Estela", "mono");
user.Addbook("rayuela", "Juñio Cortazar");
console.log(user);
