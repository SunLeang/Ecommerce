// src/store/sharedstore.js
import { defineStore } from 'pinia'

export const useSharedStore = defineStore('sharedStore', {
  state: () => ({
    products: [
      // Wall Decor
      {
        id: 1,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor1/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 355,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor1/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor1/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor1/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 2,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor2/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 400,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor2/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor2/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor2/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 3,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor3/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor3/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor3/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor3/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 4,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor3/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor4/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor4/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor4/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 5,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor5/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor5/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor5/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor5/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 6,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor6/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor6/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor6/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor6/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 7,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor7/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor7/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor7/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor7/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 8,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor8/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor8/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor8/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor8/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 9,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor9/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor9/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor9/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor9/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 10,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor10/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor10/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor10/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor10/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 11,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor11/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor11/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor11/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor11/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 12,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor12/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor12/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor12/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor12/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 13,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor13/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor13/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor13/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor13/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 14,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor14/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor14/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor14/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor14/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 15,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor15/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor15/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor15/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor15/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 16,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductImage/Wall Decor16/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Wall Decor16/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor16/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Wall Decor16/p3.png', import.meta.url).href,
        ],
      },
      // Lamps
      {
        id: 17,
        name: 'Lamp 1',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductImage/Lamps1/p1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Lamps1/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps1/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps1/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 18,
        name: 'Lamp 2',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductImage/Lamps2/p1.png', import.meta.url).href,
        rating: 5,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Lamps2/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps2/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps2/p3.png', import.meta.url).href,
        ],
      },
      {
        id: 19,
        name: 'Lamp 3',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductImage/Lamps3/p1.png', import.meta.url).href,
        rating: 5,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Lamps3/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps3/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps3/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps3/p4.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps3/p5.png', import.meta.url).href,
        ],
      },
      {
        id: 20,
        name: 'Lamp 4',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductImage/Lamps4/p1.png', import.meta.url).href,
        rating: 5,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Lamps4/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps4/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps4/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps4/p4.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps4/p5.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps4/p6.png', import.meta.url).href,
        ],
      },
      {
        id: 21,
        name: 'Lamp 5',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductImage/Lamps5/p1.png', import.meta.url).href,
        rating: 5,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Lamps5/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps5/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps5/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps5/p4.png', import.meta.url).href,
        ],
      },
      {
        id: 22,
        name: 'Lamp 6',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductImage/Lamps6/p1.png', import.meta.url).href,
        rating: 5,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Lamps6/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps6/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps6/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps6/p4.png', import.meta.url).href,
        ],
      },
      {
        id: 23,
        name: 'Lamp 7',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductImage/Lamps7/p1.png', import.meta.url).href,
        rating: 5,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Lamps7/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps7/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps7/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps7/p4.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps7/p5.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps7/p6.png', import.meta.url).href,
        ],
      },
      {
        id: 24,
        name: 'Lamp 8',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductImage/Lamps8/p1.png', import.meta.url).href,
        rating: 5,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Lamps8/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps8/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps8/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps8/p4.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Lamps8/p5.png', import.meta.url).href,
        ],
      },
      // Furniture
      {
        id: 25,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductImage/Furniture1/p1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 2,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Furniture1/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture1/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture1/p3.png', import.meta.url).href,
        ],
      },

      {
        id: 26,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductImage/Furniture2/p1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 2,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Furniture2/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture2/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture2/p3.png', import.meta.url).href,
        ],
      },

      {
        id: 27,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductImage/Furniture3/p1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 2,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Furniture3/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture3/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture3/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture3/p4.png', import.meta.url).href,
        ],
      },

      {
        id: 28,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductImage/Furniture4/p1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 2,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Furniture4/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture4/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture4/p3.png', import.meta.url).href,
        ],
      },

      {
        id: 29,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductImage/Furniture5/p1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 2,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Furniture5/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture5/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture5/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture5/p4.png', import.meta.url).href,
        ],
      },

      {
        id: 30,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductImage/Furniture6/p1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 2,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Furniture6/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture6/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture6/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture6/p4.png', import.meta.url).href,
        ],
      },

      {
        id: 31,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductImage/Furniture7/p1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 2,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Furniture7/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture7/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture7/p3.png', import.meta.url).href,
        ],
      },

      {
        id: 32,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductImage/Furniture8/p1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 2,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Furniture8/p1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture8/p2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture8/p3.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Furniture8/p4.png', import.meta.url).href,
        ],
      },
    ],
  }),
})