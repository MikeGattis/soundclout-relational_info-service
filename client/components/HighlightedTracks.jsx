import React from 'react';
import ReactDOM from 'react-dom';

function HighlightedTracks(props) {
  const highlights = props.highlights;
  const topThree = [];

  const addK = function(stat) {
    if (stat > 9999) {
      stat = Math.floor(stat / 1000) + 'k';
    }
    return ' ' + stat;
  };

  const reload = function() {
    window.location.reload();
  };

  for (var i = 0; i < highlights.length; i++) {
    const song = highlights[i];
    const plays = addK(song.plays);
    const likes = addK(song.likes);
    const reposts = addK(song.reposts);
    const comments = addK(song.comments);
    topThree.push(
      <div className={"songGrid"}>
        <div className={"behindPic"}></div>
        <div className={"behindPicOne"}></div>
        <img src={"https://fec-tyrell-users.s3.us-east-2.amazonaws.com/Snapchat-7841306265423801048.jpg"}
          className={"songImg"} onClick={reload}/>
        <div className={"songTitle"} onClick={reload}>{song.title}</div>
        <div className={"artist"} onClick={reload}>{song.artist}</div>
        <div className={"statsPlays songStats"}><i class="fas fa-play"></i>{plays}</div>
        <div className={"statsLikes songStats"}><i class="fas fa-heart"></i>{likes}</div>
        <div className={"statsReposts songStats"}><i class="fas fa-retweet"></i>{reposts}</div>
        <div className={"statsComments songStats"}><i class="fas fa-comment-alt"></i>{comments}</div>
      </div>
    )
  }
  return (
    <div>{topThree}</div>
  )
}

export default HighlightedTracks;