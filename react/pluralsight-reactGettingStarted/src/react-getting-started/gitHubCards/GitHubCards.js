import React from "react";

class Form extends React.Component {
  state = {
    username: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then((res) => res.json())
      .then((data) => this.props.onSubmit(data));
    this.setState({ username: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.username}
          onChange={(event) => this.setState({ username: event.target.value })}
          type="text"
          placeholder="GitHub Username"
          required
        ></input>
        <button>Add Card</button>
      </form>
    );
  }
}

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="users profile" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class GitHubApp extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default GitHubApp;
