import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import VideoList from './VideoList';
// import Loading from './Loading';
import './Content.css';
import teacher from '../img/teacher.png';

const API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;

const Content = () => {

  const [channel, setChannel] = useState("placeholder");
  const [yogaVideos, setYogaVideos] = useState([]);
  const [firstVideo, setFirstVideo] = useState("");

  const handleOption = (e) => {
    setChannel(e.currentTarget.value);
  }

  useEffect(() => {
    if (channel !== "placeholder") {
      fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${channel}&key=${API_KEY}&order=date&maxResults=9`)
      .then((response) => response.json())
      .then((responseJson) => {setYogaVideos(responseJson.items); setFirstVideo(responseJson.items[0].contentDetails.videoId)})
      .catch((error) => {console.log(error)})
    }
  }, [channel])

  return (
    <div className="content-container">
      <Link to='/' className="back-to-start"><div>&#8672; Wróć na stronę startową</div></Link>
      <form className="form">
        {
          channel === "placeholder" ? 
          <h3 className="form-title">Wybierz, z kim chcesz praktykować</h3> :
          <h3 className="form-title-change">Zmień nauczycielkę</h3>
        }
        <div className="select">
          <select value={channel} onChange={handleOption}>
            <option value="placeholder" disabled>wybierz nauczycielkę</option>
            <option value="UUBakkxKoa1gHXTTxf2O-QVQ">Ania Brzegowa / Joga Fusion</option>
            <option value="UU5-zHpWF_75thcj6CY9dFNQ">Patrycja Gawlińska / joginka.pl</option>
            <option value="UUw-HC1NizWhlcFy7UT0kGcQ">Natalia Knopek / simplife.pl</option>
            <option value="UUQTmnNx1Fymydue1xAs19rQ">Gosia Kobus / Anatomia Jogi</option>
            <option value="UUITlHzj4MUzRNM17pdWUWeQ">Gosia Mostowska</option>
            <option value="UUpqYY3zU3PbEPZ_7P-woiAw">Basia Tworek</option>
            <option value="UUzxhVfSsbG08fpSbLOl3O6Q">Agata Ucińska</option>
            <option value="UURZ3g1sUHp6cj87y1FE1YEQ">Eli Wierkowska / YOGA by Eli</option>
          </select>
          </div>
      </form>
      {
        channel === "placeholder" &&
        <div className="form-image">
          <img src={teacher} alt="teacher"/>
        </div>}
      {/* <Loading /> */}
      {/* {channel !== "placeholder" && <Loading />} */}
      {channel !== "placeholder" && <VideoList videos={yogaVideos} first={firstVideo} />}
    </div>
  )
}

export default Content;