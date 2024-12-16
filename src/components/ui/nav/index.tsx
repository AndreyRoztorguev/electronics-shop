import { Button, Link, List, ListItem, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const items = [
  { label: 'Laptops', to: '/labtop' },
  { label: 'Desktop PCs', to: '/Desktop_PCs' },
  { label: 'Networking Devices', to: '/Networking_Devices' },
  { label: 'Printers & Scanners', to: '/Printers_&_Scanners' },
  { label: 'PC Parts', to: '/PC_Parts' },
  { label: 'All Other Products', to: '/All_Other_Products' },
  { label: 'Repairs', to: '/Repairs' },
];

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
}));

const Nav = () => {
  return (
    <List
      component="nav"
      sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', columnGap: 1 }}
    >
      {items.map(({ label, to }) => {
        return (
          <ListItem key={label} sx={{ maxWidth: 'max-content' }}>
            <Link
              to={to}
              component={NavLink}
              underline="hover"
              variant="button"
              color="textPrimary"
              textTransform="capitalize"
              noWrap
            >
              {label}
            </Link>
          </ListItem>
        );
      })}
      <Button
        variant="outlined"
        color="primary"
        sx={{ minWidth: '7.5rem', whiteSpace: 'nowrap', paddingInline: '2rem' }}
      >
        Our Deals
      </Button>
    </List>
  );
};

export { Nav };
