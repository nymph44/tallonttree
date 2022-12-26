import React from 'react'
import Header from '../../components/ui/Header'
import { user } from '../../data/config'
export default function index() {
  return <Header title={'Agenda'} user={user.name} />
}
