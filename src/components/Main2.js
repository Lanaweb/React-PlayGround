import React from 'react';
import Gallery from './Gallery';
import MusicVideo from './MusicVideo';
import Tabs from './Tabs';
import CatsInfo from './CatsInfo';
import Price from './Price';
import LogInForm from './LogInForm';
import ProfileForm from './ProfileForm';
import UserList from './UserList';
import Autocomplete from './Autocomplete';
import { Route } from 'react-router-dom';


class Main2 extends React.Component {

    render() {
        return <div>
         
            <Route path="/gallery" component={Gallery} />
            <Route path="/miusicvideo" component={MusicVideo} />
            {/* <MusicVideo/> */}
            <Route path="/tabs" component={Tabs} />
            {/* <Tabs/> */}
            <Route path="/catsinfo" component={CatsInfo} />
            {/* <CatsInfo/> */}
            <Route path="/price">
              <Price value={100} currency="USD"/>
            </Route> 
            {/* <Price value={100} currency="USD"/> */}
            <Route path="/loginform" component={LogInForm} />
            {/* <LogInForm/> */}
            <Route path="/profileform" component={ProfileForm} />
            {/* <ProfileForm/> */}
            <Route path="/userlist" component={UserList} />
            {/* <UserList/> */}
            <Route path="/autocomplete" component={Autocomplete} /> <br/>
            {/* <Autocomplete/> */}
        </div>
    }
}
export default Main2;