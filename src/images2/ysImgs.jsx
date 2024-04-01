import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from './img1.JPG';
import img2 from './img2.jpg';
import img3 from './img3.JPG';
import img4 from './img4.JPG';
import img5 from './img5.JPG';
import img6 from './img6.jpg';
import img7 from './img7.JPG';
import img8 from './img8.JPG';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.JPG';

export default function YsImgs() {
    return (
        <Box sx={{height: 450, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
    );
}

const itemData = [
    {
      img: img1,
      title: 'Image 1',
    },
    {
      img: img2,
      title: 'Image 2',
    },
    {
      img: img3,
      title: 'Image 3',
    },
    {
        img: img4,
        title: 'Image 4',
    },
    {
        img: img5,
        title: 'Image 5',
    },
    {
        img: img6,
        title: 'Image 6',
    },
    {
        img: img7,
        title: 'Image 7',
    },
    {
        img: img8,
        title: 'Image 8',
    },
    {
        img: img9,
        title: 'Image 9',
    },
    {
        img: img10,
        title: 'Image 10',
    },
    {
        img: img11,
        title: 'Image 11',
    },
];