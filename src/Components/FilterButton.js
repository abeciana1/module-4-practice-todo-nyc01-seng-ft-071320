import React from 'react'

class FilterButton extends React.Component {

    render() {
        return (
        <button onClick={this.props.buttonSelect}>{this.props.cat}</button>
        )
    }
}

export default FilterButton