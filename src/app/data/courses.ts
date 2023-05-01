import { Curso } from '../curso';

export const COURSES: Curso[] = [
  {
    id: 1,
    name: 'TypeScript Desde Cero',
    startDate: 'September 29, 2019',
    description:
      'Lleva JavaScript al siguiente nivel con tipado estático y programación orientado a objetos',
    price: 25.99,
    rating: 4.5,
    imageUrl: 'assets/images/typescript.png',
  },
  {
    id: 2,
    name: 'Angular Desde Cero',
    startDate: 'September 4, 2019',
    description: 'Aprende el framework con más demanda del mercado',
    price: 29.99,
    rating: 4.7,
    imageUrl: 'assets/images/angular.png',
  },
  {
    id: 3,
    name: 'Formularios y APIs con Angular',
    startDate: 'Octubre 20, 2019',
    description:
      'Aprende a consumir APIs Rest y a gestionar formularios con Angular',
    price: 23.5,
    rating: 3.9,
    imageUrl: 'assets/images/angular.png',
  },
];
