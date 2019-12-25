import Intake from "./dto/Intake";

export function getIntakes(): Array<Intake> {
    return [
        new Intake(new Date(), 1),
        new Intake(new Date(), 2)
    ];
}
