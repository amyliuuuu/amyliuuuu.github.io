import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// illustrator
import ill1 from './creativeImg/ban1.png';
import ill2 from './creativeImg/ban2.png';
import ill4 from './creativeImg/ban4.png';
import ill7 from './creativeImg/ban7.png';
import ill9 from './creativeImg/ban9.png';
import ill10 from './creativeImg/ban10.png';
import ill11 from './creativeImg/ban11.png';
import ill12 from './creativeImg/ban12.png';


// canva
import can3 from './creativeImg/ban3.png';
import can6 from './creativeImg/ban6.png';
import can8 from './creativeImg/ban8.png';
import can13 from './creativeImg/ban13.png';
import can14 from './creativeImg/ban14.png';

// logo 
import logo from './creativeImg/CNY.JPG';

// merch 
import merch from './creativeImg/merchban5.png';
import hoodie from './creativeImg/Hoodieban15.png';

// yearbook
import book1 from './creativeImg/book1.png';
import book2 from './creativeImg/book2.png';
import book3 from './creativeImg/book3.png';
import book4 from './creativeImg/book4.png';
import book5 from './creativeImg/book5.png';

export default function CreativeProjs() {
  return (
    <>
    <Box sx={{ padding: '16px' }}>
        <Typography variant="h6" gutterBottom>
            Facebook event banners using Adobe Illustrator
        </Typography>
        <ImageList cols={3}>
            {itemDataIll.map((item) => (
            <ImageListItem key={item.img}>
                <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
            ))}
        </ImageList>
        <Typography variant="h6" gutterBottom>
          Facebook event banners using Canva
        </Typography>
        <ImageList cols={3}>
            {itemDataCan.map((item) => (
            <ImageListItem key={item.img}>
                <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
            ))}
        </ImageList>
        <Typography variant="h6" gutterBottom>
            Chinese New Year Logo
        </Typography>
        <img src={logo} alt="logo" style={{ maxWidth: '200px', maxHeight: '100%' }}></img>
        <Typography variant="h6" gutterBottom>
            Merch Drop and CSESoc Hoodie 
        </Typography>
        <ImageList cols={2}>
            {itemData.map((item) => (
            <ImageListItem key={item.img}>
                <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
            ))}
        </ImageList>
        <Typography variant="h6" gutterBottom>
            Yearbook pages designed on Canva
        </Typography>
        <ImageList cols={3}>
            {itemDataBook.map((item) => (
            <ImageListItem key={item.img}>
                <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
            ))}
        </ImageList>
    </Box>
    </>
  );
}

const itemDataBook = [
  {
    img: book1,
    title: 'Image 1',
  },
  {
    img: book2,
    title: 'Image 2',
  },
  {
    img: book3,
    title: 'Image 3',
  },
  {
    img: book4,
    title: 'Image 4',
  },
  {
    img: book5,
    title: 'Image 5',
  }
];

const itemDataIll = [
    {
      img: ill1,
      title: 'Image 1',
    },
    {
      img: ill2,
      title: 'Image 2',
    },
    {
      img: ill4,
      title: 'Image 3',
    },
    {
      img: ill7,
      title: 'Image 4',
    },
    {
      img: ill9,
      title: 'Image 5',
    },
    {
      img: ill10,
      title: 'Image 6',
    },
    {
      img: ill11,
      title: 'Image 7',
    },
    {
      img: ill12,
      title: 'Image 8',
    }
];

const itemDataCan = [
  {
    img: can3,
    title: 'Image 1',
  },
  {
    img: can6,
    title: 'Image 2',
  },
  {
    img: can8,
    title: 'Image 3',
  },
  {
    img: can13,
    title: 'Image 4',
  },
  {
    img: can14,
    title: 'Image 5',
  }
];

const itemData = [
  {
    img: merch,
    title: 'Image 1',
  },
  {
    img: hoodie,
    title: 'Image 2',
  }
];