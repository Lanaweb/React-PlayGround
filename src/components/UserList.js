import React from 'react';
import UserCard from './UserCard';


class UserList extends React.Component {

    render() {
        let users = [
            { img: "https://www.pbs.org/wnet/nature/files/2018/09/Nature-Thumbnail-FishingCat-MM-512x288.jpg", name: "Dilly" },
            { img: "https://lh3.googleusercontent.com/proxy/UCA5Eh-WjhFBDA-tLX5zdtzvFDeVtRqzwpbKJmfnTeividaIYSlf0-t_9XxpYPOn_cqduiLVsG-G78WkVFLFPWT9UBA7crbS1JwYHomFHT9RONHTm08", name: "Subby" },
            { img: "https://assets-natgeotv.fnghub.com/Shows/16598.jpg", name: "Kiky" },
            { img: "https://assets-natgeotv.fnghub.com/Shows/17174.jpg", name: "Milky" },
            { img: "https://wallup.net/wp-content/uploads/2016/01/19871-nature-cat.jpg", name: "Lilliy" }
        ]

        return (
            <div className="user-list">
                {users.map(user => <UserCard img={user.img} name={user.name} />)}
            </div>
        )
    }
}

export default UserList;