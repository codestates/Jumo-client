import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import server from '../apis/server';

// import res from '../atoms/dummyBrewery';

const Brewerys = ({ channelHandler, navHeader, setNavHeader }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  const [brewerys, setBrewerys] = useState([]);
  const [mapImage, setMapImage] = useState('');
  const [searchText, setSearchText] = useState('');

  const getBreweryInfo = async () => {
    // setIsLoading(true);
    server
      .get(`/brewery/info`)
      .then(res => setBrewerys([...res.data.data]))
      .then(() => {
        // setIsLoading(false);
      });
  };

  const getSearchBrewerys = async () => {
    // setIsLoading(true);
    server
      .get(`/brewery/search?query=${searchText}`)
      .then(res => setBrewerys([...res.data.data]))
      .then(() => {
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (!navHeader) {
      setNavHeader(true);
    }
    scrollToTop();
    channelHandler('Brewery');
    getBreweryInfo();
  }, []);

  useEffect(() => {
    getSearchBrewerys();
  }, [searchText]);

  const handleMap = searchMap => {
    setMapImage(searchMap);
  };
  const searchHandler = e => {
    setSearchText(e.target.value);
  };

  return (
    <Background>
      <StyleBrewerys>
        <StyleSearchBox>
          <Search>
            <StyleInput
              placeholder="  위치를 입력해주세요"
              onChange={searchHandler}
            />
            <FiSearch size="30px" color="#293848" />
          </Search>
          <Result>
            {searchText} 지역에서 {brewerys.length}개의 양조장이검색되었습니다.
          </Result>
        </StyleSearchBox>
        <Title>BREWERYS</Title>
        <StyleSpace>
          <StyleResult>
            {brewerys.map(el => (
              <StyleInfo key={el.id}>
                <StyleTitle onClick={() => handleMap(el.image)}>
                  {el.name}
                </StyleTitle>
                <Link to={`/makgeolli/list/${el.kinds}`}>
                  <RepresentM>대표 막걸리 : {el.kinds}</RepresentM>
                </Link>
                <div>{el.address}</div>
              </StyleInfo>
            ))}
          </StyleResult>

          {mapImage === '' ? '' : <StyleMap src={mapImage} alt="양조장 지도" />}
        </StyleSpace>
      </StyleBrewerys>
    </Background>
  );
};
const Background = styled.div`
  width: auto;
  height: 510vmin;
  background-color: #e7d1bf;
`;
const Title = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
    display: block;
    font-family: 'Sansation';
    position: relative;
    left: 25%;
    top: -3vh;
    font-size: 5vw;
    &:hover {
      font-size: 0px;
    }
    &:hover:before {
      content: '양조장 리스트를 클릭해주세요.';
      font-family: 'Nanum Gothic';
      font-size: 4vw;
    }
  }
`;
const RepresentM = styled.div`
  transition-duration: 0.5s;
  &:hover {
    color: yellowgreen;
    transform: translateX(10px);
  }
`;
const StyleBrewerys = styled.div`
  font-family: 'Nanum Gothic';
  color: #293848;
  width: 100%;
  height: auto;
  background-color: #e7d1bf;
  padding: 5vmin;
  padding-bottom: 10vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const StyleSpace = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  @media ${props => props.theme.tablet} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media ${props => props.theme.desktop} {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const Result = styled.div`
  padding-top: 1vw;
`;

const StyleMap = styled.img`
  width: 100%;
  height: 60vh;
  margin-top: 8vh;
  @media ${props => props.theme.tablet} {
    width: 45vw;
    height: 60vh;
    position: fixed;
    right: 3%;
    top: 15%;
    transition-duration: 0.5s;
  }
  @media ${props => props.theme.desktop} {
    width: 45vw;
    height: 65vh;
    position: fixed;
    right: 10%;
    top: 15%;
    transition-duration: 0.5s;
    &:hover {
      transform: translateX(5vw);
      width: 50vw;
      height: 70vh;
    }
  }
`;

const StyleSearchBox = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
    position: relative;
    top: 10vh;
    left: -24%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${props => props.theme.desktop} {
    position: relative;
    top: 10vh;
    left: -28%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyleInput = styled.input`
  padding: 0px 13px 0px 13px;
  height: 5vh;
  width: 22vw;
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 10px;
`;

const StyleResult = styled.div`
  position: relative;
  top: 10vh;
  padding-bottom: 12vh;
  @media ${props => props.theme.tablet} {
    width: 20%;
    position: relative;
    top: 10vh;
    left: -38%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${props => props.theme.desktop} {
    width: 20%;
    position: relative;
    top: 10vh;
    left: -33%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyleInfo = styled.div`
  line-height: 5vh;
  margin: 2vh;
  padding-bottom: 3px;
  width: 100%;
  padding: 2vh;
  border-bottom: 1px solid black;
  transition-duration: 0.5s;
  &:hover {
    color: #e7d1bf;
    padding: 2vh;
    background-color: #293848;
    border-radius: 10px;
  }
`;

const StyleTitle = styled.div`
  font-size: 4vh;
  margin-bottom: 1vh;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    font-size: 4.5vh;
    color: steelblue;
  }
`;

export default Brewerys;
