import React, { useEffect, useState } from 'react'
import CreatorHeader from '@/components/CreatorHeader'
import Banner from '@/public/Banner.jpg'
import Hero from '@/public/Hero.jpg'
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

function CreatorAdmin() {
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
          <div className="flex flex-col justify-center items-center mt-10 mb-10">
            <Card className="w-2/5 flex flex-col justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                    <p className='mt-5 mb-6 text-gray-600 font-semibold'>Getting Started</p>
                    <h1 className='font-semibold text-xl'>Your launch checklist</h1>
                    <p className='mb-10 text-gray-700 text-sm mt-2'>6 simple steps to make sure you are ready to start your Patreon journey.</p>
                </div>
            </Card>

            {/* Profile Photo */}
            <Card className="w-2/5 flex flex-col justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='mt-5 mb-6 font-semibold text-xl'>Add a profile photo</h1>
                    <p className='mb-3 text-gray-700 text-sm mt-2'>Make it easier for people to find your page by adding a photo.</p>
                    <Button className="mb-5">Add photo</Button>
                </div>
            </Card>

            {/* Describe page */}
            <Card className="w-2/5 flex flex-col justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='mt-5 mb-6 font-semibold text-xl'>Describe your page</h1>
                    <p className='mb-3 text-gray-700 text-sm mt-2'>Let people know who you are and what you willl be using Patreon for.</p>
                    <Dialog>
                        <DialogTrigger className='border px-4 py-2 mb-4 bg-[#0F172A] rounded-md text-white'>Add info</DialogTrigger>
                        <DialogContent className="overflow-y-auto max-h-full">
                        <DialogHeader>
                            <DialogTitle className="border-b pb-5 mb-5">About your Page</DialogTitle>
                            <div className="grid w-full items-center gap-1.5">
                            <Label className="mb-3">Intro Video</Label>
                            <Input type="text" value={video} onChange={(e) => setVideo(e.target.value)} placeholder="Video URL" className="w-full border border-gray-300" />
                            </div>

                            <div className="grid w-full gap-1.5">
                            <Label className="mb-3 mt-5">Bio</Label>
                            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add a short bio to let people know more about who you are, what you create and why you're on Dreambacker." className="border-gray-300 w-full min-h-[100px]" />
                            </div>

                            <div className="grid w-full gap-1.5">
                            <Label className="mb-2 mt-5">Social</Label>
                            <p className='text-sm text-gray-500'>Help people find you wherever you are. Connect your other accounts to show them on your page. We will never post on your behalf.</p>
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
                            <Button onClick={handleSaveChanges}>Save</Button>
                            </div>
                        </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </Card>

            {/* Create first post */}
            <Card className="w-2/5 flex flex-col justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='mt-5 mb-6 font-semibold text-xl'>Create your first post</h1>
                    <p className='mb-3 text-gray-700 text-sm mt-2 text-center w-3/4'>Create a post to introduce yourself and give people a taste of what exclusive content they can expect from your Patreon.</p>
                    <Dialog>
                        <DialogTrigger className='border px-4 py-2 mb-4 bg-[#0F172A] rounded-md text-white'>Add post</DialogTrigger>
                        <DialogContent className="overflow-y-auto max-h-full">
                        <DialogHeader>
                            <DialogTitle className="border-b pb-5 mb-5">What are you creating?</DialogTitle>
                            <div className="grid grid-cols-2 gap-14 xl:grid-cols-3">
                                <div onClick={() => window.open(`/textpage`, "_blank")} className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
                                    <CaseSensitiveIcon className='w-5 h-5'/>
                                    <p>Text</p>
                                </div>
                                <div onClick={() => window.open(`/videopage`, "_blank")} className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
                                    <VideoIcon className='w-5 h-5' />
                                    <p>Video</p>
                                </div>
                                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
                                    <HeadphonesIcon className='w-5 h-5' />
                                    <p>Audio</p>
                                </div>
                                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
                                    <Link className='w-5 h-5' />
                                    <p>Link</p>
                                </div>
                                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
                                    <ImageIcon className='w-5 h-5' />
                                    <p>Image</p>
                                </div>
                                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer">
                                    <RadioTowerIcon className='w-5 h-5' />
                                    <p>Livestream</p>
                                </div>
                            </div>
                            
                        </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </Card>

            {/* Publish Page */}
            <Card className="w-2/5 flex flex-col justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='mt-5 mb-6 font-semibold text-xl'>Publish your page</h1>
                    <p className='mb-3 text-gray-700 text-sm mt-2 text-center w-3/4'>This is it! It is time to go live with your page.</p>
                    <Button className="mb-5">Publish page</Button>
                </div>
            </Card>

          </div>
        );
      // Inside the renderTabContent() function
} else if (activeTab === 'membership') {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-10">
      {isEditingMembership ? (
        <Card className="w-2/5 flex flex-col justify-start p-5">
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">Monthly Price</h1>
            <Input
              value={membershipPrice}
              onChange={(e) => setMembershipPrice(e.target.value)}
              className="mb-3 font-semibold text-xl"
            />
            <Textarea
              value={membershipDescription}
              onChange={(e) => setMembershipDescription(e.target.value)}
              className="mb-5 text-gray-700 text-sm"
            />
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setIsEditingMembership(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveMembership}>Save</Button>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="w-2/5 flex flex-col justify-start p-5">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl">{membershipPrice}</h1>
            <p className="mt-2 text-gray-600 font-semibold">0 patrons</p>
            <p className="text-gray-700 text-sm mt-2">{membershipDescription}</p>
            <p
              className="mb-5 text-sm mt-2 text-blue-500 cursor-pointer text-right"
              onClick={handleEditMembership}
            >
              Edit
            </p>
          </div>
        </Card>
      )}
    </div>
  );
} else if (activeTab === 'about') {
        return (
          // ... Your about tab content ...
          <h1>About</h1>
        );
      }
    }

    
    
    

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <CreatorHeader />
      </div>

        <div className="main-content bg-[#F6F7FA]">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[400px] 2xl:h-[400px]">
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
              className='font-bold text-xl'
            >
              {firstName} {lastName}
            </h1>
            <p
              className='text-gray-500'
            >
              {desc}
            </p>

            <Sheet>
              <SheetTrigger asChild>
                <Button>Edit Profile</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you are done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      First Name
                    </Label>
                    <Input id="name" value="Daniel" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Last Name
                    </Label>
                    <Input id="name" value="Ukaji" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button onClick={handleSaveChanges}>Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>


          </div>

          <div className="flex justify-center items-center space-x-8 mt-10 border-b pb-3">
            <button
              onClick={() => handleTabClick('home')}
              className={activeTab === 'home' ? 'active-tab' : ''}
            >
              Home
            </button>
            <button
              onClick={() => handleTabClick('membership')}
              className={activeTab === 'membership' ? 'active-tab' : ''}
            >
              Membership
            </button>
            <button
              onClick={() => handleTabClick('about')}
              className={activeTab === 'about' ? 'active-tab' : ''}
            >
              About
            </button>
          </div>

          <div >
            {renderTabContent()}
          </div>
        </div>
    </div>
  )
}

export default CreatorAdmin