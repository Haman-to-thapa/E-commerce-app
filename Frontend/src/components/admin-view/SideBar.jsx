import { ChartNoAxesCombined } from 'lucide-react'
import { BadgeCheck, LayoutDashboard, ShoppingBasket } from "lucide-react";
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { SheetContent, Sheet, SheetHeader, SheetTitle } from '../ui/sheet';


//admin navbar name and icons 

export const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />
  },
  {
    id: "products",
    label: "Products",
    path: '/admin/product',
    icon: <ShoppingBasket />
  },
  {
    id: "orders",
    label: "Orders",
    path: '/admin/order',
    icon: <BadgeCheck />
  }
]


// seperated icons and name in map funtion

const MenuItems = ({ setOpen }) => {

  const navigate = useNavigate()

  return < nav className='mt-8 flex flex-col gap-2' >
    {
      adminSidebarMenuItems.map(menuItems => <div
        key={menuItems.id}
        onClick={() => {
          navigate(menuItems.path)
          setOpen ? setOpen(false) : null
        }}
        className='flex items-center gap-2 rounded-md px-3 py-2 hover:scale-105 hover:font-medium hover:bg-muted cursor-pointer'>
        {menuItems.icon}
        <span>{menuItems.label}</span>

      </div>)
    }
  </nav >
}






const AdminSidebar = ({ open, setOpen }) => {

  const navigate = useNavigate()


  return (<Fragment>
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-64">
        <div>
          <SheetHeader className='border-b'>
            <SheetTitle className='flex gap-2'>
              <ChartNoAxesCombined size={30} />
              <span className='text-2xl font-extrabold'> Admin Panel</span>
            </SheetTitle>
          </SheetHeader>
          <MenuItems setOpen={setOpen} />
        </div>
      </SheetContent>

    </Sheet>

    <aside className='hidden w-64 flex-col border-r bg-background p-6 lg:flex'>
      <div className='flex items-center gap-2 cursor-pointer'
        onClick={() => navigate('/admin/dashboard')}
      >
        <ChartNoAxesCombined size={30} />
        <h1 className='text-2xl font-extrabold'>Admin Panel</h1>

      </div>
      <MenuItems />

    </aside>
  </Fragment>
  )
}

export default AdminSidebar
