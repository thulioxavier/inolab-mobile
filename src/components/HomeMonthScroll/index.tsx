import React, { Fragment, useState, useRef, useEffect} from "react";
import { Dimensions } from "react-native";
import { MONTH } from "../../utils";
import *as S from './styles';

export const HomeMonthScroll = (props: any) => {

    const [selectedMonth, setSelectedMonth] = useState<any>(props.selectedMonth)
    const MonthRef = useRef<any>();
    const screenWidth = Math.round(Dimensions.get('window').width);
    let thirdW = screenWidth/3;

    const handleScrollEnd = (posX: any) => {
        let targatMonth = Math.round(posX / thirdW);
        setSelectedMonth(targatMonth);
    }

    useEffect(()=> {
        props.setSelectedMonth(selectedMonth);
    },[selectedMonth]);

    const scrollToMonth = (month: any) => {
        let posX = (month * thirdW);
        MonthRef.current.scrollTo({x: posX, y:0, animated: true});
    }

    useEffect(()=> {

        setTimeout(() => {
            scrollToMonth(selectedMonth);
        }, 10);
    },[props.selectedMonth]);

    return(
        <Fragment>
            <S.MonthScroll 
                ref={MonthRef}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={thirdW}
                contentContainerStyle={{paddingLeft: thirdW, paddingRight: thirdW}}
                onMomentumScrollEnd={(e) => {handleScrollEnd(e.nativeEvent.contentOffset.x)}}
            >
                {MONTH.map((item, index) => {
                    return(
                        <Fragment key={index}>
                            <S.MonthButton width={thirdW} onPress={()=>{setSelectedMonth(index)}}>
                                <S.MonthItem selected={index==selectedMonth}>
                                    <S.MonthText selected={index==selectedMonth}>{item}</S.MonthText>
                                </S.MonthItem>
                            </S.MonthButton>
                        </Fragment>
                    );
                })}
            </S.MonthScroll>
        </Fragment>
    )
}