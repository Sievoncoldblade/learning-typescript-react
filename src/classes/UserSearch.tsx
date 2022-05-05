import React, { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps, UserSearchState> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = this.state.name;
    const users = this.props.users;

    const user = users.find((user) => user.name === name);
    this.setState({ name: '', user });
  };

  displayUser = (user: User) => {
    return (
      <>
        <p>
          <strong>Name: </strong>
          {user.name}
        </p>
        <p>
          <strong>Age: </strong>
          {user.age}
        </p>
      </>
    );
  };

  render() {
    const { user, name } = this.state;
    return (
      <>
        <h1>Search User</h1>
        <input
          value={name}
          onChange={this.handleChange}
          placeholder='Search user here...'
        />
        <button onClick={this.handleClick}>Find</button>
        <h3>User</h3>
        {user ? this.displayUser(user) : 'User not found'}
      </>
    );
  }
}

export default UserSearch;
