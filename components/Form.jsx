import React from 'react'
import Link from '@node_modules/next/link'

const Form = ({type,submitting,post,setPost,handleSubmit}) => {


  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc max-w-md text-left'>
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform
      </p>

      <form
      onSubmit={handleSubmit}
      className='mt-10 max-w-2xl w-full flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-gray-700 text-base'>
            Your AI prompt
          </span>
          <textarea
          value={post.prompt}
          onChange={(e)=>setPost({...post, prompt : e.target.value})}
          placeholder='write your prompt here'
          required
          className='form_textarea'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-gray-700 text-base'>
            Tag {' '}
            <span className='font-normal'>(#product, #webdev, #designs)</span>
          </span>
          <input
          value={post.tag}
          onChange={(e)=>setPost({...post, tag: e.target.value})}
          placeholder='#tag'
          required
          className='form_input'
          />
        </label>
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href='/' className='text-sm text-gray-500'>
              Cancel
            </Link>
            <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
              {submitting?`${type}...`:type}
            </button>
          </div>
      </form>
    </section>
  )
}

export default Form