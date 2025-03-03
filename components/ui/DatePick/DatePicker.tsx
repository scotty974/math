'use client'

import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DatePickerProps {
  selected: Date
  onChange: (date: Date) => void
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ selected, onChange }) => {
  return (
    <div className="flex justify-center items-center">
      <DatePicker
        selected={selected}
        onChange={(date: Date | null) => {
          if (date) {
            onChange(date)
          }
        }}
        dateFormat="dd/MM/yyyy"
        className="w-full p-3 text-gray-900 bg-white border-2 border-emerald-100 rounded-xl shadow-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover:border-emerald-300"
        calendarClassName="bg-white border border-gray-200 rounded-xl shadow-lg p-3"
        wrapperClassName="w-full"
        popperClassName="z-50"
        showPopperArrow={false}
        disabledKeyboardNavigation
        placeholderText="Sélectionnez une date"
        minDate={new Date()}
        popperPlacement="bottom"
        dayClassName={() => "text-emerald-900 hover:bg-emerald-50 rounded-lg"}
        weekDayClassName={() => "text-emerald-500 font-medium"}
        renderCustomHeader={({
          monthDate,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div className="flex items-center justify-between px-2 py-2 bg-emerald-50 rounded-t-lg">
            <button
              onClick={decreaseMonth}
              className="p-1.5 hover:bg-emerald-100 rounded-lg transition-colors"
            >
              ←
            </button>
            <span className="font-semibold text-emerald-700">
              {monthDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
            </span>
            <button
              onClick={increaseMonth}
              className="p-1.5 hover:bg-emerald-100 rounded-lg transition-colors"
            >
              →
            </button>
          </div>
        )}
      />
    </div>
  )
}

export default CustomDatePicker