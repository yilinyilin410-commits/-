export interface Member {
  id: string;
  name: string;
  role: string;
  desc: string;
  color: string;
  avatar: string;
}

export interface Attraction {
  name: string;
  intro: string;
  play: string;
  feature: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  city: string;
  weather: string;
  title: string;
  bgImage: string;
  transport: string;
  food: {
    main?: string[];
    snack?: string[];
    drink?: string[];
    dessert?: string[];
  };
  details: string[];
  attractions?: Attraction[];
  memberComment: {
    member: string;
    text: string;
  };
}

export interface Flight {
  type: 'go' | 'back';
  route: string;
  no: string;
}

export interface Hotel {
  name: string;
  address: string;
  mapUrl: string;
}
