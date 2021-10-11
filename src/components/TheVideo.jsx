import React, { Component } from 'react';
import video from './waveVideo.mp4';
import './TheVideo.css';

export class TheVideo extends Component {
  render() {
    return (
      <div className="body-presentation">
        <div className="text-presentation">
          <h1>Venha conhecer a Wave Engenharia</h1>
          <p>blalf sjkhasjkhfda slkjfslkaj aksldjkfljsah gfshfg hdhgs hdfhfhfd hfdfd gadgd fsgdf dgsd fgdfsgd fgdfsgdfsg dfsg dfgd fgdfgdfg dgdfsgdf sgdfsgd fsgd fgdf sgdf sgdfgdfg dsfg dfgd fgdf sgdfsg dfsg fsgd fsgdfgdf dfgdf sgdfgfdgdfgdf gdfgd fgdfgdfsgs dfsgdf sgdg dfghfghd fsdfhsfsfs hfh fghfsh asdf dsfsddd  ddddd ddd   ddddd dddddddd dddd sfsd fsdasd fas fsdag dsdf hfds hfd fddfh dfh sdgaadf ghdfhfhfsghsd agdfghr thrtgt yhs rhe</p>
        </div>
        <video autoṕlay controls>
          <source src={ video } type="video/mp4" />
        </video>
      </div>
    )
  }
}

export default TheVideo
