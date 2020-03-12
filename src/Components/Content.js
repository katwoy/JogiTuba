import React, {useState, useEffect} from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loading from './Loading';
import './Content.css';

const API_KEY = 'AIzaSyAILPW7QORbTQppl6KS96xWbGlOHf3sftc';

const Content = () => {

  const [channel, setChannel] = useState("placeholder");
  const [yogaVideos, setYogaVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');

  const handleOption = (e) => {
    setChannel(e.currentTarget.value);
  }

  useEffect(() => {
    if (channel !== "placeholder") {
      fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${channel}&key=${API_KEY}&order=date&maxResults=9`)
      .then((response) => response.json())
      .then((responseJson) => {setYogaVideos(responseJson.items); setSelectedVideo(responseJson.items[0].contentDetails.videoId);})
      .catch((error) => {console.log(error)})
    }
  }, [channel])

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <>
      <form>
        <h3 className="form-title">Wybierz, z kim chcesz praktykować</h3>
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
      </form>
      {/* <Loading /> */}
      {(channel !== "placeholder" && selectedVideo === "") && <Loading />}
      {selectedVideo !== "" && <VideoDetail video={selectedVideo}/>}
      {channel !== "placeholder" && <VideoList videos={yogaVideos} handleVideoSelect={handleVideoSelect} />}
    </>
  )
}

export default Content;