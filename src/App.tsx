import { useEffect, useState } from 'react'

import { Select } from 'Components'
import { SelectOptionProps } from 'Types/SelectTypes'
import { useIntersectionObserver } from 'Hooks'

const LIMIT = 5

function App() {
  const [selectedOption, setSelectedOption] = useState<SelectOptionProps>({ label: '', value: '' })
  const [productOptions, setProductOptions] = useState<SelectOptionProps[]>([])
  const [isFetchingProducts, setIsFetchingProducts] = useState(true)
  const [totalItems, setTotalItems] = useState(0)

  const handleSelect = (option: SelectOptionProps) => {
    setSelectedOption(option)
  }

  const transformProductToSelectOptions = (products: { title: string; id: number }[]) => {
    if (!products) return []

    return products?.map((product) => {
      return {
        label: product?.title,
        value: product?.id,
      }
    })
  }

  const { lastEntryRef, setHasMore, setPage, page } = useIntersectionObserver(isFetchingProducts)

  useEffect(() => {
    if (totalItems === 0) return
    if (!isFetchingProducts) {
      setHasMore(productOptions?.length < totalItems)
    }
  }, [productOptions, totalItems])

  const getSkipValue = () => {
    return (page - 1) * LIMIT
  }

  console.log({ length: productOptions?.length, skiper: getSkipValue() })

  const fetchAndSetProducts = async () => {
    try {
      setIsFetchingProducts(true)
      const response = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${getSkipValue()}`)
      const data = await response.json()

      setProductOptions((prev) => [...prev, ...transformProductToSelectOptions(data?.products)])
      setTotalItems(data?.total)
    } catch (error) {
      alert('Something went wrong')
      console.log({ error })
    } finally {
      setIsFetchingProducts(false)
    }
  }

  useEffect(() => {
    fetchAndSetProducts()
  }, [page])

  console.log({ page })

  return (
    <div className='p-20'>
      <div className='block w-52'>
        <span className='block mb-2 text-sm'>Select product</span>
        <Select
          options={productOptions}
          selected={selectedOption}
          placeholder='Select product'
          handleSelect={handleSelect}
          isFetchingOptions={isFetchingProducts}
          lastOptionRef={lastEntryRef}
        />
      </div>
    </div>
  )
}

export default App
