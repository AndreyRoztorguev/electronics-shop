import { Box, Container, Stack, Typography } from '@mui/material';

import PC2 from '@/images/about-us/PC2.jpg';
import PC3 from '@/images/about-us/PC3.jpg';
import PCImage from '@/images/about-us/PC.jpg';
import KeyboardPicture from '@/images/about-us/keyboard.jpg';
import Picture1 from '@/images/about-us/picture-1.jpg';

const AboutUs = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Container maxWidth="lg">
        <Typography variant="h1">About Us</Typography>
      </Container>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ backgroundColor: 'common.black' }}
      >
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            component: 'section',
            justifyContent: 'center',
            pt: '10rem',
            pb: '10rem',
            px: '4rem',
            columnGap: '14rem',
          }}
        >
          <Box maxWidth="28rem" mt={10}>
            <Typography variant="h1" component="summary" color="white" mb={2}>
              A Family That Keeps On Growing
            </Typography>
            <Typography component="p" color="white" variant="body2" mb={3}>
              We always aim to please the home market, supplying great computers
              and hardware at great prices to non-corporate customers, through
              our large Melbourne CBD showroom and our online store.
            </Typography>
            <Typography component="p" color="white" variant="body2">
              Shop management approach fosters a strong customer service focus
              in our staff. We prefer to cultivate long-term client
              relationships rather than achieve quick sales, demonstrated in the
              measure of our long-term success.
            </Typography>
          </Box>
          <Box component="picture" width={470} height={480}>
            <img src={Picture1} alt="" style={{ maxWidth: '100%' }} />
          </Box>
        </Container>
      </Container>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ backgroundColor: 'background.white', color: 'common.black' }}
      >
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            component: 'section',
            justifyContent: 'center',
            pt: '3.75rem',
            pb: '3.75rem',
            px: '4rem',
          }}
        >
          <Box component="picture" sx={{ width: '100%', maxWidth: '777px' }}>
            <img src={KeyboardPicture} alt="" style={{ maxWidth: '100%' }} />
          </Box>

          <Box maxWidth="28rem" mt={10}>
            <Typography variant="h1" component="summary" mb={2}>
              shop.com
            </Typography>
            <Typography component="p" variant="body2" mb={3}>
              Shop is a proudly Australian owned, Melbourne based supplier of
              I.T. goods and services, operating since 1991. Our client base
              encompasses individuals, small business, corporate and government
              organisations. We provide complete business IT solutions, centred
              on high quality hardware and exceptional customer service.
            </Typography>
          </Box>
        </Container>
      </Container>

      <Container
        disableGutters
        maxWidth="xl"
        sx={{ backgroundColor: 'common.black' }}
      >
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            component: 'section',
            justifyContent: 'center',
            pt: '10rem',
            pb: '10rem',
            px: '4rem',
            columnGap: '14rem',
          }}
        >
          <Box maxWidth="28rem" mt={10}>
            <Typography variant="h1" component="summary" color="white" mb={2}>
              You're In Safe Hands
            </Typography>
            <Typography component="p" color="white" variant="body2" mb={3}>
              Experience a 40% boost in computing from last generation. MSI
              Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
              upmost computing power to bring you an unparalleled gaming
              experience.
            </Typography>
            <Typography component="p" color="white" variant="body2">
              *Performance compared to i7-9700. Specs varies by model.
            </Typography>
          </Box>
          <Box component="picture" width={470} height={480}>
            <img src={PCImage} alt="" style={{ maxWidth: '100%' }} />
          </Box>
        </Container>
      </Container>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ backgroundColor: 'background.white', color: 'common.black' }}
      >
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            component: 'section',
            justifyContent: 'center',
            pt: '3.75rem',
            pb: '3.75rem',
            px: '4rem',
            columnGap: '14rem',
          }}
        >
          <Box component="picture" sx={{ width: '100%', maxWidth: '777px' }}>
            <img src={PC2} alt="" style={{ maxWidth: '100%' }} />
          </Box>
          <Box maxWidth="28rem" mt={10}>
            <Typography variant="h1" component="summary" mb={2}>
              We guarantee the highest quality of the products we sell. Several
              decades of successful operation and millions of happy customers
              let us feel certain about that. Besides, all items we sell pass
              thorough quality control, so no characteristics mismatch can
              escape the eye of our professionals.
            </Typography>
          </Box>
        </Container>
      </Container>

      <Container
        disableGutters
        maxWidth="xl"
        sx={{ backgroundColor: 'common.black' }}
      >
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            component: 'section',
            justifyContent: 'center',
            pt: '10rem',
            pb: '10rem',
            px: '4rem',
            columnGap: '14rem',
          }}
        >
          <Box maxWidth="28rem" mt={10}>
            <Typography variant="h1" component="summary" color="white" mb={2}>
              Delivery to All Regions
            </Typography>
            <Typography component="p" color="white" variant="body2" mb={3}>
              We deliver our goods all across Australia. No matter where you
              live, your order will be shipped in time and delivered right to
              your door or to any other location you have stated. The packages
              are handled with utmost care, so the ordered products will be
              handed to you safe and sound, just like you expect them to be.
            </Typography>
          </Box>
          <Box component="picture" width={470} height={480}>
            <img src={PC3} alt="" style={{ maxWidth: '100%' }} />
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export { AboutUs };
