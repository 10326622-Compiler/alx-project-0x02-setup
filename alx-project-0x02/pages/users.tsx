import { useEffect, useState } from 'react'
   import Header from '@components/layout/Header'
   import UserCard from '@/components/common/UserCard'
   import Head from 'next/head'
   import { UserProps } from '@/interfaces'

   export default function UsersPage() {
     const [users, setUsers] = useState<UserProps[]>([])
     const [loading, setLoading] = useState(true)

     useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(data => {
           setUsers(data)
           setLoading(false)
         })
         .catch(error => {
           console.error('Error fetching users:', error)
           setLoading(false)
         })
     }, [])

     return (
       <>
         <Head>
           <title>Users - ALX Project</title>
         </Head>
         <Header />
         <div className="min-h-screen bg-gray-50 p-8">
           <h1 className="text-3xl font-bold text-gray-900 mb-8">Users</h1>
           
           {loading ? (
             <div className="text-center py-12">
               <p className="text-gray-600">Loading users...</p>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {users.map(user => (
                 <UserCard key={user.id} {...user} />
               ))}
             </div>
           )}
         </div>
       </>
     )
   }