import React from 'react'
import FilterButton from '../Components/FilterButton'

class ButtonContainer extends React.Component {

    buttons = () => {
        return this.props.categories.map(category => <FilterButton cat={category} buttonSelect={this.props.buttonSelect} />)
    }

    render() {
        return (
            <div className="categories">
                <h5>Filter By Button</h5>
                {this.buttons()}
            </div>
        )
    }
}

export default ButtonContainer