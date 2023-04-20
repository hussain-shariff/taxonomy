import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <div className='flex flex-col gap-5 py-10'>
        <h1 className='md:text-6xl text-3xl font-bold tracking-tighter'>Features</h1>
        <p className='md:text-xl text-gray-600 tracking-tight'>This project is an experiment to see how a modern app, with features like auth, subscriptions, 
        API routes, and static pages would work in Next.js 13 app dir.</p>
        <div className='grid md:grid-cols-3 gap-4'>
            <FeatureCard
                icon='nextjs2.svg'
                name='Next.js 13'
                description='App dir, Routing, Layouts, Loading UI and API routes.'/>
            <FeatureCard
                icon='reactjs2.svg'
                name='React 18'
                description='Server and Client Components. Use hook.'/>
            <FeatureCard
                icon='database.svg'
                name='Database'
                description='ORM using Prisma and deployed on PlanetScale.'/>
            <FeatureCard
                icon='component.svg'
                name='Components'
                description='UI components built using Radix UI and styled with Tailwind CSS.'/>
            <FeatureCard
                icon='auth.svg'
                name='Authentication'
                description='Authentication using NextAuth.js and middlewares.'/>
            <FeatureCard
                icon='sub.svg'
                name='Subscription'
                description='Free and paid subscriptions using Stripe.'/>
            
        </div>
        <p className='md:text-xl text-gray-600 tracking-tight'>Taxonomy also includes a blog and a full-featured documentation site built using Contentlayer and MDX.</p>
    </div>
  )
}

export default Features