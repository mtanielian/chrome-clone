import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { Divider, IconButton, TextField }  from '@mui/material'
import { ClearOutlined, Mic, SearchOutlined } from '@mui/icons-material'

const FormSearchNav = () => {
  const router = useRouter()
  const inputSearchRef = useRef(null)

  useEffect(() => {
    const q = router.query.q
    inputSearchRef.current.value = q

  }, [router.query])


  const handleSubmit = (event) => {
    event.preventDefault()
    const term = inputSearchRef.current.value
    if (term.trim() !== '') {
      router.push(`/search?q=${term}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoComplete='off'
        inputRef={inputSearchRef}
        sx={{width: "40%", paddingLeft: 5, '& fieldset': {borderRadius: "50px"}}}
        fullWidth
        InputProps={{
          endAdornment: (
            <>
              <IconButton onClick={() => { inputSearchRef.current.value = '' } }>
                <ClearOutlined />
              </IconButton>
              <Divider orientation="vertical" sx={{height: '16px', border: '1px solid #EAEAEA'}} />
              <IconButton onClick={handleSubmit}>
                <SearchOutlined />
              </IconButton>
              <IconButton>
                <Mic />
              </IconButton>
            </>
          )
        }}
      />
    </form>
  )
}

export default FormSearchNav