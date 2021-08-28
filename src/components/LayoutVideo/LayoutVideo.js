import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHeart, BsHeartFill, BsTrash } from 'react-icons/bs';

import { firestore } from '../../services/Firebase/firebase';
import { useAuth } from '../../providers/Auth/Auth.provider';

import {
  LayoutVideos,
  VideoDetail,
  VideoInfo,
  VideoImg,
  VideoFavorite,
} from './LayoutVideo.styled';

function LayoutVideo(props) {
  const { mainLayoutVideos } = props;
  const { relatedVideos } = props;
  const { favoriteVideos } = props;
  const { currentUser } = useAuth();
  const [favoriteClicked, setFavoriteClicked] = useState({});

  function saveVideoToFavorites(video) {
    try {
      firestore
        .collection('users')
        .doc(currentUser.uid)
        .collection('videos')
        .doc(video.id.videoId)
        .set(video);
    } catch (error) {
      console.log('error', error);
    }
  }

  function deleteVideoFromFavorites(video) {
    try {
      firestore
        .collection('users')
        .doc(currentUser.uid)
        .collection('videos')
        .doc(video.id.videoId)
        .delete();
    } catch (error) {
      console.log('error', error);
    }
  }

  function addToFavorite(video) {
    saveVideoToFavorites(video);

    setFavoriteClicked({
      ...favoriteClicked,
      [video.id.videoId]: true,
    });
  }

  return (
    <LayoutVideos data-testid="videos" relatedVideos={relatedVideos}>
      {props.videos.length > 0 &&
        props.videos.map((video) => {
          if (video.snippet && video.id.kind === 'youtube#video') {
            return (
              <VideoDetail
                key={video.id.videoId}
                mainLayoutVideos={mainLayoutVideos || favoriteVideos}
              >
                <VideoImg>
                  <Link
                    to={{
                      pathname: `/VideoDetail/${video.id.videoId}`,
                    }}
                  >
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                    />
                  </Link>
                  {currentUser ? (
                    <VideoFavorite>
                      {favoriteVideos ? (
                        <BsTrash onClick={() => deleteVideoFromFavorites(video)} />
                      ) : (
                        <div>
                          {favoriteClicked[video.id.videoId] ? (
                            <BsHeartFill />
                          ) : (
                            <BsHeart onClick={() => addToFavorite(video)} />
                          )}
                        </div>
                      )}
                    </VideoFavorite>
                  ) : null}
                </VideoImg>
                <VideoInfo>
                  <h3 data-testid="title">{video.snippet.title}</h3>
                  <p data-testid="channeltitle">{video.snippet.channelTitle}</p>
                </VideoInfo>
              </VideoDetail>
            );
          }
          return true;
        })}
    </LayoutVideos>
  );
}

export default LayoutVideo;
