import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { disabledProducts } from '../../../redux/actions'

export default function BtnDisableProduct({ cellValues }) {
    const dispatch = useDispatch()

    async function handleDisable() {
        await dispatch(disabledProducts(cellValues.row.id));
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
