import { getUserToken, logout } from '@/services/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userToken = getUserToken();
    setToken(userToken);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className='pt-3 pb-3 border-b'>
      <div className='max-w-5xl mx-auto flex justify-between items-center'>
        <Link href="/">
          <h1 className='font-bold text-2xl'>FindMeSomething</h1>
        </Link>
        {!token ? (
          <div className='flex space-x-3'>
            <Link href='/login'>
              <button className='py-2 px-5 border rounded-md bg-[#121215] text-white font-semibold'>
                Sign in
              </button>
            </Link>
            <Link href='/signup'>
            <button className='py-2 px-5 border border-gray-600 rounded-md bg-[white] text-black font-semibold'>
              Sign up
            </button>
          </Link>
          </div>
          
        ) : (
            <div className='flex space-x-3'>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage className="cursor-pointer" src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span className='cursor-pointer'>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span className='cursor-pointer'>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      <Link href="/creatoradmin" className='cursor-pointer'>Creator Admin</Link>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      <Link href="/creatorpage" className='cursor-pointer'>Creator Page</Link>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span className='cursor-pointer'>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span className='cursor-pointer' onClick={handleLogout}>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* <button onClick={handleLogout} className='py-2 px-5 border rounded-md bg-[#121215] text-white font-semibold'>
                Log Out
              </button> */}
            </div>
        )}
      </div>
    </div>
  );
}

export default Header;
