import { Component } from "react";
import Card from "./card";

export default class Main extends Component {

    render() {
        const cardContainer = this.props.data.map(
            (item) => <Card key={item.id} item={item} />
            );
            
        return (
            <main className="card--container">
                {cardContainer}
            </main>
        );
    }
}