import React from 'react'

type Props = {}

import ContentLoader from "react-content-loader"

export default function ProfileContentLoader(props: Props) {
  return (
    <div className='overflow-hidden'>
      <ContentLoader
        speed={2}
        width={1050}
        height={400}
        viewBox="0 0 400 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="5" y="22" rx="5" ry="5" width="220" height="10" />
        <rect x="5" y="48" rx="5" ry="5" width="220" height="10" />
        <rect x="4" y="74" rx="5" ry="5" width="220" height="10" />
        <rect x="5" y="99" rx="5" ry="5" width="220" height="22" />
        <circle cx="16" cy="142" r="8" />
        <rect x="32" y="138" rx="0" ry="0" width="18" height="9" />
      </ContentLoader>
    </div>
  )
}