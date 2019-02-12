import React from "react";
import { mount } from "enzyme";
import Square from "./Square";


describe ("Square", () => {
    let props;
    let mountedSquare;

    const square = () => {
        if (!mountedSquare) {
            mountedSquare = mount(
                <Square {...props}/>
            );
        }
        return mountedSquare;
    };

    beforeEach(() => {
        props = {
          value: undefined,
          onClick: undefined,
        };
        mountedSquare = undefined;
    });

    it("always renders a button", () => {
       const btn = square().find("button");
       expect(btn.length).toBe(1);
    });

    describe("when value is specified", () => {
       beforeEach(() => {
           props.value = "some value";
       }) ;
    });

    it("it passes the value to the button", () => {
        const btn = square().find("button");
        expect(btn.props().value).toEqual(props.value);
    }) ;

    describe("when onClick defined", () => {
        beforeEach(() => {
            props.onClick = jest.fn();
        })

        it("sets the Square's onClick prop to the same value as onClick", () => {
            const testSquare = square();
            expect(testSquare.props().onClick).toBe(props.onClick);
        });

    });

    describe("when onClick is undefined", () => {
        beforeEach(() => {
            props.onClick = undefined;
        })

        it("sets the Square's onClick prop to undefined", () => {
            const testSquare = square();
            expect(testSquare.props().onClick).not.toBeDefined();
        });

    });

});