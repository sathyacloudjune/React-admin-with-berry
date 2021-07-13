import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Colors',
    to: '/theme/colors',
    icon: <CIcon name="cil-drop" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'products',
    to: '/products',
    icon: <CIcon name="cil-puzzle" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'All Products',
        to: '/products/all-products',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Add New Products',
        to: '/products/add-new-products',
      },
    ],
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Reports',
    to: '/reports',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
]

export default _nav
