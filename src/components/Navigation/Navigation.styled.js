import styled from 'styled-components'
import ListItem  from '@mui/material/ListItem'
import ListItemButton  from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';



export const SListItem = styled(ListItem).attrs(() => ({
   dense: true
}))`
   padding: 0;
   font-size: 20px;
   svg {
      fill: ${({theme}) => theme.mode.svgColor};
      width: 40px;
      height: 40px;
   }
`

export const SListItemButton = styled(ListItemButton)`
   padding: 8px;
   border-radius: 9999px;
   padding: 8px 20px;
   margin: 5px 0;
   
   &:hover {
      background-color: rgba(255, 255, 255, 0.1);
   }

`

export const SListItemText = styled(ListItemText)`
   span {
      font-size: 20px;
   }
`

export const SNavLink = styled(NavLink)`
   &.active {
      span {
         font-weight: 600;
      }
   }
`