import { use } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'pheralb',
    name: 'Pablo Heraldo',
    isFollowing: true
  },
  {
    userName: 'pelozok',
    name: 'Kevin Daniel Pelozo',
    isFollowing: false
  }
]

export function App (){
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}>
              {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}