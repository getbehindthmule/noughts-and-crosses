import React  from 'react';
import Square from "./Square"
import PropTypes from 'prop-types';

export default class Board extends React.Component {

    renderSquare(i, row, col) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i, row, col)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0, 1, 1)}
                    {this.renderSquare(1, 1, 2)}
                    {this.renderSquare(2, 1, 3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3, 2, 1)}
                    {this.renderSquare(4, 2, 2)}
                    {this.renderSquare(5, 2, 3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6, 3, 1)}
                    {this.renderSquare(7, 3, 2)}
                    {this.renderSquare(8, 3, 3)}
                </div>
            </div>
        );
    }
}


Board.propTypes = {
    squares: PropTypes.array,
    onClick: PropTypes.func,
} ;