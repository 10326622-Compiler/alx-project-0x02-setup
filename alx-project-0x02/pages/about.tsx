import Header from '@/components/layout/Header'
// @/components/layout/Header
   import Button from '@/components/common/Button'
   import Head from 'next/head'

   export default function AboutPage() {
     return (
       <>
         <Head>
           <title>About - ALX Project</title>
         </Head>
         <Header />
         <div className="min-h-screen bg-gray-50 p-8">
           <h1 className="text-3xl font-bold text-gray-900 mb-8">About Page</h1>
           <p className="text-gray-600 mb-8">
             Learn more about this project and explore different button styles.
           </p>
           
           <div className="space-y-4">
             <div>
               <h3 className="text-lg font-semibold mb-2">Small Button</h3>
               <Button title="Small Rounded SM" size="small" shape="rounded-sm" />
             </div>
             
             <div>
               <h3 className="text-lg font-semibold mb-2">Medium Button</h3>
               <Button title="Medium Rounded MD" size="medium" shape="rounded-md" />
             </div>
             
             <div>
               <h3 className="text-lg font-semibold mb-2">Large Button</h3>
               <Button title="Large Rounded Full" size="large" shape="rounded-full" />
             </div>
           </div>
         </div>
       </>
     )
   }