import { AddContactBlock } from '../AddContactBlock/AddContactBlock'
import { ContactCard } from '../ContactCard/ContactCard'
import { ContactsTable } from '../ContactsTable/ContactsTable'
import { SearchMenu } from '../SearchMenu/SearchMenu'
import { useAppSelector } from '@/app/redux/hooks'
import { getActiveContactId } from '@/app/redux/slices/selectors'

export const ContactsPage = () => {
  const activeContactId = useAppSelector(getActiveContactId)

  if (activeContactId) {
    return <ContactCard />
  }

  return (
    <div className='h-full flex'>
      <nav className='p-3 w-44'>
        <AddContactBlock />
        <SearchMenu />
      </nav>
      <ContactsTable />
    </div>
  )
}
