import React from "react";

class ListaBurgers extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            burgers: ['Combo-Gamer', 'Bondiolita-King', 'King-Vegetal']
        };
    }
        render() {
            const Burgers = this.state.burgers.map(c =>(
                <h5 className="Combos">{ c }</h5>
            ));
            return (
                <div>{ Burgers }</div>
            );
    }
}

export default ListaBurgers;
