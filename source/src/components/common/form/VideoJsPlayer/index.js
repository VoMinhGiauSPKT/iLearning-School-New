import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageLogo from '@assets/images/imagelogoo.png';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import videojs from 'video.js';

import 'videojs-contrib-quality-levels';
import 'videojs-thumbnail-sprite';
import 'videojs-contrib-ads';
import 'videojs-markers';

import './VideoJsPlayer.styles.scss';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/sea/index.css';
const imageLink = 'https://cdn2.macpaw.com/images/content/save-video-iphone-OG-1200x630_1568814718.jpg';

const VideoJsPlayer = forwardRef((props, ref) => {
    const {
        source,
        height,
        handleVideoEnded,
        track,
        secondProgress,
        isFinished,
        name,
        artistName,
        courseImage,
        handlePlayerReady,
    } = props;
    const options = {
        preload: 'auto',
        autoplay: true,
        muted: false,
        controls: true,
        loop: false,
        controlBar: {
            remainingTimeDisplay: {
                displayNegative: false,
            },
        },
        html5: {
            vhs: {
                overrideNative: true,
            },
            nativeVideoTracks: false,
            nativeAudioTracks: false,
            nativeTextTracks: false,
        },
        poster: courseImage ? courseImage : null,
        bigPlayButton: true, // Đảm bảo nút play lớn được bật
    };
    const [ videoSource, setVideoSource ] = useState(source);
    const [ currentSubtitle, setCurrentSubtitle ] = useState('');
    const [ isSubtitleVisible, setIsSubtitleVisible ] = useState(false); // Thêm trạng thái để kiểm soát hiển thị subtitle
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const { onReady } = props;
    useEffect(() => {
        setVideoSource(source);
    }, [ source ]);
    const pause = () => {
        const player = playerRef.current;
        if (player) {
            player.pause();
        }
    };

    useImperativeHandle(ref, () => ({
        pause: pause,
    }));
    const queryParameters = new URLSearchParams(window.location.search);
    const lessonId = queryParameters.get('lessonId');
    const params = useParams();
    const handleMarkerReached = (marker) => {
        // if (marker.text !== currentSubtitle && !isSubtitleVisible) {
        //     // Kiểm tra nếu subtitle mới khác và không đang hiển thị
        //     setCurrentSubtitle(marker.text);
        //     setIsSubtitleVisible(true); // Đánh dấu subtitle đang hiển thị
        //     console.log(marker, currentSubtitle, isSubtitleVisible);
        //     // setTimeout(() => {
        //     //     setCurrentSubtitle('');
        //     //     setIsSubtitleVisible(false); // Đánh dấu subtitle không còn hiển thị
        //     // }, 1000); // Clear subtitle after 1 second
        // }
    };
    React.useEffect(() => {
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;
            const player = (playerRef.current = videojs(videoElement, options, () => {
                onReady && onReady(player);

                !isFinished && secondProgress > 0 && player.currentTime(secondProgress);
            }));

            if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new window.MediaMetadata({
                    title: name ? name : 'Tiêu lớp học',
                    artist: `Tác giả: ${artistName ? artistName : ''}`,
                    album: 'Tên album hoặc tập',
                    artwork: [ { src: ImageLogo, sizes: '96x96', type: 'image/png' } ],
                });

                navigator.mediaSession.setActionHandler('play', () => player.play());
                navigator.mediaSession.setActionHandler('pause', () => player.pause());
            }
            var approxTime = 0;

            player.on('timeupdate', function () {
                if (track) {
                    var currentTime = Math.floor(player.currentTime());

                    if (currentTime !== approxTime) {
                        approxTime = currentTime;
                        // if (approxTime % 5 == 0) {
                        // }
                    }
                }
            });
            handlePlayerReady?.(player);
            player.on('ended', function () {
                handleVideoEnded();
                player.posterImage.show();
            });
            player.on('keydown', (e) => {
                const playerVolume = player.volume();
                const playerCurrentTime = player.currentTime();
                switch (e.code) {
                                case 'Space':
                                    if (player.paused()) {
                                        player.play();
                                    } else {
                                        player.pause();
                                    }
                                    break;
                                case 'ArrowRight':
                                    player.currentTime(playerCurrentTime + 10);
                                    break;
                                case 'ArrowLeft':
                                    player.currentTime(playerCurrentTime - 10);
                                    break;
                                case 'ArrowUp':
                                    player.volume(playerVolume + 0.1);
                                    break;
                                case 'ArrowDown':
                                    player.volume(playerVolume - 0.1);
                                    break;
                                case 'KeyM':
                                    player.volume(0);
                                    break;
                                default:
                                    return;
                }
            });
            player.markers({
                markerStyle: {
                    width: '8px',
                    'border-radius': '30%',
                    'background-color': 'red',
                },
                markerTip: {
                    display: false,
                    text: function (marker) {
                        return marker.text;
                    },
                    time: function (marker) {
                        return marker.time;
                    },
                },
                breakOverlay: {
                    display: false,
                },
                onMarkerClick: function (marker) {
                    player.currentTime(marker.time);
                },
                onMarkerReached: handleMarkerReached,
            });
            player.on('touchstart', function (event) {
                if (event.target.closest('.vjs-control-bar')) {
                    return;
                }
                if (event.target.classList.contains('vjs-tech')) {
                    if (player.paused()) {
                        player.play();
                        player.bigPlayButton.show();
                    } else {
                        player.pause();
                    }
                }
            });
        }
    }, [ options, videoRef, source, videoSource, handlePlayerReady, handleMarkerReached ]);

    useEffect(() => {
        const player = playerRef.current;
        if (player && player.paused()) {
            player.play();
        }
    }, [ playerRef ]);

    React.useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [ playerRef, source ]);

    return (
        <div className="player" style={{ height: height }} key={source}>
            <div data-vjs-player>
                <video
                    poster={courseImage ? courseImage : null}
                    playsInline
                    ref={videoRef}
                    className="video-js vjs-16-9"
                    style={{ objectFit: 'fill' }}
                >
                    {source && (
                        <source src={source} type="application/x-mpegURL" />
                    )}
                </video>
                {currentSubtitle && <div className="video-subtitle">{currentSubtitle}</div>}
            </div>
        </div>
    );
});
VideoJsPlayer.displayName = 'VideoJsPlayer';
export default VideoJsPlayer;
