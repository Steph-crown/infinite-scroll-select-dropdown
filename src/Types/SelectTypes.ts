export type SelectOptionProps = {
  label: string
  value: string | number | undefined
}

export type SelectProps = {
  options: SelectOptionProps[] // an array of the options.
  selected?: SelectOptionProps // the selected option.
  handleSelect: (option: SelectOptionProps) => void // function that is called when an option is selected.
  placeholder?: string
  isFetchingOptions?: boolean
  isSearchable?: boolean
  searchInput?: string
  lastOptionRef?: (node: Element | null) => void
  setSearchInput?: React.Dispatch<React.SetStateAction<string>>
}
