import { manufacture } from "./index.js";

test('should be ["tren", "oso"] for gifts=["tren", "oso", "pelota"] and materials="tronesa"', () => {
    const exp= ["tren", "oso"];
    const testData1 = ["tren", "oso", "pelota"];
    const testData2 = "tronesa";
    const result = manufacture(testData1, testData2);
    expect(result).toEqual(exp);
});

test('should be ["puzzle"] for gifts=["juego", "puzzle"] and materials="jlepuz"', () => {
    const exp= ["puzzle"];
    const testData1 = ["juego", "puzzle"];
    const testData2 = "jlepuz";
    const result = manufacture(testData1, testData2);
    expect(result).toEqual(exp);
});

test('should be [] for gifts=["libro", "ps5"] and materials="psli"', () => {
    const exp= [];
    const testData1 = ["libro", "ps5"];
    const testData2 = "psli";
    const result = manufacture(testData1, testData2);
    expect(result).toEqual(exp);
});

