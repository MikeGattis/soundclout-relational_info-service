import React from 'react';
import ReactDOM from 'react-dom';



function TopLikes(props) {
  const likers = props.users;
  const topNine = [];

  var pixels = 0;
  for (var i = 0; i < likers.length; i++) {
    var styleDiv = {
      position: "absolute",
      left: pixels + "px",
      display: "inline-block"
    };
    var user = likers[i];
    if (topNine.length === 9) {
      break;
    }

    pixels += 31;
    topNine.push(
      <div style={styleDiv} >
        <img src={user.user_image_url} className={"userImg"} />
        {/* <div>{user.user}</div> */}
      </div>
    );
  }
  return (
    <div className={"likersGrid"}>
      <h4 className={"likesHeader"}><i class="fas fa-heart"></i> Likes</h4>
      <h4 className={"viewAllLikers"}>View All</h4>
      <div className={"likers"}>{topNine}</div>
  </div>
  )
}



export default TopLikes;