import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getStoredResponses, getUserToken, logout, setStoredResponses } from '@/services/auth';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from '@/components/ui/separator';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';


export default function Dashboard() {
  const router = useRouter();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const userToken = getUserToken();
    const storedResponses = getStoredResponses();
    if (!userToken) {
      router.push('/login');
    }

    const latestResponse = storedResponses[storedResponses.length - 1];
    setResponse(latestResponse);

    // Clear stored responses except for the latest one
    const filteredResponses = [latestResponse];
    setStoredResponses(filteredResponses);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div>
      <h1>Welcome to the homepage!</h1>
      <button onClick={handleLogout}>Logout</button>
      <Link href="/">
        <button>Home</button>
      </Link>
      
      <div>
        <h2>Stored Response:</h2>
        {response && <p>{response.firstName}</p>}
      </div>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="overflow-y-auto max-h-full">
          <DialogHeader>
            <DialogTitle className="border-b pb-5 mb-5">About your Page</DialogTitle>
            <div className="grid w-full items-center gap-1.5">
              <Label className="mb-3">Intro Video</Label>
              <Input type="text" placeholder="Video URL" className="w-full border border-gray-300" />
            </div>

            <div className="grid w-full gap-1.5">
              <Label className="mb-3 mt-5">Bio</Label>
              <Textarea placeholder="Add a short bio to let people know more about who you are, what you create and why you're on Dreambacker." className="border-gray-300 w-full min-h-[100px]" />
            </div>

            <div className="grid w-full gap-1.5">
              <Label className="mb-2 mt-5">Social</Label>
              <p className='text-sm text-gray-500'>Help people find you wherever you are. Connect your other accounts to show them on your page. We'll never post on your behalf.</p>
            </div>

            <div className="grid w-full gap-1">
              <div className='flex justify-between mt-3 items-center'>
                <div className='flex items-center space-x-5'>
                  <FacebookIcon />
                  <p>Facebook</p>
                </div>
                <Button variant="outline">Connect</Button>
              </div>

              <div className='flex justify-between mt-3 items-center'>
                <div className='flex items-center space-x-5'>
                  <InstagramIcon />
                  <p>Instagram</p>
                </div>
                <Button variant="outline">Connect</Button>
              </div>

              <div className='flex justify-between mt-3 items-center'>
                <div className='flex items-center space-x-5'>
                  <TwitterIcon />
                  <p>Twitter</p>
                </div>
                <Button variant="outline">Connect</Button>
              </div>

              <div className='flex justify-between mt-3 items-center'>
                <div className='flex items-center space-x-5'>
                  <YoutubeIcon />
                  <p>YouTube</p>
                </div>
                <Button variant="outline">Connect</Button>
              </div>
            </div>

            <div className="flex justify-end pt-4 space-x-3">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  );
}
