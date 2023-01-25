import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { disableUser } from '../../../redux/actions'

export default function BtnDisableUser({ cellValues }) {
  const dispatch = useDispatch()

  async function handleDisable() {
    await dispatch(disableUser(cellValues.row.id));
    window.location.reload();
  }

  return (
    <Button
      variant="contained"
      color={cellValues.row.isActive ? "success" : "error"}
      onClick={() => handleDisable(cellValues)}>
      {cellValues.row.isActive ? "Activado" : "Desactivado"}
    </Button>
  )
}
