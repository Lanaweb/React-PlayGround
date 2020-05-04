import React from 'react';
import Gallery from './Main2';
import MusicVideo from './MusicVideo';
import Tabs from './Tabs';
import CatsInfo from './CatsInfo';
import Price from './Price';
import LogInForm from './LogInForm';
import ProfileForm from './ProfileForm';


class Main2 extends React.Component {

    render() {
        return <div>
            {/* <Gallary /> */}
            {/* <MusicVideo/> */}
            {/* <Tabs/> */}
            {/* <CatsInfo/> */}
            {/* <Price value={100} currency="USD"/> */}
            {/* <LogInForm/> */}
            <ProfileForm/>
        </div>
    }
}
export default Main2;