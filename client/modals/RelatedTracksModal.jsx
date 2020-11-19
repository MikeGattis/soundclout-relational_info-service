import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function RelatedTracksModal(props) {
  const songs = props.songs;
  const showTen = [];

  const addK = function(stat) {
    if (stat > 9999) {
      stat = Math.floor(stat / 1000) + 'k';
    }
    return ' ' + stat;
  }

  for (var i = 0; i < songs.length; i++) {
    const song = songs[i];
    const plays = addK(song.plays);
    const likes = addK(song.likes);
    const reposts = addK(song.reposts);
    const comments = addK(song.comments);
    showTen.push(
      <div className={"songGridModal"}>
        <div className={"behindPic"}></div>
        <div className={"behindPicOne"}></div>
        <img src={"https://fec-tyrell-users.s3.us-east-2.amazonaws.com/Snapchat-7841306265423801048.jpg"}
          className={"songImg"} />
        <div className={"songTitle"}>{song.title}</div>
        <div className={"artist"}>{song.artist}</div>
        <div className={"statsPlays songStats"}><i class="fas fa-play"></i>{plays}</div>
        <div className={"statsLikes songStats"}><i class="fas fa-heart"></i>{likes}</div>
        <div className={"statsReposts songStats"}><i class="fas fa-retweet"></i>{reposts}</div>
        <div className={"statsComments songStats"}><i class="fas fa-comment-alt"></i>{comments}</div>
      </div>
    )
    if (showTen.length === 10) {
      break;
    }
  }

  if (props.show) {
    return (
      <div className={"modal"}>
        <div className={"relatedHeaderModal"} >
          <h4 className={"related"}><i class="fas fa-music"></i> Related Tracks</h4>
          <h4 className={"viewAllRelated close"} onClick={props.click}>Close</h4>
        </div>
        <div>{showTen}</div>
      </div>
    )
  } else {
    return null;
  }

}

export default RelatedTracksModal;