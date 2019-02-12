import calculateWinner from "./Util"


describe ("Calculate winner", () => {
    let coll ;

    beforeEach( () => {
        coll = [1,2,3,4,5,6,7,8,9];
    });

    it("no matches on default test data", () => {
        const actualResult = calculateWinner(coll);
        expect(actualResult).toBeNull();
    });

    describe("row tests", () => {

        describe("first row combinations", () => {

            it("first row match", () => {
                const expectedWinner = 1;
                coll[0] = 1;
                coll[1] = 1;
                coll[2] = 1;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBe(expectedWinner)
            });

            it("2-char match, last char missing", () => {
                coll[0] = 1;
                coll[1] = 1;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });

            it("2-char match, middle char missing", () => {
                coll[0] = 1;
                coll[2] = 1;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });

            it("2-char match, first char missing", () => {
                coll[0] = 9;
                coll[1] = 1;
                coll[2] = 1;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });

        });

        describe("second row tests", () => {

            it("second row match", () => {
                const expectedWinner = 2;
                coll[3] = 2;
                coll[4] = 2;
                coll[5] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBe(expectedWinner)
            });

            it("second row mismatch", () => {
                coll[3] = 2;
                coll[4] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });
        });

        describe("third row tests", () => {

            it("third row match", () => {
                const expectedWinner = 2;
                coll[6] = 2;
                coll[7] = 2;
                coll[8] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBe(expectedWinner)
            });

            it("third row mismatch", () => {
                coll[6] = 2;
                coll[7] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });
        });

        describe("first column tests", () => {

            it("first column match", () => {
                const expectedWinner = 2;
                coll[0] = 2;
                coll[3] = 2;
                coll[6] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBe(expectedWinner)
            });

            it("first column mismatch", () => {
                coll[0] = 2;
                coll[3] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });
        });

        describe("second column tests", () => {

            it("second column match", () => {
                const expectedWinner = 2;
                coll[1] = 2;
                coll[4] = 2;
                coll[7] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBe(expectedWinner)
            });

            it("second column mismatch", () => {
                coll[1] = 2;
                coll[4] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });
        });

        describe("third column tests", () => {

            it("third column match", () => {
                const expectedWinner = 2;
                coll[2] = 2;
                coll[5] = 2;
                coll[8] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBe(expectedWinner)
            });

            it("third column mismatch", () => {
                coll[2] = 2;
                coll[5] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });
        });


        describe("downward diagonal tests", () => {

            it("downward diagonal match", () => {
                const expectedWinner = 2;
                coll[0] = 2;
                coll[4] = 2;
                coll[8] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBe(expectedWinner)
            });

            it("downward diagonal mismatch", () => {
                coll[0] = 2;
                coll[4] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });
        });

        describe("upward diagonal tests", () => {

            it("upward diagonal match", () => {
                const expectedWinner = 2;
                coll[2] = 2;
                coll[4] = 2;
                coll[6] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBe(expectedWinner)
            });

            it("upward diagonal mismatch", () => {
                coll[2] = 2;
                coll[4] = 2;

                const actualResult = calculateWinner(coll);
                expect(actualResult).toBeNull();
            });
        });


    });
});