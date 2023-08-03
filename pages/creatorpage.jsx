import React, { useEffect, useState } from 'react'
import CreatorHeader from '@/components/CreatorHeader'
import Banner from '@/public/Banner.jpg'
import Hero from '@/public/Hero.jpg'
import Banna from '@/public/Banna.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CaseSensitiveIcon, FacebookIcon, HeadphonesIcon, ImageIcon, InstagramIcon, Link, RadioTowerIcon, TwitterIcon, VideoIcon, YoutubeIcon } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { updateDescription } from '@/services/auth';
import { getUserProfile } from '@/services/auth';
import { useToast } from "@/components/ui/use-toast"

function CreatorPage() {
    const { toast } = useToast()
    const [activeTab, setActiveTab] = useState('home');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [desc, setDesc] = useState('');
    const [isEditingMembership, setIsEditingMembership] = useState(false);
    const [membershipPrice, setMembershipPrice] = useState('$5 / month');
    const [membershipDescription, setMembershipDescription] = useState(
      'Access to exclusive content and more.'
    );


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleEditMembership = () => {
      setIsEditingMembership(true);
    };

    const handleSaveMembership = () => {
      // Perform any additional validations if required
    
      // Save the updated membership details using your API or state management mechanism
      // For now, we are just logging the updated details
      console.log('Updated Membership Price:', membershipPrice);
      console.log('Updated Membership Description:', membershipDescription);
    
      // Exit the edit mode
      setIsEditingMembership(false);
    };

    const handleSaveChanges = async () => {
      try {
        // Prepare the description object to send to the API
        const newDescription = {
          bio: description, // Use the value of the 'description' state here
          videoUrl: video, // Add the video URL here if required
        };
    
        // Call the updateDescription function with the new description
        const updatedDescription = await updateDescription(newDescription);
    
        // Optionally, you can update the 'description' state with the new value
        setDescription(updatedDescription.bio);
        setVideo(updatedDescription.videoUrl);
    
        // Optionally, you can show a success message or perform any other actions after successful update
        console.log('Description updated successfully:', updatedDescription);
        toast({
          title: 'Success!!',
          description: 'Your Profile has been changed.',
        });
    
        // Refresh the page after successful update
        window.location.reload();
      } catch (error) {
        // Handle errors, show error message, etc.
        console.error('Failed to update description:', error);
        toast({
          title: 'Error!!',
          description: 'Failed to update your Profile.',
        });
      }
    };    

    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile();
        console.log('User Profile:', userProfile);
        console.log(userProfile.firstName)
    
        // Extract the user's name from the user profile data
        const { name } = userProfile;
        setFirstName(userProfile.firstName);
        setLastName(userProfile.lastName);
        setDesc(userProfile.description.bio);
    
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    useEffect(() => {
      fetchUserProfile();
    }, []);
    
    

    function renderTabContent() {
      if (activeTab === 'home') {
        return (
          // ... Your home tab content ...
          <div className="flex justify-center mt-10 mb-10 space-x-10">
            <Card className="w-2/5 flex flex-col justify-center items-center">
                <div className=''>
                    <Image src={Banna} className='h-[300px] object-cover' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='mt-5 mb-6 text-gray-600 font-semibold'>Getting Started</p>
                    <h1 className='font-semibold text-xl'>Your launch checklist</h1>
                    <p className='mb-10 text-gray-700 text-sm mt-2'>6 simple steps to make sure you're ready to start your Patreon journey.</p>
                </div>
            </Card>

            <Card className="w-1/4 flex flex-col justify-center items-center">
                <div>
                    <h1 className='font-semibold text-xl'>Support</h1>
                </div>
                <div className=''>
                    <h1 className='font-bold text-2xl'>Find Me Something</h1>
                </div>
                <div className='flex flex-col space-y-3 p-8 w-full'>
                    <Input type="text" placeholder="Amount" />
                    <Textarea className="resize-none" placeholder="Say something nice... (optional)" />
                    <Button> Support ₦1000 </Button>
                </div>
            </Card>

            
          </div>
        );
      // Inside the renderTabContent() function
} else if (activeTab === 'membership') {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-10">
      <Card className="w-1/4 flex flex-col justify-center items-center p-7 space-y-3">
        <h1 className='font-bold text-xl'>Membership</h1>
        <h1 className='font-extrabold text-2xl'>$5</h1>
        <p className='font-bold text-lg text-[#717171]'>PER MONTH</p>
        <Button>Join</Button>
      </Card>
    </div>
  );
} else if (activeTab === 'post') {
        return (
          // ... Your about tab content ...
          <h1>Posts</h1>
        );
      }
    }

    
    
    

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <CreatorHeader />
      </div>

        <div className="main-content bg-[#F6F7FA]">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px]">
            <Image src={Banner} layout="fill" objectFit="cover" alt="" />
            <div className="absolute bottom-[-70px] left-1/2 transform translate-x-[-50%]">
              <div className="relative w-32 h-32">
                {/* <Image src="https://github.com/shadcn.png" width="50" height="50" objectFit='cover' alt="" className="absolute inset-0 w-full h-full object-cover rounded-full" /> */}
                <Image src={Hero} alt="" className="absolute inset-0 w-full h-full object-cover rounded-full" />

              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1 justify-center items-center mt-24">
            <h1
              className='font-extrabold text-2xl'
            >
              {firstName} {lastName}
            </h1>
            <p
              className='text-lg text-gray-500'
            >
              {desc}
            </p>

            <p className='text-sm'>200 Supporters</p>


          </div>

          <div className="flex justify-center items-center space-x-8 mt-10 border-b pb-3">
          <button
            onClick={() => handleTabClick('home')}
            className={`tab-button ${activeTab === 'home' ? 'active-tab' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => handleTabClick('membership')}
            className={`tab-button ${activeTab === 'membership' ? 'active-tab' : ''}`}
          >
            Membership
          </button>
          <button
            onClick={() => handleTabClick('post')}
            className={`tab-button ${activeTab === 'post' ? 'active-tab' : ''}`}
          >
            Posts
          </button>
        </div>

        <div>
          {renderTabContent()}
        </div>
        </div>
    </div>
  )
}

export default CreatorPage