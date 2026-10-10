const musicURL = `https://elbon-eastmage.github.io/wdd231/final/data/music.json`;

export async function getMusic() {
    try {
        const answer = await fetch(musicURL);

        if (!answer.ok) {
            throw new Error(`Failed to retrieve music metadata. Server Status: ${answer.status}`);
        }

        const data = await answer.json();
        return data.music;

    } catch (error) {
        console.error(error);
    }
}