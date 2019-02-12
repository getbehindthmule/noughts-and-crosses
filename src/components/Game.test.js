import React from "react";
import {mount} from "enzyme";
import Game from "./Game";
import Board from "./Board"


describe("Game", () => {
    let props;
    let mountedGame;

    const game = () => {
        if (!mountedGame) {
            mountedGame = mount(
                <Game {...props}/>
            );
        }
        return mountedGame;
    };

    beforeEach(() => {
        props = {
            onClick: undefined,
        }
        mountedGame = undefined;
    });

    it("game-info is always rendered", () => {
        const divs = game().find("div");


        expect(divs.find(".game-info").length).toBe(1);
    });

    it("game-board is always rendered", () => {
        const divs = game().find("div");


        expect(divs.find(".game-board").length).toBe(1);
    });

    it("initial display of 'status'", () => {
        const statusMsg = game().find({children: 'Next player: X'})


        expect(statusMsg.length).toBe(1);
    });

    it("the rendered board receives props", () => {
        const board = game().find(Board);

        expect(Object.keys(board.props()).length).toBe(2);
    });

    describe("state transitions", () => {

        it("buttons updated", () => {
            const gameBoard = game().find('.game-board');
            const buttons = gameBoard.find('button');
            const firstButton = buttons.at(0);
            const secondButton = buttons.at(1);
            const thirdButton = buttons.at(2);
            expect(firstButton.text()).toBe("");
            expect(secondButton.text()).toBe("");
            expect(thirdButton.text()).toBe("");

            firstButton.simulate('click');
            expect(firstButton.text()).toBe("X");

            secondButton.simulate('click');
            expect(secondButton.text()).toBe("O");

            thirdButton.simulate('click');
            expect(thirdButton.text()).toBe("X");
        });

        it("game history list has one entry at start", () => {
            const gameInfo = game().find('.game-info');

            const historyButtons = gameInfo.find('button');

            expect(historyButtons.length).toBe(1);
            expect(historyButtons.at(0).text()).toBe("Go to game start");
        });

        it("game history list has two entries after first click", () => {
            const gameBoard = game().find('.game-board');
            const buttons = gameBoard.find('button');
            const firstButton = buttons.at(0);

            firstButton.simulate('click');

            const gameInfo = game().find('.game-info');
            const historyButtons = gameInfo.find('button');

            expect(historyButtons.length).toBe(2);
            expect(historyButtons.at(1).text()).toBe("Move (1,1), Go to move #1");
        });

        it("game history list has updated over game clicks to a win", () => {
            const gameBoard = game().find('.game-board');
            const buttons = gameBoard.find('button');
            const firstButton = buttons.at(0);
            const secondButton = buttons.at(1);
            const thirdButton = buttons.at(2);
            const fourthButton = buttons.at(3);
            const fifthButton = buttons.at(4);
            const sixthButton = buttons.at(5);
            const seventhButton = buttons.at(6);

            expect(game().find('.game-info').children().find('div').text()).toBe('Next player: X');
            expect(game().find('.game-info').find('button').length).toBe(1);
            expect(game().find('.game-info').find('button').at(0).text()).toBe('Go to game start');

            firstButton.simulate('click');

            expect(game().find('.game-info').children().find('div').text()).toBe('Next player: O');
            expect(game().find('.game-info').find('button').length).toBe(2);
            expect(game().find('.game-info').find('button').at(1).text()).toBe('Move (1,1), Go to move #1');

            secondButton.simulate('click');

            expect(game().find('.game-info').children().find('div').text()).toBe('Next player: X');
            expect(game().find('.game-info').find('button').length).toBe(3);
            expect(game().find('.game-info').find('button').at(2).text()).toBe('Move (1,2), Go to move #2');

            thirdButton.simulate('click');

            expect(game().find('.game-info').children().find('div').text()).toBe('Next player: O');
            expect(game().find('.game-info').find('button').length).toBe(4);
            expect(game().find('.game-info').find('button').at(3).text()).toBe('Move (1,3), Go to move #3');

            fourthButton.simulate('click');

            expect(game().find('.game-info').children().find('div').text()).toBe('Next player: X');
            expect(game().find('.game-info').find('button').length).toBe(5);
            expect(game().find('.game-info').find('button').at(4).text()).toBe('Move (2,1), Go to move #4');

            fifthButton.simulate('click');

            expect(game().find('.game-info').children().find('div').text()).toBe('Next player: O');
            expect(game().find('.game-info').find('button').length).toBe(6);
            expect(game().find('.game-info').find('button').at(5).text()).toBe('Move (2,2), Go to move #5');

            sixthButton.simulate('click');

            expect(game().find('.game-info').children().find('div').text()).toBe('Next player: X');
            expect(game().find('.game-info').find('button').length).toBe(7);
            expect(game().find('.game-info').find('button').at(6).text()).toBe('Move (2,3), Go to move #6');

            seventhButton.simulate('click');

            expect(game().find('.game-info').children().find('div').text()).toBe('Winner: X');
            expect(game().find('.game-info').find('button').length).toBe(8);
            expect(game().find('.game-info').find('button').at(7).text()).toBe('Move (3,1), Go to move #7');

            const gameInfo = game().find('.game-info');
            const historyButtons = gameInfo.find('button');

            expect(historyButtons.length).toBe(8);
            expect(historyButtons.at(1).text()).toBe("Move (1,1), Go to move #1");
        });


        it("game history list has updated over game clicks to a draw", () => {
            const gameBoard = game().find('.game-board');
            const buttons = gameBoard.find('button');
            const firstButton = buttons.at(0);
            const secondButton = buttons.at(1);
            const thirdButton = buttons.at(2);
            const fourthButton = buttons.at(3);
            const fifthButton = buttons.at(4);
            const sixthButton = buttons.at(5);
            const seventhButton = buttons.at(6);
            const eighthButton = buttons.at(7);
            const ninthButton = buttons.at(8);

            firstButton.simulate('click');
            secondButton.simulate('click');
            fifthButton.simulate('click');
            thirdButton.simulate('click');
            sixthButton.simulate('click');
            fourthButton.simulate('click');
            seventhButton.simulate('click');
            ninthButton.simulate('click');
            eighthButton.simulate('click');


            expect(game().find('.game-info').children().find('div').text()).toBe('Draw!');
        });

        it("once you have a winner, no other button is updated on click", () => {
            const gameBoard = game().find('.game-board');
            const buttons = gameBoard.find('button');
            const firstButton = buttons.at(0);
            const secondButton = buttons.at(1);
            const thirdButton = buttons.at(2);
            const fourthButton = buttons.at(3);
            const fifthButton = buttons.at(4);
            const sixthButton = buttons.at(5);
            const seventhButton = buttons.at(6);
            const eighthButton = buttons.at(7);

            firstButton.simulate('click');
            secondButton.simulate('click');
            thirdButton.simulate('click');
            fourthButton.simulate('click');
            fifthButton.simulate('click');
            sixthButton.simulate('click');
            seventhButton.simulate('click');

            expect(game().find('.game-info').find('button').length).toBe(8);

            eighthButton.simulate('click');

            expect(game().find('.game-info').find('button').length).toBe(8);
        });

        it("undoing history works successfully", () => {
            const gameBoard = game().find('.game-board');
            const buttons = gameBoard.find('button');
            const firstButton = buttons.at(0);
            const secondButton = buttons.at(1);
            const thirdButton = buttons.at(2);
            const fourthButton = buttons.at(3);
            const fifthButton = buttons.at(4);
            const sixthButton = buttons.at(5);
            const seventhButton = buttons.at(6);
            const ninthButton = buttons.at(8);

            firstButton.simulate('click');
            secondButton.simulate('click');
            fifthButton.simulate('click');
            thirdButton.simulate('click');
            sixthButton.simulate('click');
            fourthButton.simulate('click');
            seventhButton.simulate('click');
            ninthButton.simulate('click');

            expect(game().find('.game-info').find('button').length).toBe(9);

            game().find('.game-info').find('button').at(1).simulate('click');

            expect(game().find('.game-info').find('button').length).toBe(9);

            fifthButton.simulate('click');

            expect(game().find('.game-info').find('button').length).toBe(3);
            expect(game().find('.game-info').find('button').at(2).text()).toBe('Move (2,2), Go to move #2');

        });
    });



});