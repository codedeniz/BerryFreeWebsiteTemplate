// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill,IconBook,IconBrandGithub,IconListCheck  } from '@tabler/icons-react';


// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBook, // Add the book icon here
  IconBrandGithub,
  IconListCheck,
};


// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-Contact',
      title: 'Contact',
      type: 'item',
      url: '/utils/util-contact',
      icon:icons.IconBook ,
      breadcrumbs: false
    },
    {
      id: 'util-Integration',
      title: 'Integration',
      type: 'item',
      url: '/utils/util-Integration',
      icon: icons.IconBrandGithub,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'util-Form',
      title: 'Form',
      type: 'item',
      url: '/utils/util-Form',
      icon: icons.IconListCheck,
      breadcrumbs: false
    },
  ]
};

export default utilities;
