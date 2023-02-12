import styles from './SongCard.module.css'

function SongCard(props) {

    function playSong(audio) {
        console.log(audio)
        audio.play()
    }

    return (
        <>
            <div className={styles.songRow}>
                <img src={props.src} alt="Song cover" />
                <h3>{props.title}</h3>
                <h4>{props.artist}</h4>
                <button onClick={playSong(props.audio)}>
                    Play
                </button>
            </div>
        </>
    )
}

export default SongCard

