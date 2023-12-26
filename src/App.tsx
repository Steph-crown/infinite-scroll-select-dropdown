import { useEffect, useState } from 'react'

import { Select } from 'Components'
import { SelectOptionProps } from 'Types/SelectTypes'

function App() {
  const [selectedOption, setSelectedOption] = useState<SelectOptionProps>({ label: '', value: '' })
  const [productOptions, setProductOptions] = useState<SelectOptionProps[]>([])

  const handleSelect = (option: SelectOptionProps) => {
    setSelectedOption(option)
  }

  const options: SelectOptionProps[] = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
  ]

  const fetchAndSetProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    console.log({ data })
  }

  useEffect(() => {
    fetchAndSetProducts()
  }, [])

  return (
    <div className='p-20'>
      <div className='block w-52'>
        <span className='block mb-2 text-sm'>Select product</span>
        <Select options={options} selected={selectedOption} placeholder='Select product' handleSelect={handleSelect} />
      </div>
    </div>
  )
}

export default App
