import React, { useState } from 'react';
import CreatorHeader from '@/components/CreatorHeader';
import { Card } from '@/components/ui/card';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { EyeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPost } from '@/services/auth';

function TextPage() {
  const [title, setTitle] = useState("");
  const [creationReason, setCreationReason] = useState("");

  const handleCreatePost = async () => {
    try {
      // Prepare the data for the new post
      const newPost = {
        id: "your-id-here",
        title: title,
        description: creationReason, // Get the plain text from the EditorState
        type: "your-post-type",
        link: "your-post-link",
        viewers: "public",
        tier: "your-tier",
        earlyAccess: true,
        textPreview: "your-text-preview",
      };

      // Call the createPost function with the new post data
      const createdPost = await createPost(newPost);

      // Optionally, you can handle the response or show a success message here
      console.log('Post created successfully:', createdPost);
    } catch (error) {
      // Handle errors, show error message, etc.
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div>
      <CreatorHeader />
      <section className='max-w-5xl mx-auto flex flex-col mt-14'>
        <div className='flex justify-between items-center mb-10'>
          <p className='text-3xl font-medium'>Create text post</p>
          <div className='flex items-center space-x-2'>
            <button className='border px-6 py-2.5 rounded-md bg-[#CCD7E8]'><EyeIcon className='w-5 h-5' /></button>
            <Button onClick={handleCreatePost}>Publish now</Button>
          </div>
        </div>

        <div className='flex space-x-5'>
          <Card className="w-full">
            <div className='p-8 flex flex-col space-y-5'>
              {/* Use input fields to allow users to enter their titles and creation reasons */}
              <input
                type="text"
                className='font-bold text-2xl text-black outline-none'
                placeholder="Add Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className='h-44'>
                <textarea
                  type="text"
                  className='text-gray-400 w-full h-full outline-none'
                  placeholder="Why do you create?"
                  value={creationReason}
                  onChange={(e) => setCreationReason(e.target.value)}
                />
              </div>
              <div className='flex justify-between items-center border-b border-t py-5'>
                <p className='font-medium'>Attachments</p>
                <p className='text-[#183FA5]'>Upload</p>
              </div>
            </div>
          </Card>

          <div>
            <Card className="p-8 w-[320px]">
              <div className=''>
                <h1>Who can see this post?</h1>
                <div className='mt-5 flex flex-col'>
                  <RadioGroup defaultValue="comfortable" className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" className="w-6 h-6" />
                      <Label htmlFor="r1">Public</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" className="w-6 h-6" />
                      <Label htmlFor="r2">Patrons only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="compact" id="r3" className="w-6 h-6" />
                      <Label htmlFor="r3">Select tier</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextPage;