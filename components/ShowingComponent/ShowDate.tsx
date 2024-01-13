'use client'
import { selectGlobalDate } from '@/redux/features/globalDate/globalDateSlice'
import { useAppSelector } from '@/redux/hooks'
import moment from 'moment'
import { useEffect, useRef } from 'react'

type Props = {}

const ShowDate = (props: Props) => {
	const globalDate = useAppSelector(selectGlobalDate)
    const globalDateRef = useRef<Date>(globalDate)

	useEffect(() => {
		globalDateRef.current = globalDate
	}, [globalDate])

	return globalDateRef.current ? <div className='text-2xl'>{moment(globalDateRef.current).format("DD/MM/YYYY")}</div> : <div className='text-2xl'>Loading...</div>
}

export default ShowDate
