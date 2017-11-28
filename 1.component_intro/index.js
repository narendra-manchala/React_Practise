import React from "react"
import ReactDOM from "react-dom"

/**
 * component as a class
 */


/*class IngredientsList extends React.Component {

    renderListItem(ingredient, i) {
        return React.createElement("li", { key: i }, ingredient)
    }

    render() {
        return React.createElement("ul", {className: "ingredients"},
            this.props.items.map(this.renderListItem)
        )
    }

}*/

/**
 * Component as a stateless function
 */

/*const IngredientsList = ({items}) =>

    React.createElement("ul", {className:"ingredients"},
        items.map((ingredient, i) =>
            React.createElement("li", {key: i}, ingredient)
        )
    )




const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]

ReactDOM.render(
    React.createElement(IngredientsList, {items}, null),
    document.getElementById('container')
)*/


/**
 *factories example
 */

const { render } = ReactDOM;

const IngredientsList = ({ list }) =>
    React.createElement('ul', null,
        list.map((ingredient, i) =>
            React.createElement('li', {key: i}, ingredient)
        )
    )

const Ingredients = React.createFactory(IngredientsList)

const list = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]

render(
    Ingredients({list}),
    document.getElementById('container')
)