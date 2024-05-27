import React from 'react'

function About(){
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa vero consequatur eos voluptates alias, quo provident at reprehenderit nesciunt molestiae deleniti cumque. Consequuntur quia dolores odio est minima quo voluptatum fugiat ipsam, mollitia sapiente doloribus atque, maxime ipsa dolor neque? Quod ea fuga vero magni consequatur incidunt velit corporis eum?</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque molestias, modi asperiores facere tempore sed voluptatum nemo doloremque at nisi ratione delectus dolor! Vitae maiores unde laborum quis recusandae, optio consequatur ab! Veniam, quod dolore quam quidem debitis, ratione eius nesciunt sapiente hic numquam asperiores tempora. Unde quos distinctio qui!</p>
        </div>
    </div>
  )
}

export default About