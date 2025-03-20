import {IRoute} from "../../types/types";

export const dataRouteList: IRoute[] =
[
  {
    id: 1,
    name: 'Стандартная пятнашка',
    photoURL: 'https://lh3.googleusercontent.com/pw/AP1GczM9u5wFus6uRCkAUx7D4MJtODweuyBIaK7b5vRfjFmvUV2er6vJolw9u-dSXhBbLLNBMWMIwBRuTIQ4ML9eu0xGdlOWWkhvn1XgaHHGai057ngVbgE1stH47tOrb1A9H_-MVl9KSbyHintsJl4OtLM=w1178-h888-s-no?authuser=1',
    author: {id: 2, nikName: 'author'},
    length: 15,
    // pavement: {
      asphalt: 5,
      grader: 55,
      soit: 40,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Реадовка - Александровка - Алексино - Деменщина - Михновка - Александровское озеро - Реадовка',
    trackFileURL: 'https://drive.google.com/file/d/1HVRSyBVEIVaPU6wCS5DNqwWv1E1OczOf/view?usp=drive_link',
    description:
      'Маршрут подходит для медленных заездов. Хорошо подходит для вечерних заездов после работы. Небольшое количество оживленных дорог позволяет проезжать данный маршрут с детьми.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczM9u5wFus6uRCkAUx7D4MJtODweuyBIaK7b5vRfjFmvUV2er6vJolw9u-dSXhBbLLNBMWMIwBRuTIQ4ML9eu0xGdlOWWkhvn1XgaHHGai057ngVbgE1stH47tOrb1A9H_-MVl9KSbyHintsJl4OtLM=w1178-h888-s-no?authuser=1[/IMG]\n' +
      'Вариации данного маршрута:\n' +
      '1. Выезд из Реадовки через родник и дачи вместо дороги вдоль речки Ясенная, исключается затяжной подъём к дачам.\n' +
      'Так же данный вариант больше подходит в сырую погоду, т.к. грунтовая дорога вдоль речки может быть грязная.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczNcKPNnjMonoWTpDUVP8lS3UlRFiCGmZa4CWgr3H8skFICQpXv03Co5J721xeI6Fy2PFL-BlI0-YdjP8ev-OyjSL1N3xfAxnUeqeMrLVy-7M0fvP0hOANv9L2CQ_Sflxgzyric3JJJoAtCCOcKxarQ=w1153-h884-s-no?authuser=1[/IMG]\n' +
      '2. Тропинка за речкой на которой есть родник. Данный вариант если нужно попасть к роднику или для разнообразия.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczNdq-kns8_c7HuMdizgNhCHY4GdOkvRWIDP3NklmebkeJ5R-rnKNmfxnc-MqxJzQmZ_YJKr68oHBz9dDDisLa-p1cnYRzPviTIfzOoTrfr6NMinlqBbbw0F5uwWPnPl0Zj-gwH6ktm2Aj6ke0hAvcA=w1153-h886-s-no?authuser=1[/IMG]\n' +
      '3. Проезд до окружной по дачам вместо участка Александровка - Алексино - Окружная, при этом увеличивается протяженность участка по окружной дороге. Можно использовать для разнообразия или если не нравится дорога Александровка - окружная.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczN3aDGmK-qtDD0f0rWdJadJGqHbxS_HnOCnH50kooWvmg10X1a2gTNS_hVZ43AVvOzE1MozEeuImyIvG9u-B9CMKaC2L-vGKP09P-eEQfrVE-bNeyu1fJpmbDY0iEDzcbomrE4n2sa6uTu-rgMGzq8=w1153-h886-s-no?authuser=1[/IMG]\n' +
      '4. Проезд через Хлевищено, исключаются участок около кладбища, который с каждым догом становится все сложнее проезжать и крутой подъём на въезде в Михновку около Церкви.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczMvoWjWiu-mmJ1iObGyqCFtfvEAVTTjpnN_s83brAi9Xt6RjUfvk8JqgNQ7Hvk031wKx5XjSgRKU2JuG8EFoloPhD0k9n43CVaXdlgo7oBbPHaBlQa8JpvnbpMTXz8hn5auLLoacJlxAtkaQSR4GuM=w1158-h886-s-no?authuser=1[/IMG]\n' +
      '5. Проезд по тропинке вдоль Александровского озера вместо Михновки, при этом протяженность маршрута сокращается, но сложность возрастает за счет рельефа данной тропинки и выезда на дорогу Михновка - Александровка\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczOuEotPUUMPcfkoEYTQ9B1eLyKSI4AOEfIBbtZxZgY_abOncQ811MZOogrYxAe4pOmI0tu0XgoZZwPvGsvlauiPWDd-GCwG1ZT2ioEWhObgTMb7yDy0iwKKsR2E8JlGOVcQgIfUunfSqY6XekUSi7s=w1155-h884-s-no?authuser=1[/IMG]\n' +
      '6. Проезд от Александровского озера через тропинку вместо подъема в Александровку. Данный вариант может быть не проезжаем во время подъема воды в р.Ясенная, т.к. затапливает мостик, так же в сырую погоду он мало подходит из мокрой высокой травы и грязной дороги после мостика.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczOK7NQVdE8aNs1EnMdzodHftZWuIvTOxTM8LteSRbb1-xOq8m7zU7H4fue7zWdjePPKFCKSzpw1S8tAoVFXfhPwM9_ph8uXfqqZAFqkQY3kYFeMa1l9K4BLMqBPDXb5O80QwmjeF8k2KIeualtpHsE=w1155-h887-s-no?authuser[/IMG]\n' +
      '7. Если нужно выехать на Краснинское шоссе или грутовая часть основного маршрута грязная, то можно проехать через Верхнеясенный водозабор\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczPPIkFRuQC5zj8fVbM-j3X0JW7gm-6qycbqxEE2GXAAwVVOTRLxNccpQBp57yS1O2iQKMteENincP34EOvTSgln-tnjvfEBbS4nMsyMcGYnhHaWTQTlcFLgkJoQCrKOlenYNvZQQwJVIW1l3cb3U3g=w1155-h887-s-no?authuser=1[/IMG]'
  },
  {
    id: 2,
    name: 'Гусино',
    photoURL: 'https://lh3.googleusercontent.com/pw/AP1GczNlszTnLPTZBcHmoBAX2w9stIBQn42oy6n29aeAKUmjIIgJ8p45TZNQBPhTlkr3SRDGIrLK7i3PxxhXsizw1caN4rb3mc4rf8Od4bzKlnBm0Lg5qBq_z_moKJbY0zRSMSEwAKv4Ct_AuT_F600NefM=w1591-h541-s-no?authuser=1',
    author: {id: 2, nikName: 'author'},
    length: 120,
    // pavement: {
      asphalt: 49,
      grader: 14,
      soit: 35,
      jungle: 2,
//    },
    complexity: {id: 2, name: 'средний'},
    pointList: 'Смоленск - Михновка - Санаторий Борок - Авторемзавод - Коробино - Алексеевка - Гусино - Сырокоренье - Городец - Волково - Сыроквашино - Чекулино - Боровая - Смоленск',
    trackFileURL: 'https://drive.google.com/file/d/1muV6HWNsVbVAAxienqLUgR1mlnDynD7i/view?usp=drive_link',
    description:
      'Данный маршрут полюбился многим велосипедистам Смоленска и стал традиционным для ежегодного прохождения.\n' +
      'Сложность маршрута очень зависит от текущей и предшествующей погоды это особенно проявляется на лесном участке от Алексеевки, песчаной дороги между Варечками и Сырокореньем и на "дороге посланника" (это лесной участок от Сыроквашино).\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczNlszTnLPTZBcHmoBAX2w9stIBQn42oy6n29aeAKUmjIIgJ8p45TZNQBPhTlkr3SRDGIrLK7i3PxxhXsizw1caN4rb3mc4rf8Od4bzKlnBm0Lg5qBq_z_moKJbY0zRSMSEwAKv4Ct_AuT_F600NefM=w1591-h541-s-no?authuser=1[/IMG]\n' +
      'Вариации данного маршрута:\n' +
      '1. Проезд через Вонлярово вместо Авторемзавода. Более интересный маршрут на нем есть озеро, церковь, но добавляется участок дебрей.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczOgjzaHrDG4CHToDXxR_PCw9lk3mGFfVTbQ8Y9zaTvElPQJx6CEEaUAQB1pHwMdwAdvLFFBaiF0sroH5MNrvnjyMxNKWKzB7gHQ9Cqh5cbmyEUKgcwQyqbivusiUBxxrW0Acp8Clpz_-KNnKWDpw6M=w1595-h540-s-no?authuser=1[/IMG]\n' +
      '2. Проезд через Высокий Холм вместо Алексеевки и леса, можно использовать для упрощения маршрута.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczOgjzaHrDG4CHToDXxR_PCw9lk3mGFfVTbQ8Y9zaTvElPQJx6CEEaUAQB1pHwMdwAdvLFFBaiF0sroH5MNrvnjyMxNKWKzB7gHQ9Cqh5cbmyEUKgcwQyqbivusiUBxxrW0Acp8Clpz_-KNnKWDpw6M=w1595-h540-s-no?authuser=1[/IMG]\n' +
      '3. Проезд через Ракиты по грунтам вместо асфальтового участка Городец - Волково. Маршрут удлиняется, незначительно усложняется, для разнообразия можно проехать\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczNnMyedbFIhSlcEHG49c4XlsTNdDfZEaGHXVsYFjR378z8Cv-WrGddK2kkD4fHvVkChXqwEwbah9T_2ihdArzfMfApzBP_e_HnIom0rAQm7uOUr-aZbEnWEXJRGQE98o9V3N6yYMeAzi3jzLtZyipo=w1592-h542-s-no?authuser=1[/IMG]\n' +
      '4. Проехать лес из Волково вместо "дороги посланника". Средне статистически данный участок считается более легким и в прохождении и в ориентировании.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczN0Bgg1BsGviRYn9IUqmk6sHNnBaQ9FHo3jy3eDy5Uo1J5g4RqnaE8TI__1T2s6kVs10MpZtouQJr123ak5OAx1nZlNiCqNBFGY7HXqvXa5P3AEOuzLzrJU-8UibLHbDGf9RU8owv8XxbA5NuQgaso=w1592-h542-s-no?authuser=1[/IMG]\n' +
      '5. Из Чекулино до Телешей ехать по асфальту. Можно использовать для облегчения маршрута или во время раскисших грунтов.\n' +
      '[IMG]https://lh3.googleusercontent.com/pw/AP1GczNCWQcYhCVsAt5bLOwBCKlB5rg_GYYVb478WplQ35muwgRZp0t7gHeQB07JB8t9x2u3oreNicjx6ecidzKE3MSd_P4Pcxp6IUMn1SPbieMekp8WallLi51dr7sTFgPJbVXSa9349twElSilKRBi-uE=w1587-h542-s-no?authuser=1[/IMG]'
  },
  {
    id: 3,
    name: 'Гусино (с заброской)',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 70,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Гусино - Сырокоренье - Городец - Волково - Сыроквашино - Чекулино - Боровая - Смоленск',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 4,
    name: 'Стандартная тридцатка',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 30,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Реадовка - Александровка - Алексино - Деменщина - Михновка - Кореневщина - Дроветчино - Боровая - Ясенная - Краснинскаое шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 5,
    name: 'Сказка',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 40,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Красникнское шоссе - Ясенная - Боровая - оз.Сказка - Красный Бор - Витебское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 6,
    name: 'Чекулино',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 50,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Верхнеясенный водозабор - оз.Александровское - Михновка - Кореневщина - Дроветчино - Деминовка - Телеши - Чекулино - Слизнево - Телеши - Боровая - Ясееная - Краснинское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 7,
    name: 'Катынь Покровская',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 60,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Верхнеясенный водозабор - оз.Александровское - Михновка - Кореневщина - Дроветчино - Деминовка - Слизнево - Чекулино - Катынь Покровская - Уфинье - Слизнево - Телеши - Боровая - Ясееная - Краснинское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 8,
    name: 'Сыроквашино',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 75,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 2, name: 'средний'},
    pointList: 'Верхнеясенный водозабор - оз.Александровское - Михновка - Кореневщина - Дроветчино - Деминовка - Телеши - Каменщина - Зубовщина - Хохлово - Рязаново - Лоево - Корытня - Кончинка - Сыроквашино - Уфинье - Чекулино - Слизнево - Телеши - Боровая - Ясееная - Краснинское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 9,
    name: 'Рябиновая поляна',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 30,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Рославльское шоссе - Рябиновая поляна - Смоленская окружная дорога - Досуговское шоссе - пр-кт Гагарина',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 10,
    name: 'Цыбульники - Сож',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 30,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Рославльское шоссе - Рябиновая поляна - Цыбульники - Сож - Дрюцк - Киевское шоссе - пр-кт Гагарина',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 11,
    name: 'Талашкино - Сож',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 50,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Рославльское шоссе - Пригорское - Талашкино - Бобыри - Сож - Дрюцк - Киевское шоссе - пр-кт Гагарина',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 12,
    name: 'Рай - Дрюцк',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 30,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'пр-кт Гагарина - Киевское шоссе - Миловидово - Рай - Дрюцк - Миловидово - Киевское шоссе - пр-кт Гагарина',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 13,
    name: 'Смоленский Крым',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 40,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 2, name: 'средний'},
    pointList: 'Киевское шоссе - Миловидово - Дрюцк - Сож - Цыбульники - Нагать - Пригорское - оз.Голубое - Знаменка - Борщевщина - Селифоново - Козино - Богородицкое - Рославльское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 14,
    name: 'Муханино - Кощино - Рябцево',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 90,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 2, name: 'средний'},
    pointList: 'Киевское шоссе - Миловидово - Дрюцк - Сож - оз.Муханино - Гевино - Кощино - Яново - Рябцево - Уколово - Бубново - Селифоново - Горяны - Рославльское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 15,
    name: 'Соколья гора - ТЭЦ-2',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 30,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Москоское шоссе - Орловская сортировочная - Колодня - Соколья Гора - Ясная поляна - ТЭЦ-2 - ул.Шейна - ул. Соболева - набережная р.Днепр',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 16,
    name: 'Ольша',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 50,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Витебское шоссе - Верхняя Дубровенка - оз.Подснежники - пруд № 9 - Ольшанский карьер - Пронино - Красный Бор - Витебское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 17,
    name: 'Аполье - Каспля',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 120,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 2, name: 'средний'},
    pointList: 'ул. Кутузова - Печерск - Стабна - Мощинки - Спас-Липки - Сыр-Липки - Аполье - Самолюбово - Гряда - Язвище - Каспля - Верховье - Афоньки - Ольша - Верхняя дубровенка - Витебское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 18,
    name: 'Лелеквинская',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 120,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 2, name: 'средний'},
    pointList: 'Краснинское шоссе - Ракитня - Старое Куприно - Лелеквинская - Волоковая - Агапоново - Верховье - Ольша - Пруд № 9 - Подснежники - Верхняя Дубровенка - Витебское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 19,
    name: 'Лелеквинская (с заброской)',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 80,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id: 1, name: 'легкий'},
    pointList: 'Лелеквинская - Зарубинки - Каспля - Верховье - Ольша - Пруд № 9 - Подснежники - Верхняя Дубровенка - Витебское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  {
    id: 20,
    name: 'Чижево - Демидов - Каспля',
    photoURL: '',
    author: {id: 1, nikName: 'Автор'},
    length: 200,
    // pavement: {
      asphalt: 0,
      grader: 0,
      soit: 0,
      jungle: 0,
//    },
    complexity: {id:3, name:'сложный'},
    pointList: 'Печарск - Стабна - Фефелово - Чижево - Петрищево - Холм - Демидов - Каспля - Верховье - Ольша - Верхняя Дуброверка - Витебское шоссе',
    trackFileURL: '',
    description: 'Описание маршрута и возможных вариантов',
  },
  // {
  //   id: 0,
  //   name: '',
  //   photoURL: '',
  //   author: '',
  //   length: 0,
  //   // pavement: {
  //     asphalt: 0,
  //     grader: 0,
  //     soit: 0,
  //     jungle: 0,
  //   },
  //   complexity: '',
  //   pointList: '',
  //   trackFileURL: '',
  //   description: '',
  // },
]