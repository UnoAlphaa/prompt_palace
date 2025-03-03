import Feed from '@components/Feed'


const Home = () => {
  return (
    <section className='w-full flex flex-col flex-center'>
        <h1 className='head_text text-center'>Discover & Share
        <br className='max-md-hidden' />
        <span className='orange_gradient text-center'>AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>Prompt palace is an open-source AI prompting tool for modern world to 
            discover, create and share creative prompts
        </p>
        
        <loading/>
        <Feed />
    </section>
  )
}

export default Home