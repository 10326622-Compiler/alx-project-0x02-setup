import { useState } from 'react'
   import Header from '@/components/layout/Header'
   import Card from '@/components/common/Card'
   import PostModal from '@/components/common/PostModal'
   import Head from 'next/head'

   interface Post {
     title: string
     content: string
   }

   export default function HomePage() {
     const [isModalOpen, setIsModalOpen] = useState(false)
     const [posts, setPosts] = useState<Post[]>([
       { title: "Welcome", content: "This is a reusable card component." },
       { title: "Next.js", content: "A powerful React framework." },
       { title: "TypeScript", content: "Type-safe development." }
     ])

     const handleAddPost = (title: string, content: string) => {
       setPosts([...posts, { title, content }])
     }

     return (
       <>
         <Head>
           <title>Home - ALX Project</title>
         </Head>
         <Header />
         <div className="min-h-screen bg-gray-50 p-8">
           <div className="flex justify-between items-center mb-8">
             <h1 className="text-3xl font-bold text-gray-900">Home Page</h1>
             <button
               onClick={() => setIsModalOpen(true)}
               className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
             >
               Add New Post
             </button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {posts.map((post, index) => (
               <Card key={index} title={post.title} content={post.content} />
             ))}
           </div>
         </div>
         <PostModal
           isOpen={isModalOpen}
           onClose={() => setIsModalOpen(false)}
           onSubmit={handleAddPost}
         />
       </>
     )
   }