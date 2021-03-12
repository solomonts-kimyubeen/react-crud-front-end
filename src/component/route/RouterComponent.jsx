import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";
import UserListComponent from "../user/UserListComponent";

const AppRouter = () => {
    return(
        <div style={style}>
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UserListComponent}/>
                <Route path="/users" component={UserListComponent}/>
                <Route path="/add-user" component={AddUserComponent}/>
                <Route path="/edit-user" component={EditUserComponent}/>
            </Switch>
         </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop : '20px'
}

export default AppRouter;