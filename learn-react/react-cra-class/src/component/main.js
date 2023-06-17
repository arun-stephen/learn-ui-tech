import React, { Component } from "react";
import Card from "./card";

class Main extends Component{

    render() {
        const cardItems = this.props.data.map((item) => <Card item={item}/>);

        return (
            <div>
                <div>
                    <p className="content--title"><span>Adidas</span> (AG stylized as adidas since 1949)is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike.It is the holding company for the Adidas Group, which consists 8.33% stake of the football club Bayern München,and Runtastic, an Austrian fitness technology company. Adidas's revenue for 2018 was listed at €21.915 billion.
                    The company was started by Adolf Dassler in his mother's house; he was joined by his elder brother Rudolf in 1924 under the name Gebrüder Dassler Schuhfabrik ("Dassler Brothers Shoe Factory"). Dassler assisted in the development of spiked running shoes (spikes) for multiple athletic events. To enhance the quality of spiked athletic footwear, he transitioned from a previous model of heavy metal spikes to utilising canvas and rubber. Dassler persuaded U.S. sprinter Jesse Owens to use his handmade spikes at the 1936 Summer Olympics. In 1949, following a breakdown in the relationship between the brothers, Adolf created Adidas and Rudolf established Puma, which became Adidas's business rival.
                    The three stripes are Adidas's identity mark, having been used on the company's clothing and shoe designs as a marketing aid. The branding, which Adidas bought in 1952 from Finnish sports company Karhu Sports for the equivalent of €1,600 and two bottles of whiskey, became so successful that Dassler described Adidas as "The three stripes company".</p>
                </div>
                <div className="card--container">
                    {cardItems}
                </div>
            </div>
        );
    }
}
export default Main;