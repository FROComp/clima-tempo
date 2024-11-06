import { useHomeModel } from "./model";
import map from "assets/location.png";
import * as S from "./styles";
import { Loading } from "components/ui/loading";

export function HomeView(props: ReturnType<typeof useHomeModel>) {
  const { loading, city, data, handleChangeCity, handleGetWeatherInfo } = props;

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Informe sua cidade</S.Title>
        <S.Input
          placeholder="Nome da cidade"
          value={city}
          onChange={handleChangeCity}
        />
        <S.Button
          type="button"
          disabled={Boolean(!city.length || loading)}
          onClick={handleGetWeatherInfo}
        >
          {loading ? "Carregando..." : "Consultar tempo"}
        </S.Button>
      </S.Container>

      <S.Container>
        {loading && <Loading />}
        {!loading && !data && "Nenhuma busca"}
        {!loading && data && (
          <S.Box>
            <S.Location>
              <S.CityName>
                <img src={map} alt="mapa" /> {data.location.name}
              </S.CityName>
              <S.Condition>{data.current.condition.text}</S.Condition>
            </S.Location>
            <S.Temperature>
              <img src={`https:${data.current.condition.icon}`} />
              <S.TempText>
                {`${Math.floor(data.current.feelslike_c)} °C`}
              </S.TempText>
            </S.Temperature>
          </S.Box>
        )}
      </S.Container>
      <S.GlobalStyles />
    </S.Wrapper>
  );
}
