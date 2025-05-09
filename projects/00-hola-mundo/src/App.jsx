import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
  return (
    <section className='tw-section'>
      <TwitterFollowCard isFollowing userName="midudev" name="Miguel Ángel Durán" />
      <TwitterFollowCard isFollowing={false} userName="pheralb" name="Pablo Hernández" />
      <TwitterFollowCard isFollowing={false} userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard isFollowing userName="pelozok" name="Kevin Daniel Pelozo" />
    </section>
  )
}