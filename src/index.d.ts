import { JwtPayload } from 'jsonwebtoken';


interface User {
  id: string;
 name?: string;
  email?: string;
}


declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
       id: string;
       name: string;
       user?: User;
      
    }
    
  }
}