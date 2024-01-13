'use client'
import DayGridPlugin from '@fullcalendar/daygrid'
import InteractionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import moment from 'moment'
import { useAppDispatch } from '@/redux/hooks'
import { retrieveSomethingFromASpecificDate } from '@/redux/features/globalDate/globalDateSlice'

type Props = {}

const NavBar = (props: Props) => {
    const dispatch = useAppDispatch()

    const handleDateClick = (arg:any) => {
        // console.log(moment(arg.date).format("DD/MM/YYYY"))
        dispatch(retrieveSomethingFromASpecificDate(arg.date))
    }

	return (
		<nav className='h-[5rem] w-full border-b-2 flex items-center px-5 uppercase text-2xl justify-between'>
			<h1>Full Calendar</h1>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant={'outline'}>Get Date</Button>
				</PopoverTrigger>
				<PopoverContent className='w-full'>
					<div className=''>
						<FullCalendar
                            plugins={[DayGridPlugin, InteractionPlugin]}
                            dateClick={handleDateClick}
                        />
					</div>
				</PopoverContent>
			</Popover>
		</nav>
	)
}

export default NavBar
