import React, { Fragment, useRef, useState } from "react";
import { Video, AVPlaybackStatus } from 'expo-av';

import *as S from './styles';

interface PropsVideoNews {
    values: Array<Object>
}

export const VideoNews = ({ values = [] }: PropsVideoNews) => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <Fragment>
            <S.Scrool  horizontal={true} showsHorizontalScrollIndicator={false}>
                {values?.map((item, index) => {
                    return (
                        <S.VideoPlay
                            key={index}
                            ref={video}
                            source={{
                                uri: `http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4`,
                            }}
                            useNativeControls
                            resizeMode="cover"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    )
                })}

            </S.Scrool>
        </Fragment>
    )
}