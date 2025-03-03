"use client"

import { useState } from "react"
import Image from "@node_modules/next/image"
import { useSession } from "@node_modules/next-auth/react"
import { usePathname, useRouter } from "@node_modules/next/navigation"
import Link from "@node_modules/next/link"


const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const {data : session} = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState();

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=> setCopied(''), 3000);
  }

  return (
    <div className="prompt_card">
        <div className="flex items-start justify-between gap-5">
            <Link href={`/profile/${post.creator._id}`} className="flex-1 flex items-center justify-start gap-3 cursor-pointer">
              <Image
              src={post.creator.image}
              alt="image"
              width={30}
              height={30}
              className="rounded-full object-contain"
              />

              <div className="flex flex-col ">
                <h3 className="font-satoshi text-gray-900 font-semibold"
                >{post.creator.username}</h3>
                <p className="font-inter text-sm text-gray-500"
                >{post.creator.email}</p>
              </div>
            </Link>

            <div className="copy_btn" onClick={handleCopy}>
                <Image
                src={
                  copied === post.prompt ? 
                  '/assets/icons/tick.svg' 
                  :'/assets/icons/copy.svg' 
                }
                alt="image"
                width={12}
                height={12}
                />
            </div>
        </div>

        <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
        <p className="blue_gradient text-sm font-inter cursor-pointer" onClick={()=> handleTagClick && handleTagClick(post.tag)}>#{post.tag}</p>
                
        {
          session?.user.id === post.creator._id && pathName === '/profile' && (
            
            <div className="flex flex-center gap-3 mt-5 border-t pt-3 border-gray-300">
              <p
              className="green_gradient text-sm font-inter cursor-pointer"
              onClick={handleEdit}
              >Edit</p>
              <p
              className="orange_gradient text-sm font-inter cursor-pointer"
              onClick={handleDelete}
              >Delete</p>
            </div>
          )
        }
    </div>
  )
}

export default PromptCard