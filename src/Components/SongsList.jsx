import clbCover from '../assets/clbCover.jpg'

import thrillerCover from '../assets/thrillerCover.png'
import hoheyCover from '../assets/hoheyCover.png'
import SongCard from './SongCard'

import LadyInMyLife from '../assets/songs/LadyInMyLife.mp3'
import hoHey from '../assets/songs/HoHey.mp3'
import RaceMyMind from '../assets/songs/RaceMyMind.mp3'

import styles from './SongsList.module.css'

let songs = [
    {
        id: 's1',
        artist: 'Michael Jackson',
        title: 'Lady In My Life',
        cover: thrillerCover,
        audio: new Audio(LadyInMyLife)
    },
    {
        id: 's2',
        artist: 'Drake',
        title: 'Race My Mind',
        cover: clbCover,
        audio: new Audio(RaceMyMind)
    }, {
        id: 's3',
        artist: 'The Lumineers',
        title: 'Ho Hey',
        cover: hoheyCover,
        audio: new Audio(hoHey)
    }
]


const SongsList = () => {


    return (
        <div className={styles.songContainer}>
            {songs.map(song => {
                return (
                    <SongCard key={song.id} src={song.cover} title={song.title} artist={song.artist} audio={song.audio}/>
                )
            })
            }
        </div>
    )
}

export default SongsList
