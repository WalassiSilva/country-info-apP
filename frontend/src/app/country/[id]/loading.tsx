import Skeleton from '@/components/skeleton'
import React from 'react'

export default function Loading() {
  return (
    <div className='flex flex-col items-center gap-4 '>
      <Skeleton className="w-1/2 h-[36px] rounded-lg mt-6" />
      <Skeleton className="w-[193px] h-[135px] rounded-lg" />
      <Skeleton className="w-[354px] h-[261px] rounded-lg" />
      <Skeleton className="w-1/2 md:p-4 h-[261px] rounded-lg" />
    </div>
  )
}
