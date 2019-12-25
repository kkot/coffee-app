import Beverage from "./dto/Beverage";

const beverages = [
    new Beverage(1, "kawa instant", 70),
    new Beverage(2, "herbata czarna ", 42)
];

const notFound = new Beverage(0, "not found", 0);

export function getBeverageForId(id: Number): Beverage {
    return beverages.find(b => b.id === id) ?? notFound;
}
