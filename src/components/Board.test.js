import React from "react";
import { mount } from "enzyme";
import Board from "./Board";


describe ("Board", () => {

    let props;
    let mountedBoard;

    const board = () => {
        if (!mountedBoard) {
            mountedBoard = mount(
                <Board {...props}/>
            );
        }
        return mountedBoard;
    };

    beforeEach( () => {
       props = {
           squares: Array(9).fill(undefined),
           onClick: undefined,
       }
       mountedBoard = undefined;
    });

    describe ("has fixed square collection", () => {
        beforeEach( () => {
            props = {
                squares: [1,2,3,4,5,6,7,8,9],
            }
        });

        it("always renders 9 Squares", () => {
            const squares = board().find("Square");
            expect(squares.length).toBe(9);
        });

        it("squares have value 1..9", () => {
            const expectedSquareValues = [1,2,3,4,5,6,7,8,9];
            const actualSquares = board().find("Square");

            let actualSquareValues = actualSquares.map(
                entry => entry.props().value
            );
            expect(actualSquareValues).toEqual(expect.arrayContaining(expectedSquareValues));
        });
    });

    describe("when onClick defined", () => {
        beforeEach(() => {
            props.onClick = jest.fn();
        })

        it("sets the Board's onClick prop to the same value as onClick", () => {
            const actualBoard = board();
            expect(actualBoard.props().onClick).toBe(props.onClick);
        });

    });

    describe("when onClick is undefined", () => {
        beforeEach(() => {
            props.onClick = undefined;
        })

        it("sets the Square's onClick prop to undefined", () => {
            const actualBoard = board();
            expect(actualBoard.props().onClick).not.toBeDefined();
        });

    });

    it("there are 3 board-rows rendered", () => {
        const divs = board().find("div");


        expect(divs.find(".board-row").length).toBe(3);
    });
});