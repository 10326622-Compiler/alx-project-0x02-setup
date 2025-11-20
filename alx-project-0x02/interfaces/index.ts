export interface CardProps {
     title: string
     content: string
   }

   export interface ButtonProps {
     title: string
     size: 'small' | 'medium' | 'large'
     shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
     onClick?: () => void
   }

    export interface PostProps {
     userId: number
     id: number
     title: string
     body: string
   }

    export interface UserProps {
     id: number
     name: string
     username: string
     email: string
     address: {
       street: string
       suite: string
       city: string
       zipcode: string
     }
     phone: string
     website: string
     company: {
       name: string
     }
   }