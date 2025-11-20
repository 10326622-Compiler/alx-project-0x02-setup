import Head from 'next/head'

   export default function Home() {
     return (
       <>
         <Head>
           <title>ALX Next.js Project</title>
         </Head>
         <div className="min-h-screen flex items-center justify-center bg-gray-50">
           <div className="text-center">
             <h1 className="text-4xl font-bold text-gray-900 mb-4">
               Welcome to ALX Next.js Project
             </h1>
             <p className="text-xl text-gray-600">
               Building modern web applications with Next.js, TypeScript, and Tailwind CSS
             </p>
           </div>
         </div>
       </>
     )
   }