import React, {useState} from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyAILPW7QORbTQppl6KS96xWbGlOHf3sftc';

const Content = () => {

  const [channel, setChannel] = useState("placeholder");
  const [yogaVideos, setYogaVideos] = useState([]);
  const [infoDisplay, setInfoDisplay] = useState("none");
  const [selectedVideo, setSelectedVideo] = useState('');

  const handleOption = (e) => {
    setChannel(e.currentTarget.value);
    setInfoDisplay("none");
  }

  const videoSearch = () => {
    if (channel === "placeholder") {
      setInfoDisplay("inline")
    } else {
      fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channel}&part=snippet,id&order=date&maxResults=9`)
      .then((response) => response.json())
      .then((responseJson) => {setYogaVideos(responseJson.items); setSelectedVideo(responseJson.items[0].id.videoId);})
      .catch((error) => {console.log(error)})
    }
  }

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <>
      <form>
        <select value={channel} onChange={handleOption}>
          <option value="placeholder" disabled>wybierz nauczycielkę</option>
          <option value="UCBakkxKoa1gHXTTxf2O-QVQ">Ania Brzegowa / Joga Fusion</option>
          <option value="UC5-zHpWF_75thcj6CY9dFNQ">Patrycja Gawlińska / joginka.pl</option>
          <option value="UCw-HC1NizWhlcFy7UT0kGcQ">Natalia Knopek / simplife.pl</option>
          <option value="UCQTmnNx1Fymydue1xAs19rQ">Gosia Kobus / Anatomia Jogi</option>
          <option value="UCITlHzj4MUzRNM17pdWUWeQ">Gosia Mostowska</option>
          <option value="UCpqYY3zU3PbEPZ_7P-woiAw">Basia Tworek</option>
          <option value="UCzxhVfSsbG08fpSbLOl3O6Q">Agata Ucińska</option>
          <option value="UCRZ3g1sUHp6cj87y1FE1YEQ">Eli Wierkowska / YOGA by Eli</option>
        </select>
        <button onClick={videoSearch}>Pokaż filmy</button>
        <div style={{display: infoDisplay}}>Najpierw wybierz nauczycielkę</div>
      </form>
      <VideoDetail video={selectedVideo}/>
      <VideoList videos={yogaVideos} handleVideoSelect={handleVideoSelect} />
    </>
  )
}

export default Content;