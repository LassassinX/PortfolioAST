import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import Background from '@/components/Background'
import {Game} from 'ts-itchio-api'


async function getGames(): Promise<{
	games: Game[]
}> {
	const res = await fetch('https://itch.io/api/1/f35EALADD0uw497fSMeGtqOr9RFUJuL1eNoD67Ur/my-games')
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const gameData = (await getGames()).games

	return (
		<main className='flex flex-col h-full text-white'>
			<Background />
			<Carousel gameData={gameData} />
		</main>
	)
}
