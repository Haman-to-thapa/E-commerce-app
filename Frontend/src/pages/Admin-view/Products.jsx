import ProductImageUpload from '@/components/admin-view/image-upload';
import CommonForm from '@/components/common/Form'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductFormElements } from '@/config';
import { Fragment, useState } from 'react';


// initialFormData function create 
const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: ""
};
const AdminProduct = () => {

  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const [imageFile, setImageFile] = useState(null)
  const [uploadedImageUrl, setUpladedImageUrl] = useState('')


  function onSubmit(event) {
    event.preventDefault()
  }

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>

      </div>
      <Sheet
        open={openCreateProductsDialog} onOpenChange={() => {
          setOpenCreateProductsDialog(false);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              Add New Product
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUpladedImageUrl={setUpladedImageUrl}
          />
          <div className='py-6'>
            <CommonForm
              formControls={addProductFormElements}
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText='Add' />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  )
}

export default AdminProduct
