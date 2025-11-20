import { CardProps } from '@/interfaces'

   export default function Card({ title, content }: CardProps) {
     return (
       <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
         <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
         <p className="text-gray-600">{content}</p>
       </div>
     )
   }