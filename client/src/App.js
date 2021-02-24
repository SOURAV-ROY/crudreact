import React from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import PostList from "./components/post/PostList";
import PostCreate from "./components/post/PostCreate";
import PostEdit from "./components/post/PostEdit";

import UserList from "./components/user/UserList";
import UserCreate from "./components/user/UserCreate";
import UserEdit from "./components/user/UserEdit";


const App = () => {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource
                name='posts'
                list={PostList}
                create={PostCreate}
                edit={PostEdit}
            />
            <Resource
                name='users'
                list={UserList}
                create={UserCreate}
                edit={UserEdit}
            />
        </Admin>
    )
}

export default App;
