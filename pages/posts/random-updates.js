import Link from 'next/link';
import styles from '../../styles/SecondPost.module.css';
import Avatar from '../avatar';

// data
const reactArray = [
    { topic: 'Unit 2 Done!', description: 'they say it was a hard unit, if that was hard what is next?'},
    { topic: 'NextJS', description: 'what is with those props? why so confusing?'},
    { topic: 'CSS', description: 'to sass or not to sass, those are the videos i am watching right now'},
]

export default function RandomUpdates() {
    const reactArrayDisplay = reactArray.map((obj, idx) => {
        return (
            <div className={styles.card} key={idx}>
                <h3>{obj.topic}</h3>
                <p>{obj.description}</p>
            </div>
        )
    })

    return (
        <div className={styles.container}>
            <h1>Updates</h1>

            <div className={styles.grid}>
                {reactArrayDisplay}
            </div>
        </div>
    )
}