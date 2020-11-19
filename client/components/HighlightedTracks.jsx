import React from 'react';
import ReactDOM from 'react-dom';

function HighlightedTracks(props) {
  const highlights = props.highlights;
  const topThree = [];
  const addK = function(stat) {
    if (stat > 9999) {
      stat = Math.floor(stat / 1000) + 'k';
    }
    return stat + '';
  }
  for (var i = 0; i < highlights.length; i++) {
    const song = highlights[i];
    const plays = addK(song.plays);
    const likes = addK(song.likes);
    const reposts = addK(song.reposts);
    const comments = addK(song.comments);
    topThree.push(
      <div className={"songGrid"}>
        <img src={"https://fec-tyrell-users.s3.us-east-2.amazonaws.com/Snapchat-7841306265423801048.jpg"}
          className={"songImg"} />
          {/* {song.artist_image_url} */}

        <div className={"songTitle"}>{song.title}</div>
        <div className={"artist"}>{song.artist}</div>
        <div className={"statsPlays songStats"}>{plays}</div>
        <div className={"statsLikes songStats"}>{likes}</div>
        <div className={"statsReposts songStats"}>{reposts}</div>
        <div className={"statsComments songStats"}>{comments}</div>
      </div>
    )
  }
  return (
    <div>
      <div className={"relatedHeader"}>
        <h4 className={"related"}>Related Tracks</h4>
        <h4 className={"viewAllRelated"}>View All</h4>
      </div>
      <div>{topThree}</div>
    </div>
  )
}

export default HighlightedTracks;