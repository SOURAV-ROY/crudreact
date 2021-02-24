import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';

const UserEdit = (props) => {
    return (
        <Edit title="User Edit" {...props}>
            <SimpleForm>
                <TextInput disabled source="id"/>
                <TextInput source="name"/>
                <TextInput disabled  source="email"/>
            </SimpleForm>

        </Edit>
    );
};

export default UserEdit;
