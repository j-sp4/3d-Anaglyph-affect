export declare class Coordinates {
    private coordinateX;
    private coordinateY;
    private threshHold;
    constructor(topNumber: number, bottomNumber: number, leftNumber: number, rightNumber: number);
    readonly getCoordinateX: number;
    readonly getCoordinateY: number;
    toString(): string;
    areSimilar(other: Coordinates): boolean;
}
