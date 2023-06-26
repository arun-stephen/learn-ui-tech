import React, { useState, useEffect } from 'react';

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes") //API call to fetch the data
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, []);

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
           [name]: value
        }));
    }
    
    function getMemeImage(event) {
        event.preventDefault();
        //const memesArray = allMemeImages;
        const rndNo = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[rndNo].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    return (
        <main>
            <form className='form'>
                <input 
                    className='form--input' 
                    type="text" 
                    placeholder='Top Text' 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} />
                <input 
                    className='form--input' 
                    type="text" 
                    placeholder='Bottom Text'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} />
                <button 
                    className='form--button' 
                    onClick={getMemeImage}>
                        Get meme image from here
                </button>
            </form>
            <div className='meme--container'>
                <img className='meme--image' src={meme.randomImage} alt='meme'/>
                <h3 className='top--text'>{meme.topText}</h3>
                <h3 className='bottom--text'>{meme.bottomText}</h3>
            </div>
        </main>
    );
}