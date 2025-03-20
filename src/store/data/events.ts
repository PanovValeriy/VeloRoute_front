import {IEvent} from "../../types/types";

export const dataEventList: IEvent[] = [
  {
    id: 1,
    author:
      {
        id: 1,
        nikName: 'nikName',
      },
    name: 'Сказка',
    startDateTime: new Date(2025, 3, 5, 9, 0),
    startPlace: 'Место старта',
    photoURL: 'https://lh3.googleusercontent.com/pw/AP1GczPVU4op4t5NUFoyfzpQfpLdOxyd1yvTuLRHqY6QtkIpYHx6IY0_u81-OyL5WAwi0C1OyDEjmF_gDU53Zjc8pX718aLfl-yF2nGE0ZEExkJ4RnFYS79sZlu7BigSBPZlCwcJskB5pS3aZ7JH986qVCE=w1280-h720-s-no-gm',
    route: null,
    pointList: 'Точка 1 - Точка 2 - Точка 3 - Точка 4 - Точка 5',
    length: 45,
    tempo:
      {
        id: 3,
        name: 'медленный',
        description: 'Описание медленного темпа',
      },
    typeEvent:
      {
        id: 3,
        name: 'детский',
      },
    trackFileURL: '',
    description:
      'Тут подробное описание события\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczPVU4op4t5NUFoyfzpQfpLdOxyd1yvTuLRHqY6QtkIpYHx6IY0_u81-OyL5WAwi0C1OyDEjmF_gDU53Zjc8pX718aLfl-yF2nGE0ZEExkJ4RnFYS79sZlu7BigSBPZlCwcJskB5pS3aZ7JH986qVCE=w1280-h720-s-no-gm[/IMG]'
  },
  // {
  //   id: 0,
  //   author: '',
  //   name: '',
  //   startDateTime: new Date(),
  //   startPlace: '',
  //   photoURL: '',
  //   route: null,
  //   pointList: '',
  //   length: 0,
  //   tempo: '',
  //   type: '',
  //   trackFileURL: '',
  //   description: ''
  // },
]
