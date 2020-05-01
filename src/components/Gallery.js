import React from 'react';

class Gallery extends React.Component {
    state = {
        imgIndex: 0,
    }

    gallery=[
        "https://vetstreet-brightspot.s3.amazonaws.com/c0/13/6ee0c779424f9d1bd1fbd6c5c4e3/cat-sneezing-thinkstockphotos-106383649-335.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
        "https://cdn1-www.cattime.com/assets/uploads/gallery/ragdoll/ragdoll-cats-kittens-1.jpg",
        "https://www.rspca.org.uk/documents/1494939/7712593/1083611+Health+and+Welfare.jpg/5d6490ed-c18d-b74e-b642-23640260556d?t=1552668626497",
        "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_175/f_auto,q_auto,w_1100/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg",
        "https://cdn.mos.cms.futurecdn.net/m8gab96KxcpCgpHZfu9oXe-1200-80.jpg",
        "https://artcityvets.com/wp-content/uploads/2019/03/animal-sitting-animals-inside.jpg",
        "https://nationalzoo.si.edu/sites/default/files/styles/480x240_scale_and_crop/public/animals/sandcat-002.jpg?itok=aSVuzTWQ&timestamp=1520538731",
        "https://www.1800petmeds.com/education-data/images/cat-sleep-large.jpg"
    ];

    prev=()=> {
        this.setState({
            imgIndex:this.state.imgIndex-1,
        })
    }

    next=()=> {
        this.setState({
            imgIndex:this.state.imgIndex+1,
        })
    }

    render() {
        return (
            <div class="imageCount">
                <p> {this.state.imgIndex+1}/ {this.gallery.length}</p>

                <div class="gallery">
                    <i class={"myBtnLeft" + ((this.state.imgIndex==0) ? " disabled" : "")} onClick={this.prev}></i>
                    <img src={this.gallery[this.state.imgIndex]} height="350px" width="350px"/>
                    <i class={"myBtnRight" + ((this.state.imgIndex==this.gallery.length-1) ? " disabled": "")} onClick={this.next}></i>
                </div>
            </div>
            
        )
    }
}

export default Gallery;