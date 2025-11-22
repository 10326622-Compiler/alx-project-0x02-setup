import Head from 'next/head'
import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import { type UserProps } from '@/interfaces'

interface UsersPageProps {
  users: UserProps[]
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users - ALX Project</title>
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Users</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}