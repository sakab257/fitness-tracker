import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

const Notifications = () => {
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button variant={'outline'} className='h-12 w-12'>
                <Bell />
            </Button>
        </PopoverTrigger>
        <PopoverContent className='w-50 text-xs'>
            Aucune notifications...
        </PopoverContent>
    </Popover>
  )
}

export default Notifications