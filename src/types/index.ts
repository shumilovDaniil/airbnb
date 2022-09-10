export default interface IRoom {
  id: number;
  distance: number;
  name: string;
  images: string[];
  rating: number;
  date: {
    start: string;
    end: string;
  };
  price: {
    night: number;
    total: number;
    priceItems: [
      {
        title: string;
        amount: number;
      }
    ];
  };
}

export default interface IRoomPage {
  id: number;
  distance: number;
  city: string;
  country: string;
  images: string[];
  rating: number;
  address: string;
  persons: number;
  reviewsCount: number;
  isSuperhost: boolean;
  hostThumbnail: string;
  beds: number;
  bathrooms: number;
  bedrooms: number;
  date: {
    start: string;
    end: string;
  };
  price: {
    night: number;
    total: number;
    priceItems: [
      {
        title: string;
        amount: number;
      }
    ];
  };
  previewAmenities: ["Wifi", "Heating"];
}
