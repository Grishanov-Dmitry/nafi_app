'use client'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import LogoutIcon from '@mui/icons-material/Logout'
import Button from '@mui/material/Button'
import Image from 'next/image'

import logo from '../../assets/logo.svg'

import './header.css'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getActiveTab, getUserName } from '../../redux/slices/selectors'
import { changeLogIn, setActiveTab } from '@/app/redux/slices/mainSlice'
import Link from 'next/link'
import { headerTabs } from '@/app/constants'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const dispatch = useAppDispatch()

  const pathname = usePathname()

  useEffect(() => {
    const activeTab = headerTabs.find((tab) => pathname?.includes(tab.href))

    if (activeTab !== undefined) {
      dispatch(setActiveTab(activeTab.id))
    }
  }, [])

  // useEffect(() => {
  //   // Send a request to the API route
  //   fetch('/api/example')
  //     .then(async (response) => await response.json())
  //     .then((data) => { setMessage(data.message) })
  //     .catch((error) => { console.error('Error:', error) })
  // }, [])

  const userName = useAppSelector(getUserName)
  const activeTab = useAppSelector(getActiveTab)

  const handleChange = (newValue: number) => {
    dispatch(setActiveTab(newValue))
  }

  const logoutUser = () => {
    dispatch(changeLogIn(false))
  }
  return (
    <header>
      <Image width="200" height="200" src={logo} alt="Follow us on Twitter" />
      <Tabs
        value={activeTab}
      >
        {
          headerTabs.map((tab, index) => (
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
