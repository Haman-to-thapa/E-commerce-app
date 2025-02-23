import React from 'react'
import { SelectContent } from '@radix-ui/react-select';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { SelectTrigger, SelectValue, Select, SelectItem } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

  const renderInputsByComponentType = (getControlItem) => {
    let element = null;
    const value = formData[getControlItem.name] || ''

    switch (getControlItem.ComponentType) {
      case "input":
        element = <Input
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
          type={getControlItem.type}
          value={value}
          onChange={(event) => setFormData({
            ...formData, [getControlItem.name]: event.target.value,
          })}
        />

        break;
      case "select":
        <Select value={value}
          onValueChange={(value) => setFormData({ ...formData, [getControlItem.name]: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={getControlItem.placeholder} />

          </SelectTrigger>
          <SelectContent>
            {
              getControlItem.options &&
                getControlItem.options.length > 0 ?
                getControlItem.options.map(optionItem => <SelectItem key={optionItem.id}
                  value={optionItem.id}
                >{optionItem.lable}</SelectItem>) : null
            }

          </SelectContent>
        </Select>



        break;
      case "textarea":
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={(event) => setFormData({
              ...formData, [getControlItem.name]: event.target.value,
            })}
          />
        )

        break;
      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) => setFormData({
              ...formData, [getControlItem.name]: event.target.value,
            })}
          />
        )
    }
    return element;
  }


  return (
    <form onSubmit={onSubmit}>

      <div className='flex flex-col gap-3'>
        {
          formControls.map((controlItem) => (
            <div
              className='grid w-full gap-1.5'
              key={controlItem.name}>
              <Label className='mb-1'>
                {controlItem.lable}
              </Label>
              {
                renderInputsByComponentType(controlItem)
              }

            </div>
          ))
        }
      </div>
      <Button
        type='submit'
        className='mt-2 w-full'>{buttonText || "Submit"}</Button>
    </form>
  )
}

export default CommonForm
