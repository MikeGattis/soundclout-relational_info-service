import React from 'react';
import ReactDOM from 'react-dom';
import LikesModal from './modals/LikesModal.jsx';
import RepostsModal from './modals/RepostsModal.jsx';
import TopLikes from './components/TopLikes.jsx';
import TopReposts from './components/TopReposts.jsx';
import axios from 'axios';

class LikesReposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      likers: [],
      reposters: []
    }
    this.getUsers = this.getUsers.bind(this);
    this.findLikers = this.findLikers.bind(this);
    this.findReposters = this.findReposters.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get('/api/users')
    .then(res => {
      this.setState({users: res.data});
      return res;
    })
    .then(res => {
      this.findLikers();
      this.findReposters();
      return res;
    })
    .then(res => {
      this.render();
    })
    .catch(error => {
      console.error('issue in LikesReposts.jsx retrieving song data from DB');
    });
  }

  findLikers() {
    const allUsers = this.state.users;
    var likes = [];
    for (var i = 0; i < allUsers.length; i++) {
      var user = allUsers[i];
      if (user.like) {
        likes.push(user);
      }
    }
    this.setState({likers: likes});
  }

  findReposters() {
    const allUsers = this.state.users;
    var reposts = [];
    for (var i = 0; i < allUsers.length; i++) {
      var user = allUsers[i];
      if (user.repost) {
        reposts.push(user);
      }
    }
    this.setState({reposters: reposts});
  }

  render() {
    return (
      <div>
        <TopLikes users={this.state.likers} />
        <TopReposts users={this.state.reposters} />
      </div>
    )
  }
}

export default LikesReposts;