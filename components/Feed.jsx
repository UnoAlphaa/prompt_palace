"use client"


import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'


const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
        {
          data.map((post)=>(
            <PromptCard 
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
            />
          ))
        }
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  

  const handleSearchChange = (e) => {
     // setSearchText(e.target.value)
     const text = e.target.value;
     setSearchText(text);
 
     const filtered = posts.filter((post) => 
       post.creator?.username.toLowerCase().includes(text.toLowerCase()) || 
       post.tag?.toLowerCase().includes(text.toLowerCase()) ||
       post.prompt?.toLowerCase().includes(text.toLowerCase())
     );
 
     setFilteredPosts(filtered);
  }

  const handleTagClick = (tag) => {
    setSearchText(tag);
    const filtered = posts.filter((post)=>
      post.tag?.toLowerCase().includes(tag.toLowerCase())
    );

    setFilteredPosts(filtered)
  };

  useEffect(()=>{
    const fetchPost = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
      setFilteredPosts(data);
    }

    fetchPost();
  },[])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
        type="text"
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        />
      </form>


      <PromptCardList 
        data = {filteredPosts}
        handleTagClick = {handleTagClick}
      />

    </section>
  )
}

export default Feed