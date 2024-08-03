import { useSelector } from 'react-redux'
import { Backdrop, CircularProgress } from '@mui/material'

import { IRootState } from '../types/root-state'

function LoadingFullScreen() {
  const isLoading = useSelector((state: IRootState) => state.app.isLoading)

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default LoadingFullScreen