import {
  Button,
  Container,
  Divider,
  Grid2,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  styled,
  SvgIcon,
  Typography,
} from '@mui/material';

import AmericanExpressIcon from '@/icons/american-express.svg?react';
import DiscoverIcon from '@/icons/discover.svg?react';
import FbIcon from '@/icons/fb.svg?react';
import InstIcon from '@/icons/inst.svg?react';
import MasterCardIcon from '@/icons/mastercard.svg?react';
import PayPalIcon from '@/icons/paypal.svg?react';
import VisaIcon from '@/icons/visa.svg?react';

const Input = styled(InputBase)(({ theme }) => ({
  flexBasis: '24rem',
  height: '100%',
  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.common.white,
    opacity: 1,
  },
  '& .MuiInputBase-input': {
    flexGrow: 1,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    border: '2px solid',
    borderColor: theme.palette.common.white,
    padding: '0.6rem 1rem',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // '&:focus': {
    //   borderColor: 'red',
    // },
    // ...theme.applyStyles('dark', {
    //   backgroundColor: 'red',
    //   borderColor: '#2D3843',
    // }),
  },
}));

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      component="footer"
      sx={{ backgroundColor: '#020203' }}
    >
      <Container maxWidth="lg" sx={{ pt: '50px' }}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack flexDirection="column" rowGap={1} mb="2.8rem">
            <Typography color="white" variant="h2" component="p">
              Sign Up To Our Newsletter.
            </Typography>
            <Typography color="white" variant="body2">
              Be the first to hear about the latest offers.
            </Typography>
          </Stack>
          <Stack
            flexDirection="row"
            columnGap={2}
            alignItems="baseline"
            flexGrow={1}
            justifyContent="flex-end"
            height="3rem"
          >
            {/* <TextField
              placeholder="Your Email"
              variant="filled"
              sx={
                {
                  // '.MuiOutlinedInput-root': {
                  //   '.MuiOutlinedInput-notchedOutline': {
                  //     borderColor: 'white',
                  //   },
                  // },
                  // '& .MuiOutlinedInput-notchedOutline': {
                  //   borderColor: 'white',
                  // },
                  // '&:hover .MuiOutlinedInput-notchedOutline': {
                  //   borderColor: 'white',
                  // },
                  // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  //   borderColor: 'white',
                  // },
                  // width: '25rem',
                }
              }
              slotProps={{
                input: {
                  placeholder: 'Your Email',
                  sx(theme) {
                    return {
                      color: theme.palette.common.white,
                      input: {
                        paddingBlock: '11px',
                      },
                    };
                  },
                },
                select: {
                  disableUnderline: true,
                  // variant: 'outlined',
                  sx: {
                    borderColor: '#fff',
                  },
                },
              }}
            /> */}
            <Input placeholder="Your Email" />
            <Button
              size="large"
              variant="contained"
              sx={{ flexBasis: '9.4rem', height: '100%' }}
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid2 size={{ xs: 2, sm: 4, md: 2.5 }}>
            <List>
              <ListSubheader
                sx={{ background: 'transparent', mb: 2 }}
                disableGutters
              >
                <Typography>Information</Typography>
              </ListSubheader>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#About_Us"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    About Us
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#About_Zip"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    About Zip
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#policy"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Privacy Policy
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#terms"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Terms
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Orders and Returns"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Orders and Returns
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Contact Us"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Contact Us
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Contact Us"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Advanced Search
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Contact Us"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Newsletter Subscription
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 4, md: 2.5 }}>
            <List>
              <ListSubheader
                sx={{ background: 'transparent', mb: 2 }}
                disableGutters
              >
                <Typography>PC Parts</Typography>
              </ListSubheader>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#CPUS"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    CPUS
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Add On Cards"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Add On Cards
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Hard Drives"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Hard Drives (internal)
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Graphic Cards"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Graphic Cards
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Keyboards / Mice"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Keyboards / Mice
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Cases / Power Supplies / Cooling"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Cases / Power Supplies / Cooling
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#RAM"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    RAM (Memory)
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Software"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Software
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Speakers / Headsets"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Speakers / Headsets
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Motherboards"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Motherboards
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 4, md: 2 }}>
            <List>
              <ListSubheader
                sx={{ background: 'transparent', mb: 2 }}
                disableGutters
              >
                <Typography>Desktop PCs</Typography>
              </ListSubheader>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Custom PCs"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Custom PCs
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Servers"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Servers
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#MSI All-in-One PCs"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    MSI All-in-One PCs
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#HP / Compaq PCs"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    HP / Compaq PCs
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#ASUS PCs"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    ASUS PCs
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Tech PCs"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Tech PCs
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 4, md: 2 }}>
            <List>
              <ListSubheader
                sx={{ background: 'transparent', mb: 2 }}
                disableGutters
              >
                <Typography>Laptops</Typography>
              </ListSubheader>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Everybody Use Laptops"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Everybody Use Laptops
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#MSI Workstation Series"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    MSI Workstation Series
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#MSI Prestige Series"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    MSI Prestige Series
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Tablets and Pads"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Tablets and Pads
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Netbooks"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Netbooks
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#Intinity Gaming Laptops"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Intinity Gaming Laptops
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
            <List>
              <ListSubheader
                sx={{ background: 'transparent', mb: 2 }}
                disableGutters
              >
                <Typography>Address</Typography>
              </ListSubheader>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#address"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Address: 1234 Street Adress City Address, 1234
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#phones"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    Phones: (00) 1234 5678
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#tabletime"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    We are open: Monday-Thursday: 9:00 AM - 5:30 PM Friday: 9:00
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#tabletime"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    AM - 6:00 PM Saturday: 11:00 AM - 5:00 PM
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  disableGutters
                  component="a"
                  href="#email"
                  sx={{ p: 0 }}
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        sx(theme) {
                          return {
                            color: theme.palette.common.white,
                          };
                        },
                      },
                    }}
                  >
                    E-mail: shop@gmail.com
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
        </Grid2>
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          sx={{
            marginY: '2rem',
            borderWidth: '1px',
            borderColor: 'white',
            opacity: 0.2,
          }}
        />
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack flexDirection="row" flex={1}>
            <IconButton>
              <SvgIcon component={FbIcon} inheritViewBox />
            </IconButton>
            <IconButton>
              <SvgIcon component={InstIcon} inheritViewBox />
            </IconButton>
          </Stack>
          <Stack flexDirection="row" flex={1}>
            <IconButton color="primary">
              <SvgIcon component={PayPalIcon} inheritViewBox />
            </IconButton>
            <IconButton color="secondary">
              <SvgIcon component={VisaIcon} inheritViewBox />
            </IconButton>
            <IconButton color="info">
              <SvgIcon component={MasterCardIcon} inheritViewBox />
            </IconButton>
            <IconButton color="success">
              <SvgIcon component={DiscoverIcon} inheritViewBox />
            </IconButton>
            <IconButton color="warning">
              <SvgIcon component={AmericanExpressIcon} inheritViewBox />
            </IconButton>
          </Stack>
          <Typography variant="caption" color="textSecondary" pb={3}>
            Copyright © 2020 Shop Pty. Ltd.
          </Typography>
        </Stack>
      </Container>
    </Container>
  );
};

export { Footer };
