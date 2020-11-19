import React from 'react';
import ReactDOM from 'react-dom';

function TopReposts(props) {
  const reposters = props.users;
  const topNine = [];

  var pixels = 0;
  for (var i = 0; i < reposters.length; i++) {
    var styleDiv = {
      position: "absolute",
      left: pixels + "px",
      display: "inline-block"
    };
    var user = reposters[i];
    if (topNine.length === 9) {
      break;
    }
    pixels += 31;
    topNine.push(
      <div style={styleDiv} >
        <img src={user.user_image_url}  className={"userImg"}/>
        {/* <div>{user.user}</div> */}
      </div>
    );
  }
  return (
    <div className={"repostersGrid"}>
      <h4 className={"repostsHeader"}>XXXX Reposts</h4>
      <h4 className={"viewAllReposters"}>View All</h4>
      <div className={"reposters"}>{topNine}</div>
    </div>
  )
}

export default TopReposts;