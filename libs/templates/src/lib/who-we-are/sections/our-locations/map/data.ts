import { type LatLngTuple } from 'leaflet';
import { ReactNode } from 'react';
type MarkerType = {
  geocode: LatLngTuple;
  popUp: ReactNode;
};

export const markers: MarkerType[] = [
  {
    geocode: [2.9236693, 101.6549227],
    popUp: 'Hello, You are checking CyberJaya',
  },
  {
    geocode: [2.2004016, 102.2331595],
    popUp: 'Hello, You are checking Malacca',
  },
  {
    geocode: [4.593701, 101.0895038],
    popUp: 'Hello, You are checking IPoh',
  },
  {
    geocode: [48.8691849, 2.3335829],
    popUp: 'Hello, You are checking Paris',
  },
  {
    geocode: [35.9036321, 14.4611238],
    popUp: 'Hello, You are checking Malta',
  },
  {
    geocode: [34.6879722, 33.0462942],
    popUp: 'Hello, You are checking Limassol',
  },
  {
    geocode: [49.4542364, -2.5360567],
    popUp: 'Hello, You are checking Guernsey',
  },
  {
    geocode: [52.510727, 13.3735239],
    popUp: 'Hello, You are checking Berlin',
  },
  {
    geocode: [51.4585868, -0.9731481],
    popUp: 'Hello, You are checking Reading',
  },
  {
    geocode: [5.2811108, 115.2454091],
    popUp: 'Hello, You are checking Labuan',
  },
  {
    geocode: [1.280318, 103.8495296],
    popUp: 'Hello, You are checking Singapore',
  },
  {
    geocode: [22.2983734, 114.1784666],
    popUp: 'Hello, You are checking Hong Kong',
  },
  {
    geocode: [-17.7385359, 168.3143194],
    popUp: 'Hello, You are checking Vanuatu',
  },
  {
    geocode: [25.071088, 55.143643],
    popUp: 'Hello, You are checking Dubai',
  },
  {
    geocode: [31.9641962, 35.9058831],
    popUp: 'Hello, You are checking Amman',
  },
  {
    geocode: [-1.9530975, 30.0933412],
    popUp: 'Hello, You are checking Kigali',
  },
  {
    geocode: [-25.2935118, -57.5786752],
    popUp: 'Hello, You are checking Asunción',
  },
  {
    geocode: [-25.4921861, -54.636521],
    popUp: 'Hello, You are checking Ciudad del Este',
  },
  {
    geocode: [19.2993618, -81.3818281],
    popUp: 'Hello, You are checking Cayman Islands',
  },
  {
    geocode: [18.4239669, -64.6187593],
    popUp: 'Hello, You are checking Road Town',
  },
];
