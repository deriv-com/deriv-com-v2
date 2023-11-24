import { divIcon, point, type MarkerCluster } from 'leaflet';

export const createClusterCustomIcon = function (cluster: MarkerCluster) {
  return divIcon({
    html: `<span class="cluster-icon w-2500 h-2500 text-body-lg rounded-1500 bg-opacity-black-500 border-solid-black-50 shadow-210 border-200  text-solid-slate-50 flex items-center justify-center ">${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: point(33, 33, true),
  });
};
