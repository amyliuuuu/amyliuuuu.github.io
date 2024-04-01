import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import exec1 from './dir1.jpg';
import exec2 from './dir2.jpg';
import exec3 from './dir3.jpg';

export default function DirImgs() {
    return (
      <ImageList cols={3}>
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
    );
}

const itemData = [
    {
      img: exec1,
      title: 'Exec 1',
    },
    {
      img: exec2,
      title: 'Exec 2',
    },
    {
      img: exec3,
      title: 'Exec 3',
    },
];