import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import booth1 from './friends/booth1.JPG';
import booth2 from './friends/booth2.jpg';
import booth3 from './friends/booth3.JPG';
import booth4 from './friends/booth4.JPG';
import booth5 from './friends/booth5.JPG';
import booth6 from './friends/booth6.JPG';
import booth7 from './friends/booth7.JPG';
import booth8 from './friends/booth8.JPG';
import booth9 from './friends/booth9.JPG';
import booth10 from './friends/booth10.JPG';

import cat1 from './friends/cat1.jpeg';
import cat2 from './friends/cat2.jpeg';
import cat3 from './friends/cat3.jpeg';
import cat4 from './friends/cat4.jpeg';

import friend1 from './friends/friend1.JPEG';
import friend2 from './friends/friend2.JPG';
import friend3 from './friends/friend3.jpeg';
import friend4 from './friends/friend4.jpg';
import friend5 from './friends/friend5.jpeg';

export default function AboutModal() {
    return (
        <Box sx={{ padding: '10px' }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              About me! 😃
            </Typography>
            <Typography variant="body2" gutterBottom>
              Hi! 👋 I'm Amy and I'm currently a 3rd year Commerce/Computer Science student at 
              UNSW. I love the travels and journeys ✈️ I go on with my friends, some being very last minute
              but very worth it (including waking up at 4am to hike and catch the sunrise ☀️).
            </Typography>
            <Typography variant="body2" gutterBottom>
              I like to think I'm more on the introverted side but my MBTI tells me differently (ESFJ)
              probably because I can get pretty embarrassing and loud at times HEHE 😏.
            </Typography>
            <ImageList cols={5}>
              {itemDataFriend.map((item) => (
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
            <Typography variant="body2" gutterBottom>
              I love all things aesthetic, design/art related so my feed is FULL of food art, crotchet (I'm trying to learn),
              fashion and tourist streets 🎨 🌺. I also have a ferocious pet kitten at home (his name is Butter) so now I 
              have a bunch of cat memes on my explore page too. BUT HOW CAN YOU RESIST THIS 🐈
            </Typography>
            <ImageList cols={4}>
              {itemDataCat.map((item) => (
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
            <Typography variant="body2" gutterBottom>
              BTW did I mention how much I loved photobooths? heh 😅.
            </Typography>
            <ImageList cols={5}>
              {itemDataBooth.map((item) => (
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
        </Box>
    );
}

const itemDataFriend = [
  {
    img: friend1,
    title: 'Photo',
  },
  {
    img: friend2,
    title: 'Photo',
  },
  {
    img: friend3,
    title: 'Photo',
  },
  {
    img: friend4,
    title: 'Photo',
  },
  {
    img: friend5,
    title: 'Photo',
  }
];

const itemDataCat = [
  {
    img: cat1,
    title: 'Photo',
  },
  {
    img: cat2,
    title: 'Photo',
  },
  {
    img: cat3,
    title: 'Photo',
  },
  {
    img: cat4,
    title: 'Photo',
  }
];

const itemDataBooth = [
  {
    img: booth1,
    title: 'Photo',
  },
  {
    img: booth2,
    title: 'Photo',
  },
  {
    img: booth3,
    title: 'Photo',
  },
  {
    img: booth4,
    title: 'Photo',
  },
  {
    img: booth5,
    title: 'Photo',
  },
  {
    img: booth6,
    title: 'Photo',
  },
  {
    img: booth7,
    title: 'Photo',
  },
  {
    img: booth8,
    title: 'Photo',
  },
  {
    img: booth9,
    title: 'Photo',
  },
  {
    img: booth10,
    title: 'Photo',
  }
];