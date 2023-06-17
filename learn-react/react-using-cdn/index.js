
const Header = () => {
    return (
        <nav className="header">
            <img className="header--logo" src="./assets/images/adidas-logo.png" alt="Adidas Logo"/>
            <h2 className="header-title">Adidas Products</h2>
            <ul className="header--menu">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
            </ul>
        </nav>
    );
};

const Main = (props) => {
    return (
        <div>
            <div>
                <p className="content--title"><span>Adidas</span> (AG stylized as adidas since 1949)is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike.It is the holding company for the Adidas Group, which consists 8.33% stake of the football club Bayern München,and Runtastic, an Austrian fitness technology company. Adidas's revenue for 2018 was listed at €21.915 billion.
                The company was started by Adolf Dassler in his mother's house; he was joined by his elder brother Rudolf in 1924 under the name Gebrüder Dassler Schuhfabrik ("Dassler Brothers Shoe Factory"). Dassler assisted in the development of spiked running shoes (spikes) for multiple athletic events. To enhance the quality of spiked athletic footwear, he transitioned from a previous model of heavy metal spikes to utilising canvas and rubber. Dassler persuaded U.S. sprinter Jesse Owens to use his handmade spikes at the 1936 Summer Olympics. In 1949, following a breakdown in the relationship between the brothers, Adolf created Adidas and Rudolf established Puma, which became Adidas's business rival.
                The three stripes are Adidas's identity mark, having been used on the company's clothing and shoe designs as a marketing aid. The branding, which Adidas bought in 1952 from Finnish sports company Karhu Sports for the equivalent of €1,600 and two bottles of whiskey, became so successful that Dassler described Adidas as "The three stripes company".</p>
            </div>
            <div className="card--container">
                {props.data.map(x => <Card item={x}/>)}
            </div>
        </div>
    );
}

const CardData = [
    { img:"./assets/images/adidas-shoe.png", name:"Adidas Shoe", price:50 },
    { img:"./assets/images/adidas-football.png", name:"Adidas Football", price:350.75 },
    { img:"./assets/images/adidas_perfume.png", name:"Adidas Perfume", price:150 },
    { img:"./assets/images/adidas-jackets.png", name:"Adidas Jackets", price:200.50 },
    { img:"./assets/images/adidas-bags.png", name:"Adidas Bags", price:170.0 },
    { img:"./assets/images/adidas-jacket-mens-black.png", name:"Adidas Jacket", price:50 },
    { img:"./assets/images/adidas-hockey-stick.png", name:"Adidas Hockey Stick", price:50 },
    { img:"./assets/images/adidas-tracks.png", name:"Adidas Track Suits", price:50 }]

const Card = (props) => {
    return(
        <div className="card">
            <img className="card--img" src={props.item.img} alt={props.item.name}/>
            <div className="card--details">
                <h5 className="card--name">{props.item.name}</h5>
                <h5 className="card--price">${props.item.price}</h5>
            </div>
        </div>
    )
};

const Footer = () => {
    return(
        <footer className="footer">
            &copy; Copyright 2023 Adidas.com. All Rights Reserved.
        </footer>
    );
}

const Page = () => {
    return (
        <div>
            <Header />
            <Main data={CardData} />
            <Footer />
        </div>
    );
};

ReactDOM.render(<Page />, document.getElementById("root"));

