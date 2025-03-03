"use client"

import { useState, useEffect } from "react"
import { useParams } from "@node_modules/next/navigation"
import Profile from "@components/Profile"

const MyProfile = () => {
    const [userPost, setUserPost] = useState([]);
    const params = useParams();
    
    useEffect(() => {
      const fetchPosts = async () => {
        if (!params?.id) return;
  
        try {
          const response = await fetch(`/api/users/${params?.id}/posts`);
          const data = await response.json();
          setUserPost(data);
        } catch (error) {
          console.error("Failed to fetch posts:", error);
        }
      };
  
      if (params?.id) fetchPosts();
    }, [params.id]);

    
    
  return (

    <>
    <Profile
      name="Users"
      desc={`Welcome to this user's personalized profile page. Explore user's exceptional
        prompts and be inspired by the power of their imagination`}
      data={userPost}
    />
    </>
  );
}

export default MyProfile