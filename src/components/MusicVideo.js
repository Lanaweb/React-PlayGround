import React from 'react';

class MusicVideo extends React.Component {
    state = {
        videoIndex: null,
    }

    musicVideoGallery = [
        { name: "TONES AND I - DANCE MONKEY", url: "q0hyYWKXF0Q" },
        { name: "Ed Sheeran - Shape of You", url: "JGwWNGJdvx8" },
        { name: "5 Seconds of Summer - Old Me", url: "i0jZJtE1KhU" },
        { name: "Ellie Goulding, blackbear - Worry About Me", url: "b4qC6UORQOQ" }
    ]

    change=(index)=>{
        this.setState({
            videoIndex:index
        })
    }


    

    render() {
        let { videoIndex } = this.state;

        return (
            <div class="main">
                <h1> My music </h1>
                <div class="left-side">
                    <ul>
                        {this.musicVideoGallery.map((item, i) =>
                            <li>
                                name:{item.name}
                                {(videoIndex === i)
                                    ? <button onClick={()=>this.change(null)}>Stop</button>
                                    : <button onClick={()=>this.change(i)}>Play</button>}
                            </li>
                        )}
                    </ul>
                </div>
                <div class="right-side">
                    {videoIndex !==null && <iframe width="420" height="345" src={`https://www.youtube.com/embed/${this.musicVideoGallery[videoIndex].url}?autoplay=1`}>
                    </iframe>}
                </div>
            </div>

        )
    }




}

export default MusicVideo;