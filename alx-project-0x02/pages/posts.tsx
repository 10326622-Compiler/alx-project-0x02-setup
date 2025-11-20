import { useEffect, useState } from 'react'
   import Header from '@/components/layout/Header'
   import PostCard from '@/components/common/PostCard'
   import Head from 'next/head'
   import { PostProps } from '@/interfaces'

   export default function PostsPage() {
     const [posts, setPosts] = useState<PostProps[]>([])
     const [loading, setLoading] = useState(true)

     useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(data => {
           setPosts(data.slice(0, 12)) // Display first 12 posts
           setLoading(false)
         })
         .catch(error => {
           console.error('Error fetching posts:', error)
           setLoading(false)
         })
     }, [])

     return (
       <>
         <Head>
           <title>Posts - ALX Project</title>
         </Head>
         <Header />
         <div className="min-h-screen bg-gray-50 p-8">
           <h1 className="text-3xl font-bold text-gray-900 mb-8">Posts</h1>
           
           {loading ? (
             <div className="text-center py-12">
               <p className="text-gray-600">Loading posts...</p>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {posts.map(post => (
                 <PostCard
                   key={post.id}
                   id={post.id}
                   userId={post.userId}
                   title={post.title}
                   body={post.body}
                 />
               ))}
             </div>
           )}
         </div>
       </>
     )
   }