import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <div>
        <h1>Features</h1>
        <p>This project is an experiment to see how a modern app, with features like auth, subscriptions, 
        API routes, and static pages would work in Next.js 13 app dir.</p>
        <div className='grid grid-cols-3'>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
        </div>
        <p>Taxonomy also includes a blog and a full-featured documentation site built using Contentlayer and MDX.</p>
    </div>
  )
}

export default Features