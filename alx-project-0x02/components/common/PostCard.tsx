import { PostProps } from '@/interfaces'

   export default function PostCard({ title, body, userId }: PostProps) {
     return (
       <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
         <div className="flex items-center justify-between mb-3">
           <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
             User {userId}
           </span>
         </div>
         <h3 className="text-xl font-semibold text-gray-900 mb-3 capitalize">
           {title}
         </h3>
         <p className="text-gray-600 leading-relaxed">{body}</p>
       </div>
     )
   }