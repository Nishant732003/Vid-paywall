"use client"

import { Button } from '@/components/ui/button';
import { useCheckpremium } from '@/lib/hooks/users/use-check-premium'
import React from 'react'

const VideoPlayer = () => {
    const {
        data: isPremium,
        isPending,
        isError
    } = useCheckpremium();
    
    if (isPending) return <div>Loading ....</div>
    if (isError) return <div>Error loading video</div>
    if (!isPremium) {
        return <div>
            <p>Upgrade to premium to watch this video</p>
            <Button
                
                onClick={() => {
                    alert("please upgrade");
                }}
                className="w-full mt-4"
            >Upgrade</Button>
            
        </div>
    }
    
  return (
      <iframe src="https://iframe.mediadelivery.net/embed/320480/bf3aa1b6-f5e9-427a-a623-e18abcb977ee?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style={{
              border: 0,
              position: "absolute",
              height: "100%",
              top: 0,
              width: "100%",


          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen={true}>
      </iframe>
  )
}

export default VideoPlayer;