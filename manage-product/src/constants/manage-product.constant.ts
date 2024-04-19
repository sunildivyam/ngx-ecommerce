import { Tab } from '@annuadvent/ngx-common-ui/tabs';

export const MANAGE_PRODUCT_API_URLS_PROVIDER = 'apiUrls';

export const flowTabs: Array<Tab> = [
  {
    name: 'basics',
    title: 'Basics',
    active: true
  },
  {
    name: 'categories',
    title: 'Groups'
  },
  {
    name: 'images',
    title: 'Images'
  },
  {
    name: 'sizes',
    title: 'Sizes'
  },
  {
    name: 'prices',
    title: 'Prices'
  },
  {
    name: 'qtys',
    title: 'Qty'
  },
  {
    name: 'offers',
    title: 'Offers'
  },
  {
    name: 'dispatch',
    title: 'Dispatch Period'
  },
  {
    name: 'publish',
    title: 'Publish'
  }
];
