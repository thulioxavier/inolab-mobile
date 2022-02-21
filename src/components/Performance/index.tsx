import React, { Children, Fragment, useEffect, useState } from "react";
import { Alert, Dimensions, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { ShowInfoDash } from "../../services/api";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";

import * as S from "./styles";
import { AreaList } from "../../pages/ViewContents/styles";

export const Performance = () => {
  useEffect(() => {
    getShowMetrics();
  }, []);
  const screenWidth = Dimensions.get("window").width;
  const [values, setValues] = useState<any>();
  const [visible, setVisible] = useState<boolean>(false);
  const [chartDate, setChartDate] = useState<Array<object>>([{}]);
  const [history, setHistory] = useState<Array<object>>([{}]);
  const [selectData, setSelectData] = useState<object | any>({
    total: null,
    percent: null,
    title: null,
    icon: null,
  });

  const handleToolTip: any = {};
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 7,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(44, 113,  199, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.8,
    useShadowColorFromDataset: false, // optional
  };

  const getShowMetrics = async () => {
    try {
      const result: any = await ShowInfoDash(1);
      if (result.data.status) {
        setValues(result?.data?.metrics);
        setChartDate(result?.data?.chart);
        setHistory(result?.data?.history);
      } else {
        Alert.alert("Error");
      }
    } catch (error) {}
  };

  const ShowInfo = () => {
    return (
      <Fragment>
        <S.ModalR
          animationType="fade"
          visible={visible}
          transparent={true}
          onRequestClose={() => {
            setVisible(false);
          }}
        >
          <S.ModalContent>
            <S.ModalHeader
              color={
                selectData.icon === "arrow-up"
                  ? "#00C880"
                  : selectData.icon === "activity"
                  ? "#ECAE52"
                  : "#E75353"
              }
            >
              <S.ButtonIconClose
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Icon
                  name="x-circle"
                  size={25}
                  color="#FFF"
                  style={{ marginRight: 5 }}
                />
              </S.ButtonIconClose>
            </S.ModalHeader>

            <S.ModalArea>
              <S.LabelTitle style={{ fontSize: 18 }}>
                {selectData.title}
              </S.LabelTitle>
              <Icon
                name={selectData.icon}
                size={35}
                color={
                  selectData.icon === "arrow-up"
                    ? "#00C880"
                    : selectData.icon === "activity"
                    ? "#ECAE52"
                    : "#E75353"
                }
                style={{ marginRight: 5 }}
              />
              {selectData.icon === "activity" ? (
                <>
                  <FlatList
                    style={{
                        width: 250,
                    }}
                    data={history}
                    renderItem={({ item }) => {
                      return (
                        <>
                          <S.ItemHistory >
                            <Icon
                              name={item.status ? "arrow-up" : "arrow-down"}
                              size={14}
                              color={item.status ? "#00C880" : "#E75353"}
                              style={{ marginRight: 5 }}
                            />
                            <S.Label style={{fontWeight:'bold'}}>{item?.points}</S.Label>
                            <S.Label style={{textAlign: 'left'}} numberOfLines={1}>{""} - {item?.questions?.title}</S.Label>
                          </S.ItemHistory>
                        </>
                      );
                    }}
                    keyExtractor={(item) => item.id}
                  />
                </>
              ) : (
                <>
                  <S.Label style={{ marginTop: 15 }}>
                    {selectData.title === "Erros" ? "- Ponto(s)" : "+ Ponto(s)"}
                    :{" "}
                    <S.Label style={{ fontWeight: "bold" }}>
                      {selectData.total}
                    </S.Label>
                  </S.Label>
                  <S.Label
                    style={{ fontSize: 16, fontWeight: "bold", marginTop: 15 }}
                  >{`${selectData.percent}%`}</S.Label>
                </>
              )}
            </S.ModalArea>
          </S.ModalContent>
        </S.ModalR>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <S.Content>
        <S.Conteiner>
          <S.Row horizontal={true} showsHorizontalScrollIndicator={false}>
            <S.Card
              style={[S.Styles.Shadow, { marginLeft: 5 }]}
              onPress={() => {
                setVisible(true);
                let aux = {
                  total: values.hits.points,
                  percent: values.hits.percent,
                  title: "Acertos",
                  icon: "arrow-up",
                };
                setSelectData({ ...aux });
              }}
            >
              <S.LabelTitle>Acertos</S.LabelTitle>
              <Icon
                name="arrow-up"
                size={19}
                color="#00C880"
                style={{ marginRight: 5 }}
              />
              <S.Label
                style={{
                  color:
                    values?.hits?.count < values?.mistakes.count
                      ? "#E75353"
                      : "#555555",
                  fontWeight:
                    values?.hits?.count < values?.mistakes.count
                      ? "bold"
                      : "normal",
                }}
              >
                {values?.hits?.count}
              </S.Label>
            </S.Card>

            <S.Card
              style={[S.Styles.Shadow]}
              onPress={() => {
                setVisible(true);
                let aux = {
                  total: values.mistakes.points,
                  percent: values.mistakes.percent,
                  title: "Erros",
                  icon: "arrow-down",
                };
                setSelectData({ ...aux });
              }}
            >
              <S.LabelTitle>Erros</S.LabelTitle>
              <Icon
                name="arrow-down"
                size={19}
                color="#E75353"
                style={{ marginRight: 5 }}
              />
              <S.Label>{values?.mistakes.count}</S.Label>
            </S.Card>

            <S.Card
              style={[S.Styles.Shadow]}
              onPress={() => {
                setVisible(true);
                let aux = {
                  total: values.hits.points,
                  percent: values.hits.percent,
                  title: "Pontuação",
                  icon: "activity",
                };
                setSelectData({ ...aux });
              }}
            >
              <S.LabelTitle>Pontuação</S.LabelTitle>
              <Icon
                name="activity"
                size={19}
                color="#ECAE52"
                style={{ marginRight: 5 }}
              />
              <S.Label>{values?.hits?.points}</S.Label>
            </S.Card>

            <S.Card style={[S.Styles.Shadow]} disabled={true}>
              <S.LabelTitle>Ver Mais</S.LabelTitle>
              <Icon
                name="grid"
                size={19}
                color="#526eec"
                style={{ marginRight: 5 }}
              />
              <S.Label></S.Label>
            </S.Card>
            {ShowInfo()}
          </S.Row>
          <S.Conteiner
            style={{
              margin: 5,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ContributionGraph
              values={chartDate}
              endDate={new Date(chartDate[chartDate.length - 1]?.date)}
              numDays={100}
              width={screenWidth}
              height={200}
              chartConfig={chartConfig}
              tooltipDataAttrs={(value) => handleToolTip}
            />
          </S.Conteiner>

          {values?.hits?.count < values?.mistakes.count ? (
            <S.AlertPerformace>
              <S.Label style={{ color: "#FFF" }}>
                O seu desenpenho está baixo!
              </S.Label>
            </S.AlertPerformace>
          ) : null}
        </S.Conteiner>
      </S.Content>
    </Fragment>
  );
};
