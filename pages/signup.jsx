import { useState, useEffect } from 'react';
import { login, getStoredResponses, signup } from '@/services/auth';
import { useRouter } from 'next/router';
import { useToast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button';
import { ChevronLeft, Loader2, LogInIcon } from 'lucide-react';
import Link from 'next/link';

export default function SignUp() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [storedResponses, setStoredResponses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const userType = "creator";

  
  const router = useRouter();

  useEffect(() => {
    const responses = getStoredResponses();
    setStoredResponses(responses);
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true before making the login request
    try {
      const response = await signup(firstName, lastName, email, password, phoneNumber, userType);
      console.log('Login response:', response); // Log the response
      toast({
        title: 'Registered Successfully.',
        description: 'Yay!! Nice to meet you',
        // variant: 'destructive',
      });
      router.push('/login');
    } catch (error) {
      // Set the error message from the API response
     
      console.error('Login failed', error);
      toast({
        title: 'There was a problem.',
        description: 'There was an error logging in to your Patreon Account',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false); // Set isLoading back to false after the login attempt is complete
    }
  };
  
  return (
    <div className='relative'>
      <div className='absolute top-7 left-10'>
        <Link href="/">
          <Button variant="ghost" className="flex justify-center items-center border">
            <ChevronLeft className='w-4 h-4 mr-1' />
            <p>Home</p>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center space-y-6 h-screen max-w-md mx-auto">
        
      <div className="flex flex-col justify-center items-center space-y-6">
      <h1 className='font-extrabold text-2xl'>Register</h1>
          <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-4 items-center justify-between">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="rounded-lg px-4 py-3 outline-none h-12 border border-gray-200 w-[18.375rem] xl:w-[13.375rem] placeholder:text-secondary placeholder:text-opacity-40 text-sm focus:border-primary focus:border-2;"
              placeholder="First name"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="rounded-lg px-4 py-3 outline-none h-12 border border-gray-200 w-[18.375rem] xl:w-[13.375rem] placeholder:text-secondary placeholder:text-opacity-40 text-sm focus:border-primary focus:border-2;"
              placeholder="Last name"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg px-4 py-3 outline-none h-12 border border-gray-200 w-[18.375rem] xl:w-[28.063rem] placeholder:text-secondary placeholder:text-opacity-40 text-sm focus:border-primary focus:border-2;"
            placeholder="Email address"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg px-4 py-3 outline-none h-12 border border-gray-200 w-[18.375rem] xl:w-[28.063rem] placeholder:text-secondary placeholder:text-opacity-40 text-sm focus:border-primary focus:border-2;"
            placeholder="Enter password"
          />
          <input
            type="phoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="rounded-lg px-4 py-3 outline-none h-12 border border-gray-200 w-[18.375rem] xl:w-[28.063rem] placeholder:text-secondary placeholder:text-opacity-40 text-sm focus:border-primary focus:border-2;"
            placeholder="phoneNumber"
          />
          <Button onClick={handleSignUp} className="w-full" disabled={isLoading}>{isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogInIcon className='h-4 w-4 mr-2' />}Register</Button>

          

          

          
        </div>
      
          {/* <h1 className='font-extrabold text-2xl'>Register</h1>
            
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="touch-auto rounded-lg px-4 py-3 outline-none h-12 border border-gray-200 w-[18.375rem] xl:w-[28.063rem] placeholder:text-secondary placeholder:text-opacity-40 text-sm focus:border-primary focus:border-2;"
              placeholder="Email address"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="touch-auto	rounded-lg px-4 py-3 outline-none h-12 border border-gray-200 w-[18.375rem] xl:w-[28.063rem] placeholder:text-secondary placeholder:text-opacity-40 text-sm focus:border-primary focus:border-2;"
              placeholder="Enter password"
            />
            <Button onClick={handleLogin} className="w-full" disabled={isLoading}>{isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogInIcon className='h-4 w-4 mr-2' />}Login</Button> */}
            
            

          </div>

    </div>
    
  );
}
