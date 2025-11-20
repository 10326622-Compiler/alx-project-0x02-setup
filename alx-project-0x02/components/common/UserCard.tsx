import { UserProps } from '@/interfaces'

   export default function UserCard({ name, email, address, phone, website, company }: UserProps) {
     return (
       <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
         <div className="border-b pb-4 mb-4">
           <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
           <p className="text-sm text-gray-500">{company.name}</p>
         </div>
         
         <div className="space-y-3">
           <div>
             <p className="text-xs font-semibold text-gray-500 uppercase">Email</p>
             <p className="text-gray-700">{email}</p>
           </div>
           
           <div>
             <p className="text-xs font-semibold text-gray-500 uppercase">Address</p>
             <p className="text-gray-700">
               {address.street}, {address.suite}<br />
               {address.city}, {address.zipcode}
             </p>
           </div>
           
           <div>
             <p className="text-xs font-semibold text-gray-500 uppercase">Phone</p>
             <p className="text-gray-700">{phone}</p>
           </div>
           
           <div>
             <p className="text-xs font-semibold text-gray-500 uppercase">Website</p>
             <a 
               href={`https://${website}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-600 hover:text-blue-800"
             >
               {website}
             </a>
           </div>
         </div>
       </div>
     )
   }