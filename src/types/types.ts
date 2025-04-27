export interface IGetListParam {
  page?: number
  limit?: number
}


// Характер покрытия
export interface IPavement {
  asphalt: number;        // асфальт
  grader: number;         // грейдер
  soit: number;           // грунт
  jungle: number;         // дебри
}

// Автор
export interface IAuthor {
  id: number;             // идентификатор автора
  nikName: string;        // nikName автора
}

// Сложность маршрута
export interface IComplexity {
  id: number;             // идентификатор сложности
  name: string;           // название сложности
}

// Темп
export interface ITempo {
  id: number;             // идентификатор темпа
  name: string;           // название темпа
  description: string;    // описание темпа
}

// Типы мероприятий
export interface ITypeEvent {
  id: number;             // идентификатор типа мероприятия
  name: string;           // название типа мероприятия
}

// Маршрут
export interface IRoute {
  id: number;             // идентификатор маршрута
  author: IAuthor;        // автор
  name: string;           // название маршрута
  trackFileURL: string;   // ссылка на файл с треком
  pointList: string;      // нитка маршрута
  photoURL: string;       // ссылка на фотографию
  description: string;    // описание маршрута
  length: number;         // протяженность
  complexity: IComplexity;// сложность
  asphalt: number;        // асфальт
  grader: number;         // грейдер
  soil: number;           // грунт
  jungle: number;         // дебри
}

// Маршрут сокращенный (для списка)
export interface IRouteShort {
  id: number;             // идентификатор маршрута
  author: IAuthor;        // автор
  name: string;           // название маршрута
  photoURL: string;       // ссылка на фотографию
  length: number;         // протяженность
  complexity: IComplexity;// сложность
  asphalt: number;        // асфальт
  grader: number;         // грейдер
  soil: number;           // грунт
  jungle: number;         // дебри
}

// Отчет
export interface IReport {
  id: number;             // идентификатор отчета
  author: IAuthor;         // автор
  date: Date;             // дата поездки
  name: string;           // название отчета
  route: IRoute | null;   // маршрут
  event: IEvent | null;   // мероприятие
  photoURL: string;       // ссылка на фотографию
  body: string;           // тело отчета
}

// Отчет сокращенный (для списка)
export interface IReportShort {
  id: number;             // идентификатор отчета
  author: IAuthor;        // автор
  date: Date;             // дата поездки
  name: string;           // название отчета
  photoURL: string;       // ссылка на фотографию
}

// Событие
export interface IEvent {
  id: number;             // идентификатор мероприятия
  author: IAuthor;        // автор
  route: IRoute | null;   // маршрут
  name: string;           // название
  photoURL: string;       // ссылка на фотографию
  typeEvent: ITypeEvent;  // тип мероприятия (ПВД, ПРД, ПД и т.п.)
  trackFileURL: string;   // ссылка на файл с треком
  pointList: string;      // нитка маршрута
  description: string     // описание
  length: number;         // протяженность
  tempo: ITempo;          // темп
  startDateTime: Date;    // дата и время старта
  startPlace: string;     // место старта
}

// Событие сокращенное (для списка)
export interface IEventShort {
  id: number;             // идентификатор мероприятия
  author: IAuthor;        // автор
  route: IRoute | null;   // маршрут
  name: string;           // название
  photoURL: string;       // ссылка на фотографию
  typeEvent: ITypeEvent;  // тип мероприятия (ПВД, ПРД, ПД и т.п.)
  length: number;         // протяженность
  tempo: ITempo;          // темп
  startDateTime: Date;    // дата и время старта
  startPlace: string;     // место старта
}

// Новость
export interface INews {
  oper: number;           // вид операции [Добавлена, Обновлена]
  type: number;           // вид карточки [Маршрут, Отчет, Событие]
  id: number;             // идентификатор карточки
  dateCreate: Date;       // дата создания
  dateUpdate: Date;       // дата обновления
  name: string;           // название
}