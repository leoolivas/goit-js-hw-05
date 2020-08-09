class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item) {
        console.log(item);
        this.items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
