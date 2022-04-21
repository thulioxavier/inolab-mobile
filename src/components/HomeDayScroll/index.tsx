import React, { Fragment, useState, useRef, useEffect } from "react";
import { Dimensions } from "react-native";
import { WEEK_DAY } from "../../utils";
import *as S from './styles';

export const HomeDayScroll = (props: any) => {
    const DayRef = useRef<any>();
    const screenWidth = Math.round(Dimensions.get('window').width);
    const [selectedDay, setSelectedDay] = useState<any>(props.selectedDay)

    let dayW = (screenWidth / 8);
    let offsetW = Math.round((screenWidth - dayW) / 2);


    const handleScrollEnd = (posX: any) => {
        let targatDay = Math.round(posX / dayW);
        setSelectedDay(targatDay + 1);
    }

    useEffect(() => {
        props.setSelectedDay(selectedDay);
    }, [selectedDay]);

    const scrollToDay = (day: any) => {
        let posX = ((day - 1) * dayW);
        DayRef.current.scrollTo({ x: posX, y: 0, animated: true });
        setSelectedDay(parseInt(day))
    }

    useEffect(() => {

        setTimeout(() => {
            if (props.selectedMonth == new Date().getMonth()) {
                scrollToDay(new Date().getDate());
            } else {
                scrollToDay(1)
            }
        }, 10);
    }, [props.selectedMonth]);

    let DAYS = [];
    let daysInMonth = new Date(new Date().getFullYear(), (parseInt(props.selectedMonth) + 1), 0).getDate();
    for (let index = 1; index <= daysInMonth; index++) {
        DAYS.push(index);
    }

    return (

        <Fragment>
            <S.DayScroll
                ref={DayRef}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={dayW}
                contentContainerStyle={{ paddingLeft: offsetW, paddingRight: offsetW }}
                onMomentumScrollEnd={(e) => { handleScrollEnd(e.nativeEvent.contentOffset.x) }}
            >

                {DAYS.map((item, index) => {
                    return (
                        <Fragment key={index}>

                            <S.DayButton width={dayW}
                                onPress={() => {
                                    setSelectedDay(index + 1);
                                    scrollToDay(index + 1);
                                }}
                            >
                                <S.DayItem
                                    selected={index == selectedDay - 1}
                                    day={(index + 1) == new Date().getDate() && props.selectedMonth == new Date().getMonth()}
                                    back={ (props.selectedMonth < new Date().getMonth()) ||((index + 1) < new Date().getDate() && props.selectedMonth <= new Date().getMonth())}
                                    next={index > new Date().getDate()}
                                >
                                    <S.DayText selected={index == selectedDay - 1}>
                                        {item}
                                    </S.DayText>
                                    <S.WeekDayText selected={index == selectedDay - 1}>
                                        {WEEK_DAY[new Date(new Date().getFullYear(), (parseInt(props.selectedMonth)), item).getUTCDay()]}
                                    </S.WeekDayText>
                                </S.DayItem>
                            </S.DayButton>

                        </Fragment>
                    );
                })}
            </S.DayScroll>
        </Fragment>
    )
}