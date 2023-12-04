'use client'

import { useState } from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded'
import LogoutIcon from '@mui/icons-material/Logout'
import Button from '@mui/material/Button'
import Image from 'next/image'

import logo from '../../assets/logo.svg'

import './header.css'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getUserName } from '../../redux/slices/selectors'
import { changeLogIn } from '@/app/redux/slices/mainSlice'
import Link from 'next/link'

const tabs = [
  {
    label: 'контакты',
    href: 'contacts',
    icon: PersonPinIcon
  },
  {
    label: 'расширенный поиск',
    href: 'search',
    icon: ContentPasteSearchIcon
  },
  {
    label: 'учетные записи',
    href: 'accounts',
    icon: ManageAccountsIcon
  },
  {
    label: 'подборка',
    href: 'collection',
    icon: BookmarkAddedIcon
  }
]

export const Header = () => {
  const dispatch = useAppDispatch()

  const userName = useAppSelector(getUserName)

  const [value, setValue] = useState(0)

  const handleChange = (newValue: number) => {
    setValue(newValue)
  }

  const logoutUser = () => {
    dispatch(changeLogIn(false))
  }
  return (
    <header>
      <Image width="200" height="200" src={logo} alt="Follow us on Twitter" />
      <Tabs
        value={value}
      >
        {
          tabs.map((tab, index) => (
            <Link key={tab.label} href={tab.href} onClick={() => {
              handleChange(index)
            }} >
              <Tab label={tab.label} icon={<tab.icon fontSize="small" />} />
            </Link>
          ))
        }

      </Tabs>

      <div className="exitBlock">
        <Button
          color="secondary"
          className="exitButton"
          onClick={logoutUser}
          startIcon={<LogoutIcon fontSize="medium" htmlColor="var(--black)" />}
        >
          Выход
        </Button>
        <p className="userName">{userName}</p>
      </div>
    </header>
  )
}
